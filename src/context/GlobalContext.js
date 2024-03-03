import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const group = [
    {
        id: 1,
        image: "group1",
        name: "Leisure",
        followed: false
    },
    {
        id: 2,
        image: "group2",
        name: "Activism",
        followed: false
    },
    {
        id: 3,
        image: "group3",
        name: "MBA",
        followed: false
    },
    {
        id: 4,
        image: "group4",
        name: "Philosophy",
        followed: false
    }
];

const imagePost = [
    {
        id: 1,
        image: "post1",
        type: "✍️ Article",
        heading: " What if famous brands had regular fonts? Meet RegulaBrands!",
        content:
            "I’ve worked in UX for the better part of a decade. From now on,I plan to lorem ipsum dolor sit amet, consectetur adipiscing",
        name: "Sarthak Kamra",
        avatar: "user1",
        views: 1.4
    },
    {
        id: 2,
        image: "post2",
        type: "🔬 Education",
        heading: " What if famous brands had regular fonts? Meet RegulaBrands!",
        content:
            "I’ve worked in UX for the better part of a decade. From now on,I plan to lorem ipsum dolor sit amet, consectetur adipiscing",
        avatar: "user2",
        name: "Sarah West",
        views: 4.8
    }
];

function GlobalContext({ children }) {
    const [groupData, setGroupData] = useState(group);
    const [imagePostData, setImagePostData] = useState(imagePost);
    const [isLogged, setIsLogged] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [display, setDisplay] = useState({
        modal: true,
        dialog: true
    });

    function handleLogin() {
        setIsLogged(!isLogged);
    }

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Context.Provider
            value={{
                groupData,
                setGroupData,
                imagePostData,
                isLogged,
                setIsLogged,
                handleLogin,
                width,
                display,
                setDisplay
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default GlobalContext;
