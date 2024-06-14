import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("kozom-nav")
export class KozomNav extends LitElement {
  render() {
    return html`
      <nav>
        <menu-label open>
          <h2 slot="title">Suggested Videos</h2>
          <video-menu-group>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
          </video-menu-group>
        </menu-label>

        <menu-label>
          <h2 slot="title">History</h2>
          <video-menu-group>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
          </video-menu-group>
        </menu-label>

        <menu-label>
          <h2 slot="title">Curriculum</h2>
          <video-menu-group>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
            <video-menu-item slot="items">
              <span slot="icon">
                <svg
                  id="icon"
                  width="30"
                  height="20"
                  viewBox="0 -3.5 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.53 1.15C19.378 1.06223 19.2055 1.01603 19.03 1.01603C18.8545 1.01603 18.682 1.06223 18.53 1.15L15 2.89C14.9715 2.11357 14.6429 1.37847 14.0834 0.839439C13.5238 0.300405 12.777 -0.000521775 12 6.79157e-07H3C2.20435 6.79157e-07 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V9C0 9.79565 0.316071 10.5587 0.87868 11.1213C1.44129 11.6839 2.20435 12 3 12H12C12.777 12.0005 13.5238 11.6996 14.0834 11.1606C14.6429 10.6215 14.9715 9.88643 15 9.11L18.56 10.89C18.6963 10.9599 18.8468 10.9975 19 11C19.1872 11.0006 19.3709 10.9486 19.53 10.85C19.6741 10.7599 19.7929 10.6346 19.8751 10.4859C19.9574 10.3372 20.0003 10.1699 20 10V2C20.0003 1.83006 19.9574 1.66283 19.8751 1.51411C19.7929 1.36538 19.6741 1.24007 19.53 1.15ZM13 9C13 9.26522 12.8946 9.51957 12.7071 9.70711C12.5196 9.89464 12.2652 10 12 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V9ZM18 8.38L15 6.88V5.12L18 3.62V8.38Z"
                    fill="#b9bfc7"
                  />
                </svg>
              </span>
              <span slot="title">Video History Title</span>
            </video-menu-item>
          </video-menu-group>
        </menu-label>
      </nav>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      width: 100%;
      height: 100%;
    }

    nav {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: var(--color-neutral-light);
      border-radius: var(--border-radius-box);
      overflow: hidden;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-top: 15px;
    }
  `;
}