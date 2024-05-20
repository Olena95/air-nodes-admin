"use client";
import React from "react";

import { usePopups } from "./PopupProvider";
import EditNodePopup from "./EditNodePopup";

const Popups = () => {
    const { popups } = usePopups();
    return <>{popups === "edit-node-popup" && <EditNodePopup />}</>;
};

export default Popups;
