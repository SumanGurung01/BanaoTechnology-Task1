import React, { useContext } from "react";
import "../styles/Group.css";
import { Context } from "../context/GlobalContext";

function Group() {
    const { groupData, setGroupData } = useContext(Context);
    const { isLogged } = useContext(Context);

    function handleFollow(id) {
        const newData = groupData.map((data) => {
            if (data.id === id) {
                data.followed = !data.followed;
            }
            return data;
        });

        setGroupData(newData);
    }

    return (
        <div className="group">
            <div className="group__location myflex">
                <img
                    src={require("../assets/location.png")}
                    alt="location-icon"
                />
                <p>Noida, India</p>
                <img src={require("../assets/edit.png")} alt="edit-icon" />
            </div>
            <div className="myflex group__notice">
                <img src={require("../assets/notice.png")} alt="notice-icon" />
                <p>
                    Your location will help us serve better and extend a
                    personalised experience.
                </p>
            </div>

            {isLogged ? (
                <>
                    <div className="myflex group__recommended">
                        <img src={require("../assets/recommended.png")} />
                        <h6>RECOMMENDED GROUPS</h6>
                    </div>

                    <div>
                        {groupData.map((data) => (
                            <div className="myflex groupsection" key={data.id}>
                                <img
                                    src={require(`../assets/${data.image}.png`)}
                                />
                                <h6>{data.name}</h6>
                                <button
                                    onClick={() => {
                                        handleFollow(data.id);
                                    }}
                                    className={data.followed ? "black" : ""}
                                >
                                    {data.followed ? "Followed" : "Follow"}
                                </button>
                            </div>
                        ))}
                    </div>
                    <a className="see-more">See More ...</a>
                </>
            ) : null}
        </div>
    );
}

export default Group;
