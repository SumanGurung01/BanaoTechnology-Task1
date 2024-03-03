import React from "react";
import Group from "./Group";
import Post from "./Post";
import "../styles/Content.css";

function Content() {
    return (
        <div className="content">
            <div
                className="content__container"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <div className="content__post">
                    <Post />
                </div>

                <div className="content__group">
                    <Group />
                </div>
            </div>
        </div>
    );
}

export default Content;
