import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("chat-bubble")
export class ChatBubble extends LitElement {
  @property({ type: String }) sender: string = "";
  @property({ type: String }) text: string = "";

  render() {
    return html`
      <div class="bubble ${this.sender === "user" ? "user" : "bot"}">
        <p>${this.text}</p>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      width: fit-content;
      max-width: 80%;
    }
    :host([sender='user']) {
      align-self: flex-end;
    }
    .bubble {
      padding: 0 1em;
      border-radius: 15px;
      margin: 5px;
      max-width: 80%;
      min-width: fit-content;
      word-wrap: break-word;
    }
    .user {
      background-color: #2f88ff;
      color: #fff;
      align-self: flex-end;
      margin-left: auto;
      text-align: left;
    }
    .bot {
      background-color: #ededed;
      align-self: flex-start;
      text-align: left;
    }
    .bot p {
      color: #000;
      opacity: 0.75;
    }
  `;

}
