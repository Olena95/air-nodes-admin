"use client";
import React, { createContext, ReactNode, useRef } from "react";
import "./popups.scss";
import CloseBtn from "../icons/CloseBtn";
import { usePopups } from "./PopupProvider";
import useOnClickOutside from "@/hooks/useOnClickOutside";

interface IPopupWrapper {
    children: ReactNode;
    title: string;
}

const PopupWrapper = ({ children, title }: IPopupWrapper) => {
    const { closePopup } = usePopups();
    const popupContentRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(popupContentRef, () => closePopup && closePopup());
    return (
        <div className="popup-wrapper">
            <div
                ref={popupContentRef}
                className="popup-wrapper__content-wrapper "
            >
                <div className="popup-wrapper__title">
                    <div>{title}</div>
                    <div className="popup-close-btn">
                        <CloseBtn />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default PopupWrapper;
