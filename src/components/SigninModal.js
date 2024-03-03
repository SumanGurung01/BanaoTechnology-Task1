import React, { useContext } from "react";
import { Context } from "../context/GlobalContext";
import "../styles/Modal.css";

function SigninModal() {
    const { handleLogin, width } = useContext(Context);

    return (
        <div
            class="offcanvas offcanvas-bottom"
            tabindex="-1"
            id="signin-offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">
                    Welcome Back!
                </h5>
                <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <div className="form__button__container">
                <div className="myflex">
                    <button
                        className="btn btn-primary form__button"
                        onClick={handleLogin}
                        data-bs-dismiss="offcanvas"
                    >
                        Sign In
                    </button>
                    <a
                        href="#"
                        className="mylink"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom"
                    >
                        or, Create Account
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

            <p style={{ textAlign: "center" }}>Forgot Password?</p>
        </div>
    );
}

export default SigninModal;
