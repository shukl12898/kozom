import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { app } from "../../firebaseConfig.js"; // Import the Firebase app instance
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@customElement("login-display")
export class LoginDisplay extends LitElement {
  @property({ type: String }) loginPassword = "";
  @property({ type: String }) loginEmail = "";
  @property({ type: String }) errorMessage = "";

  handleLogin(event: Event) {
    event.preventDefault();

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, this.loginEmail, this.loginPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.errorMessage = "";
        console.log("Sign in successful", user);
        this.dispatchEvent(new CustomEvent('login-success', {
          bubbles: true, // Allow event to bubble up through the DOM
          composed: true // Allow event to cross shadow DOM boundary
        }));
      }).catch((error) => {
        this.errorMessage = error.message;
        this.requestUpdate();
      });

  }

  handleEnterPressed() {
    // Submit the form when Enter is pressed in the text input
    const form = this.shadowRoot?.querySelector("#login");
    if (form) {
      this.handleLogin;
    }
  }

  render() {
    return html`
      <div>
        <h2>Kozom Login</h2>
        <form id="login" @submit="${this.handleLogin}">
          <text-input
            type="email"
            .value="${this.loginEmail}"
            @input="${(e: any) => (this.loginEmail = e.target.value)}"
            @enter-pressed="${this.handleLogin}"
            placeholder="Email"
          ></text-input>
          <text-input
            type="password"
            .value="${this.loginPassword}"
            @input="${(e: any) => (this.loginPassword = e.target.value)}"
            @enter-pressed="${this.handleLogin}"
            placeholder="Password"
          /></text-input>
          ${this.errorMessage ? html`<p class="error">${this.errorMessage}</p>` : ''}
          <p> Don't have an account? <a href="/signup">Click Here</a> </p>
        </form>
      
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      padding: 16px;
      margin: 0;
    }

    h2 {
      text-align: center;
    }

    p {
      text-align: center;
    }

    .error {
      color: red;
    }
  `;
}
