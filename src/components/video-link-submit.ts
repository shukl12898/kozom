import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("video-link-submit")
export class VideoLinkSubmit extends LitElement {
  @query("input", true) _videoURL!: HTMLInputElement;

  handleURLSubmit() {
    const url = this._videoURL.value;

    // Dispatch a custom event to notify the app that a URL has been submitted.
    const urlSubmittedEvent = new CustomEvent("urlSubmitted", {
      detail: { url },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(urlSubmittedEvent);

    this._videoURL.value = "";
  }

  render() {
    return html`
      <input id="youtubeUrlInput" type="text" placeholder="Enter YouTube URL" />
      <icon-button @click=${this.handleURLSubmit}>
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
      
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }
    div {
      width: 100%;
    }
    input[type="text"] {
      width: 90%;
      padding: 1em 1em;
      border-radius: var(--border-radius-input);
      border: unset;
      background-color: var(--color-neutral-medium);
      color: #000;
    }
    icon-button {
      height: 44px;
    }
    icon-button svg {
      transform: rotate(180deg);
      fill: #fff;
    }
  `;

}
