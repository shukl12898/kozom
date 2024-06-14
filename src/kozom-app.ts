import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Router } from '@vaadin/router';

@customElement("kozom-app")
export class KozomApp extends LitElement {
  @property({ type: Boolean })
  isAuthenticated = false;

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector("#outlet");
    if (outlet) {
      const router = new Router(this.shadowRoot?.querySelector('#outlet'));
      router.setRoutes([
        { path: '/', component: 'login-display' },
        { path: '/signup', component: 'signup-display' },
        { path: '/home', component: 'kozom-home' },
      ]);
    } else {
      console.error("Router outlet not found!");
    }
  }

  constructor() {
    super();
    this.addEventListener('login-success', () => {
      Router.go('/home');
    });
    this.addEventListener('registration-success', () => {
      Router.go('/home');
    });
  }

  render() {
    return html`
      <div id="outlet"></div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      width: 100vw;
      height: 100vh;
      flex-direction: row;
      align-items: flex-start;
      font-family: var(--font-family);
      background-color: var(--color-neutral-lighter);
      color: #000;
    }
    .kozom-loading {
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-weight: var(--font-weight-regular);
      margin: 0.5em 0.75em;
    }
    h1 i {
      color: var(--color-blue-normal);
      font-weight: var(--font-weight-extra-light);
    }
    h5 {
      opacity: 0.6;
      font-weight: var(--font-weight-thin);
    }

    #landing {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 2em 0;
    }
    #landing div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding-top: 50px;
    }

    #landing div * {
      margin: 0;
    }

    article {
      display: flex;
      flex-direction: column;
      max-width: 30vw;
      width: 20vw;
      height: 95vh;
      padding: 2vh 2vw;
    }
    article h1 {
      color: var(--color-blue-medium);
    }
    article span {
      display: flex;
    }
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      min-width: 70vw;
      width: 80vw;
      height: 100%;
      padding: 0 4em;
    }
    .app {
      display: flex;
      flex-direction: column;
    }
    #video-player-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 57vh;

      border-radius: var(--border-radius-box);
      overflow: hidden;
    }

    @media (prefers-color-scheme: light) {
      :host {
        background-color: #fff;
      }
    }
  `;
}
