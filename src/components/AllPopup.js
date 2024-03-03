import React from "react";
import Modal from "./Modal";
import Dialog from "./Dialog";
import SigninModal from "./SigninModal";
import SigninDialog from "./SigninDialog";

function AllPopup() {
    return (
        <>
            <Modal />
            <SigninModal />
            <Dialog />
            <SigninDialog />
        </>
    );
}

export default AllPopup;
