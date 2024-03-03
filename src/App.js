import React from "react";
import Banner from "./components/Banner";
import Content from "./components/Content";
import SecondaryNavbar from "./components/SecondaryNavbar";
import AllPopup from "./components/AllPopup";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div style={{ overflowX: "hidden" }}>
            <Navbar />
            <Banner />
            <SecondaryNavbar></SecondaryNavbar>
            <Content />
            <AllPopup />
        </div>
    );
}

export default App;
