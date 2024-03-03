import React, { useContext } from "react";
import { Context } from "../context/GlobalContext";
import "../styles/Dialog.css";

function SigninDialog() {
    const { handleLogin } = useContext(Context);

    return (
        <div
            class="modal fade"
            id="signin-staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <p
                            class="modal-title"
                            id="staticBackdropLabel"
                            style={{ flex: "1" }}
                        >
                            Let's learn, share & inspire each other with our
                            passion for computer engineering. Sign up now 🤘🏼
                        </p>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div style={{ padding: "10px" }}>
                        <div className="myflex dialog__heading">
                            <h5 style={{ flex: "1" }}>Sign In</h5>
                            <p>
                                Don't have an account yet??{" "}
                                <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                    data-bs-dismiss="modal"
                                >
                                    Create new for free!
                                </a>
                            </p>
                        </div>
                        <div className="myflex dialog__container">
                            <div>
                                <div className="form">
                                    <input type="email" placeholder="Email" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form__button__container">
                                    <div className="myflex">
                                        <button
                                            className="btn btn-primary form__button"
                                            onClick={handleLogin}
                                            data-bs-dismiss="modal"
                                            style={{ width: "100%" }}
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                    <button className="signin-button myflex">
                                        <img
                                            src={require("../assets/facebook.png")}
                                        />
                                        Sign up with Facebook
                                    </button>
                                    <button className="signin-button">
                                        <img
                                            src={require("../assets/google.png")}
                                        />
                                        Sign up with Google
                                    </button>
                                </div>
                            </div>

                            <div>
                                <img
                                    src={require("../assets/abstract.png")}
                                ></img>
                                <p
                                    style={{
                                        textAlign: "center",
                                        fontSize: "10px"
                                    }}
                                >
                                    Forgot Password?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninDialog;
