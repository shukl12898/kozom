import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { app } from "../../firebaseConfig.js"; // Import the Firebase app instance
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@customElement("signup-display")
export class SignupDisplay extends LitElement {
  @property({ type: String }) registerPassword = "";
  @property({ type: String }) registerEmail = "";

  handleRegister(event: Event) {
    event.preventDefault();

    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, this.registerEmail, this.registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registration successful", user);
        this.dispatchEvent(new CustomEvent<{ email: string; password: string }>('registration-success', {
          bubbles: true,
          composed: true
        }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration failed:", errorCode, errorMessage);
      })
  }

  handleEnterPressed() {
    // Submit the form when Enter is pressed in the text input
    const form = this.shadowRoot?.querySelector("#register");
    if (form) {
      this.handleRegister;
    }
  }

  render() {
    return html`
      <div>
        <h2>Kozom Register</h2>
        <form id="register" @submit="${this.handleRegister}">
          <text-input
            type="email"
            .value="${this.registerEmail}"
            @input="${(e: any) => (this.registerEmail = e.target.value)}"
            @enter-pressed="${this.handleRegister}"
            placeholder="Email"
          ></text-input>
          <text-input
            type="password"
            .value="${this.registerPassword}"
            @input="${(e: any) => (this.registerPassword = e.target.value)}"
            @enter-pressed="${this.handleRegister}"
            placeholder="Password"
          /></text-input>
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
  `;
}