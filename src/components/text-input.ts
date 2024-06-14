import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("text-input")
export class TextInput extends LitElement {
  @property({ type: String }) type: "text" | "password" = "text";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.dispatchEvent(new CustomEvent("enter-pressed"));
    }
  }

  handleIconClick() {
    this.dispatchEvent(new CustomEvent("enter-pressed"));
  }

  render() {
    return html`
      <div class="input-container">
        <input
          type="${this.type}"
          placeholder="${this.placeholder}"
          .value="${this.value}"
          @input="${this.handleChange}"
          @keydown="${this.handleKeyPress}"
        >
        ${this.value ? html`
          <div class="icon-container">
            <button class="icon-button" @click="${this.handleIconClick}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
              </svg>
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
    }
    .input-container {
      position: relative;
    }
    input {
      padding: 8px;
      border: 1px solid var(--color-neutral-medium);
      border-radius: var(--border-radius-input);
      font-size: 1rem;
      transition: border-color 0.3s ease-in-out;
      width: 100%;
    }
    input:focus {
      outline: none;
      border-color: var(--color-blue-normal);
    }
    .icon-container {
      position: absolute;
      top: 52%;
      right: 0px;
      transform: translateY(-50%);
    }
    .icon-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
  `;
}
