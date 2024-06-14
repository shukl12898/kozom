import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("video-menu-item")
export class VideoMenuItem extends LitElement {
  //Fields
  @property
  ({type: Boolean, reflect: true}) isActive = false;

  //Methods
  notifyParent(){
    this.dispatchEvent(new CustomEvent('item-activated',{
        bubbles: true,
        composed: true,
        detail: { activated: true }
    }));
  }

  connectedCallback(): void {
      super.connectedCallback();
      this.addEventListener('click', this.notifyParent);
  }

  disconnectedCallback(): void {
      super.disconnectedCallback();
      this.removeEventListener('click', this.notifyParent);
  }

  render() {
    return html`
      <button>
        <slot name="icon"></slot>
        <slot name="title"></slot>
      </button>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      width: 100%;
    }
    button {
      appearance: none;
      border: none;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      background-color: transparent;
      transition: var(--transition-fast);
      padding: 0.4em 0;
      cursor: pointer;
    }
    :host button:hover {
        background-color: var(--color-neutral-medium);
    }
    :host button:active {
      background-color: var(--color-neutral-normal);

    }
    :host([isActive]) button {
        background-color: var(--color-neutral-shaded);
    }
    :host([isActive]) ::slotted([slot="title"]) {
        color: #fff;
    }
    ::slotted([slot="icon"]){
        display: flex;
        align-items: center;
        margin-right: 5px;
        margin-left: 10px;
        background-color: transparent;
    }
    ::slotted([slot="title"]){
        color: var(--color-neutral-shaded);
        background-color: transparent;
    }
  `;
}
