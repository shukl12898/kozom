import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("icon-button")
export class IconButton extends LitElement {
  @property({ type: Function }) onClick: (() => void) | null = null;
  @property({ type: Boolean }) disabled = false;

  handleClick = () => {
    if (this.onClick) {
      this.onClick();
    }
  };

  render() {
    return html`
      <button @click=${this.handleClick} ?disabled=${this.disabled}>
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    :host {
      display: inline-flex;
      gap: 10px;
      height: min-content;
    }
    button {
      appearance: none;
      border: none;
      padding: 8px; /* Adjust padding to ensure the button is not too big */
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-blue-normal);
      border-radius: var(--border-radius-button);
      transition: var(--transition-fast);
      cursor: pointer;
    }

    :host button:not(:disabled):hover {
      background-color: var(--color-blue-medium);
    }
    :host button:not(:disabled):active {
      background-color: var(--color-blue-shaded);
    }

    :host button:disabled {
      background-color: var(--color-blue-lighter);
      pointer-events: none;
      color: var(--color-neutral-medium);
    }
  `;
}
