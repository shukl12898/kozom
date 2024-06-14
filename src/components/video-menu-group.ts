import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { VideoMenuItem } from "./video-menu-item.ts"

@customElement("video-menu-group")
export class VideoMenuGroup extends LitElement {
  //Fields

  //Methods
  firstUpdated() {
    this.addEventListener('item-activated', this.handleItemActivation as EventListener);
  }
  
  handleItemActivation(e: CustomEvent<{ activated: boolean }>) {
    // obtain the slot
    const slot = this.shadowRoot?.querySelector('slot');

    // get all slotted elements
    const slottedItems = slot?.assignedElements({flatten: true});
    const actualTarget = e.composedPath()[0];
  
    // iterate over each videoMenuItem to ensure only one item is 'active'
    slottedItems?.forEach((item) => {
      if (item instanceof VideoMenuItem) {
        if (item === actualTarget) {
          item.isActive = true; 
        } else {
          item.isActive = false;
        }
      }
    });
  }

  render() {
    return html`
      <slot name="items"></slot>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 99%;
      justify-content: flex-start;
      gap: 10px
    }
  `;
}
