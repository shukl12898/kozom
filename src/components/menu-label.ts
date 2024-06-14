import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('menu-label')
export class MenuLabel extends LitElement {
  @property({ type: String })
  title: string = ''; // The title of the section

  @property({ type: Boolean, reflect: true })
  open: boolean = false;
  
  @state() private expanded: boolean = false; // State to manage if the section is expanded or not


  toggle() {
    this.expanded = !this.expanded;
    this.dispatchEvent(new CustomEvent('toggle-expanded', { detail: { expanded: this.expanded } }));
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('open')) {
      this.expanded = this.open;
    }
    super.updated(changedProperties);
  }

  render() {
    const expandIcon = this.expanded ? html`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="#667180"/>
    </svg>` : html`<svg width="20" height="16" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 1.17C10.8126 0.983753 10.5592 0.879211 10.295 0.879211C10.0308 0.879211 9.77737 0.983753 9.59001 1.17L6.00001 4.71L2.46001 1.17C2.27265 0.983753 2.0192 0.879211 1.75501 0.879211C1.49082 0.879211 1.23737 0.983753 1.05001 1.17C0.956281 1.26297 0.881887 1.37357 0.831118 1.49543C0.780349 1.61729 0.754211 1.74799 0.754211 1.88C0.754211 2.01202 0.780349 2.14272 0.831118 2.26458C0.881887 2.38644 0.956281 2.49704 1.05001 2.59L5.29001 6.83C5.38297 6.92373 5.49357 6.99813 5.61543 7.04889C5.73729 7.09966 5.868 7.1258 6.00001 7.1258C6.13202 7.1258 6.26273 7.09966 6.38459 7.04889C6.50645 6.99813 6.61705 6.92373 6.71001 6.83L11 2.59C11.0937 2.49704 11.1681 2.38644 11.2189 2.26458C11.2697 2.14272 11.2958 2.01202 11.2958 1.88C11.2958 1.74799 11.2697 1.61729 11.2189 1.49543C11.1681 1.37357 11.0937 1.26297 11 1.17Z" fill="#667180"/>
    </svg>`;

    return html`
      <div class="menu-label" @click="${this.toggle}">
        <slot name="title">${this.title}</slot> 
        <span>${expandIcon}</span>
      </div>
      <div class="menu-content" ?hidden="${!this.expanded}">
        <slot></slot> 
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block; 
      width: 90%; 
      background-color: transparent; 
      justify-content: flex-start;
      margin-bottom: 25px;
    }

    .menu-label {
      display: flex;
      width: 90%;
      padding: 10px 10px 5px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-neutral-normal); 
    }
    .menu-content {
      padding-top: 10px;
    }

    ::slotted([slot="icon"]){
      display: flex;
      background-color: transparent;
      width: 25%;
    }
    ::slotted([slot="title"]){
        color: var(--color-neutral-normal);
        background-color: transparent;
        width: 75%;
        margin: 0;
        font-weight: var(--font-weight-thin);
    }
  `;
}
