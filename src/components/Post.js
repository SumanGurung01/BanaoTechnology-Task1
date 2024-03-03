import React, { useContext } from "react";
import "../styles/Post.css";
import { Context } from "../context/GlobalContext.js";

function Post() {
    const { imagePostData } = useContext(Context);
    return (
        <div className="posts">
            {imagePostData.map((post) => (
                <ImagePost key={post.id} data={post} />
            ))}

            <div className="post">
                <img
                    src={require("../assets/post3.png")}
                    alt="post image"
                    className="post__image"
                />
                <div style={{ padding: "10px" }}>
                    <p style={{ fontWeight: "900" }}>📅 Meetup</p>

                    <div className="post__heading">
                        <h5 className="post__heading-text">
                            Finance & Investment Elite Social Mixer @Lujiazui
                        </h5>
                        <img
                            src={require("../assets/threedot.png")}
                            alt="menu"
                            className="post__heading-image"
                        />
                    </div>

                    <div
                        className="myflex location-calander"
                        style={{
                            justifyContent: "start"
                        }}
                    >
                        <img
                            src={require("../assets/calander.png")}
                            alt="menu"
                        />
                        <p style={{ marginRight: "10px" }}>Fri, 12 Oct, 2018</p>
                        <img
                            src={require("../assets/location.png")}
                            alt="menu"
                        />
                        <p>Ahmedabad, India</p>
                    </div>

                    <button
                        className="btn btn-outline-danger"
                        style={{ width: "100%", margin: "20px 0 20px 0" }}
                    >
                        Visit Website
                    </button>

                    <div className="myflex profile__container">
                        <div className="myflex profile">
                            <img
                                src={require("../assets/user3.png")}
                                alt="avatar"
                            />
                            <div>
                                <h5>Ronal Jones</h5>
                                <p>800 views</p>
                            </div>
                        </div>

                        <div className="hidden__view myflex">
                            <img
                                src={require("../assets/share.png")}
                                alt="view-icon"
                            />
                            <p>800 views</p>
                        </div>
                        <button className="myflex button">
                            <img
                                src={require("../assets/share.png")}
                                alt="share"
                            />
                            <p>Share</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="post">
                <div style={{ padding: "10px" }}>
                    <p style={{ fontWeight: "900" }}>💼 Job</p>

                    <div className="post__heading">
                        <h5 className="post__heading-text">
                            Software Developer
                        </h5>
                        <img
                            src={require("../assets/threedot.png")}
                            alt="menu"
                            className="post__heading-image"
                        />
                    </div>

                    <div
                        className="myflex location-calander"
                        style={{
                            justifyContent: "start"
                        }}
                    >
                        <img src={require("../assets/bag.png")} alt="menu" />
                        <p style={{ marginRight: "10px" }}>
                            Innocaccer Analytics
                        </p>
                        <img
                            src={require("../assets/location.png")}
                            alt="menu"
                        />
                        <p>Noida, India</p>
                    </div>

                    <button
                        className="btn btn-outline-success"
                        style={{ width: "100%", margin: "20px 0 20px 0" }}
                    >
                        Apply on Timesjobs
                    </button>

                    <div className="myflex profile__container">
                        <div className="myflex profile">
                            <img
                                src={require("../assets/user4.png")}
                                alt="avatar"
                            />
                            <div>
                                <h5>Joseph Gray</h5>
                                <p>1.7k views</p>
                            </div>
                        </div>

                        <div className="hidden__view myflex">
                            <img
                                src={require("../assets/share.png")}
                                alt="view-icon"
                            />
                            <p>1.7k views</p>
                        </div>
                        <button className="myflex button">
                            <img
                                src={require("../assets/share.png")}
                                alt="share"
                            />
                            <p>Share</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;

function ImagePost({ data }) {
    const { image, type, heading, content, name, avatar, views } = data;
    return (
        <div className="post">
            <img
                src={require(`../assets/${image}.png`)}
                alt="post image"
                className="post__image"
            />
            <div style={{ padding: "10px" }}>
                <p style={{ fontWeight: "900" }}>{type}</p>

                <div className="post__heading">
                    <h5 className="post__heading-text">{heading}</h5>
                    <img
                        src={require("../assets/threedot.png")}
                        alt="menu"
                        className="post__heading-image"
                    />
                </div>

                <p className="post__content">{content}</p>

                <div className="myflex profile__container">
                    <div className="myflex profile">
                        <img
                            src={require(`../assets/${avatar}.png`)}
                            alt="avatar"
                        />
                        <div>
                            <h5>{name}</h5>
                            <p>{views}k views</p>
                        </div>
                    </div>

                    <div className="hidden__view myflex">
                        <img
                            src={require("../assets/share.png")}
                            alt="view-icon"
                        />
                        <p>{views}k views</p>
                    </div>
                    <button className="myflex button">
                        <img src={require("../assets/share.png")} alt="share" />
                        <p>Share</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
