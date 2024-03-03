import React, { useContext } from "react";
import { Context } from "../context/GlobalContext";
import "../styles/Modal.css";

function Modal() {
    const { handleLogin } = useContext(Context);

    return (
        <div
            class="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">
                    Create Account
                </h5>
                <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="form">
                <div className="myflex">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
            </div>
            <div className="form__button__container">
                <div className="myflex">
                    <button
                        className="btn btn-primary form__button"
                        onClick={handleLogin}
                        data-bs-dismiss="offcanvas"
                    >
                        Create Account
                    </button>
                    <a
                        href="#"
                        className="mylink"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#signin-offcanvasBottom"
                    >
                        or, Sign In
                    </a>
                </div>
                <button className="signin-button myflex">
                    <img src={require("../assets/facebook.png")} />
                    Sign up with Facebook
                </button>
                <button className="signin-button">
                    <img src={require("../assets/google.png")} />
                    Sign up with Google
                </button>
            </div>

            <p style={{ textAlign: "center" }}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
            </p>
        </div>
    );
}

export default Modal;
