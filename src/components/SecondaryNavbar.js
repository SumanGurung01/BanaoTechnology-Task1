import React, { useContext } from "react";
import "../styles/SecondaryNavbar.css";
import { Context } from "../context/GlobalContext";

function SecondaryNavbar() {
    const { isLogged, setIsLogged, width } = useContext(Context);
    return (
        <div className="myflex secondary__navbar">
            <div className="myflex">
                <p className="sec__navbar-hidden p-tag">Posts(368)</p>
                <div className="myflex sec__navbar-links">
                    <p>All Posts(32)</p>
                    <p>Article</p>
                    <p>Event</p>
                    <p>Education</p>
                    <p>Jobs</p>
                </div>
                <button className="btn btn-light sec__navbar-hidden">
                    Filter : All
                </button>

                <div className="myflex sec__navbar-button">
                    <button className="btn btn-light">
                        Write a Post
                        <img
                            src={require("../assets/dropdown.png")}
                            style={{ width: "10px", marginLeft: "10px" }}
                        />
                    </button>
                    {isLogged ? (
                        <button
                            className="btn btn-light myflex"
                            onClick={() => setIsLogged(!isLogged)}
                        >
                            <img
                                src={require("../assets/leave.png")}
                                alt="leave-icon"
                                style={{ margin: "0 10px 0 0" }}
                            />
                            Leave Group
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary myflex"
                            data-bs-toggle={width < 600 ? "offcanvas" : "modal"}
                            data-bs-target={
                                width < 600
                                    ? "#offcanvasBottom"
                                    : "#staticBackdrop"
                            }
                        >
                            <img
                                src={require("../assets/join.png")}
                                alt="join-icon"
                                style={{ margin: "0 10px 0 0" }}
                            />
                            Join Group
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SecondaryNavbar;
