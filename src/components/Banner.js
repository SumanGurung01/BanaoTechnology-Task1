import React, { useContext } from "react";
import "../styles/Banner.css";
import { Context } from "../context/GlobalContext";

function Banner() {
    const { isLogged, setIsLogged, width } = useContext(Context);

    return (
        <div className="banner">
            <img src={require("../assets/banner.png")} alt="banner" />
            <div className="banner__container">
                <div style={{ height: "0px" }}>
                    <div className="banner__navbar">
                        <img
                            src={require("../assets/arrow_back.png")}
                            alt="banner"
                            style={{ cursor: "pointer" }}
                        />

                        {isLogged ? (
                            <button
                                onClick={() => {
                                    setIsLogged(!isLogged);
                                }}
                            >
                                Leave Group
                            </button>
                        ) : (
                            <button
                                data-bs-toggle={
                                    width < 600 ? "offcanvas" : "modal"
                                }
                                data-bs-target={
                                    width < 600
                                        ? "#offcanvasBottom"
                                        : "#staticBackdrop"
                                }
                            >
                                Join Group
                            </button>
                        )}
                    </div>
                    <p id="banner__heading">Computer Engineering</p>
                    <p id="banner__text">
                        142,765 Computer Engineers follow this
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
