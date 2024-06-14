import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("chat-bot")
export class ChatBot extends LitElement {
  @state() private messages: Array<{ sender: string; text: string }> = [];
  private inputMessage: string = "";

  onInput(e: Event) {
    this.inputMessage = (e.target as HTMLInputElement).value;
  }

  onKeyPress(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this.sendMessage();
    }
  }

  sendMessage() {
    const trimmedMessage = this.inputMessage.trim();
    const inputField: HTMLInputElement | null = this.shadowRoot?.querySelector('#input-box') ?? null;
    if (trimmedMessage) {
      this.addMessage("user", trimmedMessage);
      this.callOpenAI(trimmedMessage);
      this.inputMessage = "";
      if (inputField) {
        inputField.value = "";
      }
    }
    
  }

  addMessage(sender: string, text: string) {
    this.messages = [...this.messages, { sender, text }];
    this.requestUpdate();
    this.scrollToBottom();
  }

  async callOpenAI(userInput: string) {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.addMessage("bot", data.reply);
    } catch (error) {
      console.error("Error:", error);
      this.addMessage(
        "bot",
        "Sorry, there was an error processing your request."
      );
    }
  }

  scrollToBottom() {
    const chatWindow = this.shadowRoot?.querySelector("#chat-window");
    if (chatWindow) {
      setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 0);
    }
  }

  render() {
    return html`
      <div id="chat-window">
        ${this.messages.map(
          (msg) =>
            html`<chat-bubble
              sender="${msg.sender}"
              text="${msg.text}"
            ></chat-bubble>`
        )}
      </div>
      <div id="chat-controls">
        <input
          id="input-box"
          type="text"
          @input="${this.onInput}"
          @keypress="${this.onKeyPress}"
          placeholder="Type your message"
        />
        <icon-button id="send" @click="${this.sendMessage}">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <path d="M 45 90 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 C 20.187 0 0 20.187 0 45 C 0 69.813 20.187 90 45 90 z M 45 10 c 19.299 0 35 15.701 35 35 S 64.299 80 45 80 S 10 64.299 10 45 S 25.701 10 45 10 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 27.223 49.926 h 35.555 c 2.761 0 5 -2.238 5 -5 s -2.239 -5 -5 -5 H 27.223 c -2.762 0 -5 2.239 -5 5 S 24.461 49.926 27.223 49.926 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              <path d="M 41.118 63.896 c 1.279 0 2.559 -0.488 3.536 -1.464 c 1.953 -1.953 1.953 -5.119 0 -7.071 L 34.294 45 l 10.36 -10.361 c 1.953 -1.953 1.953 -5.119 0 -7.071 c -1.953 -1.952 -5.119 -1.952 -7.072 0 L 23.687 41.464 c -1.952 1.953 -1.952 5.119 0 7.071 l 13.896 13.896 C 38.559 63.408 39.839 63.896 41.118 63.896 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
          </svg>
        </icon-button>
        <icon-button>
          <svg slot="icon" fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <!-- SVG paths -->
            <g>
              <g>
                <path d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z"/>
                <path d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z"/>
              </g>
            </g>
          </svg>
        </icon-button>
      </div>
    `;
  }


  static styles = css`
    :host {
      width: 100%;
    }
    #chat-window {
      display: flex;
      flex-direction: column;
      height: 25vh;
      overflow-y: auto;
      border-radius: 16px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .message {
      margin: 5px;
      padding: 10px;
      border-radius: 8px;
      background-color: #f1f1f1;
    }
    .user-message {
      text-align: right;
    }
    #chat-controls {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 15px;
    }
    #input-box {
      width: 90%;
      maring-right: 10px;
      padding: 1em 1em;
      border-radius: var(--border-radius-input);
      border: unset;
      background-color: var(--color-neutral-medium);
      color: #000;
    }
    icon-button {
      height: 45px;
    }
    #send svg {
      transform: rotate(180deg);
    }
    icon-button svg {
      height: 24px;
      fill: #fff;
    }
  `;


}
