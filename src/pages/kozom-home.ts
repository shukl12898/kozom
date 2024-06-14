import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("kozom-home")
export class KozomHome extends LitElement {

  @property({ type: Boolean })
  urlSubmitted = false;

  @property({ type: String })
  url = "";

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("urlSubmitted", this.handleURLSubmitted);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("urlSubmitted", this.handleURLSubmitted);
  }

  private resetUrls = () => {
    this.urlSubmitted = false;
    this.url = "";
  };

  private handleURLSubmitted(e: any) {
    this.urlSubmitted = !this.urlSubmitted;

    if (!this.url) {
      this.url = e.detail.url;
    }
  }

  render() {
    return html`
    <article>
      <span>
        <h1>Kozom</h1>
        ${this.urlSubmitted
        ? html`<icon-button
              id="resetApp"
              .width=${100}
              .height=${30}
              .onClick=${this.resetUrls}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                height="24"
                viewBox="0 0 256 256"
                xml:space="preserve"
              >
                <defs></defs>
                <g
                  style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 81.521 31.109 c -0.86 -1.73 -2.959 -2.438 -4.692 -1.575 c -1.73 0.86 -2.436 2.961 -1.575 4.692 c 2.329 4.685 3.51 9.734 3.51 15.01 C 78.764 67.854 63.617 83 45 83 S 11.236 67.854 11.236 49.236 c 0 -16.222 11.501 -29.805 26.776 -33.033 l -3.129 4.739 c -1.065 1.613 -0.62 3.784 0.992 4.85 c 0.594 0.392 1.264 0.579 1.926 0.579 c 1.136 0 2.251 -0.553 2.924 -1.571 l 7.176 -10.87 c 0.001 -0.001 0.001 -0.002 0.002 -0.003 l 0.018 -0.027 c 0.063 -0.096 0.106 -0.199 0.159 -0.299 c 0.049 -0.093 0.108 -0.181 0.149 -0.279 c 0.087 -0.207 0.152 -0.419 0.197 -0.634 c 0.009 -0.041 0.008 -0.085 0.015 -0.126 c 0.031 -0.182 0.053 -0.364 0.055 -0.547 c 0 -0.014 0.004 -0.028 0.004 -0.042 c 0 -0.066 -0.016 -0.128 -0.019 -0.193 c -0.008 -0.145 -0.018 -0.288 -0.043 -0.431 c -0.018 -0.097 -0.045 -0.189 -0.071 -0.283 c -0.032 -0.118 -0.065 -0.236 -0.109 -0.35 c -0.037 -0.095 -0.081 -0.185 -0.125 -0.276 c -0.052 -0.107 -0.107 -0.211 -0.17 -0.313 c -0.054 -0.087 -0.114 -0.168 -0.175 -0.25 c -0.07 -0.093 -0.143 -0.183 -0.223 -0.27 c -0.074 -0.08 -0.153 -0.155 -0.234 -0.228 c -0.047 -0.042 -0.085 -0.092 -0.135 -0.132 L 36.679 0.775 c -1.503 -1.213 -3.708 -0.977 -4.921 0.53 c -1.213 1.505 -0.976 3.709 0.53 4.921 l 3.972 3.2 C 17.97 13.438 4.236 29.759 4.236 49.236 C 4.236 71.714 22.522 90 45 90 s 40.764 -18.286 40.764 -40.764 C 85.764 42.87 84.337 36.772 81.521 31.109 z"
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #fff; fill-rule: nonzero; opacity: 1;"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </icon-button>`
        : ""}
      </span>
      <kozom-nav></kozom-nav>
    </article>
    <main>
      ${this.urlSubmitted
        ? html`
            <div id="video-player-container">
              <video-player .url=${this.url}></video-player>
            </div>
            <chat-bot></chat-bot>
          `
        : html`
            <div id="landing">
              <div>
                <h1>Welcome to <i>Kozom</i></h1>
                <h5>Enter a link to get started</h5>
              </div>
              <video-link-submit></video-link-submit>
            </div>
          `}
    </main>
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
