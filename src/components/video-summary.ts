import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Task } from "@lit/task";

@customElement("video-summary")
export class VideoSummary extends LitElement {
  @property({ type: String }) videoId = "";

  private _videoInfoTask = new Task(this, {
    task: async ([videoId], { signal }) => {
      const apiUrl = `https://youtube-video-summarizer-gtp-plugin.vercel.app/video_info/${videoId}`;
      const response = await fetch(apiUrl, { signal });

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },
    args: () => [this.videoId],
  });

  render() {
    return this._videoInfoTask.render({
      pending: () => html`<p>Loading video summary...</p>`,
      complete: (videoInfo) => html`
        <h2>Video Summary:</h2>
        <p>Title: ${videoInfo.title}</p>
        <p>Description: ${videoInfo.description}</p>
      `,
      error: (e) => html`<p>Error: ${e}</p>`,
    });
  }

  static styles = css`
    :host {
      display: flex;
    }
  `;
}
