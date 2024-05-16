"use client";
import React from "react";
import PerionDeployPopup from "./PerionDeployPopup";
import { usePopups } from "./PopupProvider";
import ConnectNodePopup from "./ConnectNode";
import PublicKeyPopup from "./PublicKeyPopup";

const Popups = () => {
    const { popups } = usePopups();
    return (
        <>
            {popups === "period-popup" && <PerionDeployPopup />}
            {popups === "connect-node-popup" && <ConnectNodePopup />}
            {popups === "public-key-popup" && <PublicKeyPopup />}
        </>
    );
};

export default Popups;
