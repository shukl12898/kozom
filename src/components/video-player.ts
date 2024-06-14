import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("video-player")
export class VideoPlayer extends LitElement {
  @property({ type: String }) url = "";

  private buildEmbeddedLink(url: string): string | null {
    this.addEventListener("urlReceived", ((e: CustomEvent) => {
      this.url = e.detail;
    }) as EventListener);

    // Regular expression to match YouTube video URLs
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;

    // Check if the input URL matches the YouTube URL pattern
    const match = url.match(youtubeRegex);

    if (match) {
      // Extract the video ID from the matched URL
      const videoId = match[1];

      // Construct the embedded YouTube URL
      const embeddedURL = `https://www.youtube.com/embed/${videoId}`;

      return embeddedURL;
    } else {
      // Return null if the input URL is not a valid YouTube video URL
      return null;
    }
  }

  render() {
    return html`
        <article id="playerContainer">
            <iframe 
                src="${this.buildEmbeddedLink(this.url)}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share" 
                allowfullscreen
            </iframe>
        </article>
        `;
  }

  static styles = css`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
    }
    article {
      display: flex;
      overflow: hidden;
      position: relative;
      height: 100%;
      width: 100%;
    }
    article iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `;
}
