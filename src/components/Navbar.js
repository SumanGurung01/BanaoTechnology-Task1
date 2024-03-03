import React, { useContext } from "react";
import "../styles/Navbar.css";
import { Context } from "../context/GlobalContext";

function Navbar() {
    const { isLogged, width } = useContext(Context);
    return (
        <div className="navbar__component myflex">
            <p className="myflex" style={{ fontSize: "30px" }}>
                <span style={{ color: "green" }}>ATG.</span>WR
                <img src={require("../assets/logo.png")} alt="logo" />
                LD
            </p>
            <div className="navbar__input myflex">
                <img src={require("../assets/search.png")} alt="logo" />
                <input
                    type="text"
                    placeholder="Search for your favourite groups in ATG"
                />
            </div>

            <div style={{ cursor: "pointer" }}>
                {isLogged ? (
                    <div className="myflex user__dropdown">
                        <img src={require("../assets/user4.png")} />
                        <p style={{ margin: "0 0 0 10px" }}>Siddharth Goyal</p>
                        <img
                            src={require("../assets/dropdown.png")}
                            style={{ width: "10px", marginLeft: "10px" }}
                        />
                    </div>
                ) : (
                    <div
                        data-bs-toggle={width < 600 ? "offcanvas" : "modal"}
                        data-bs-target={
                            width < 600 ? "#offcanvasBottom" : "#staticBackdrop"
                        }
                    >
                        Create account. <a href="#">its free!</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
