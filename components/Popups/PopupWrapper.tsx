import React, { createContext, ReactNode } from "react";
import "./popups.scss";
import CloseBtn from "../icons/CloseBtn";
interface IPopupWrapper {
    children: ReactNode;
    title: string;
}

const PopupWrapper = ({ children, title }: IPopupWrapper) => {
    return (
        <div className="popup-wrapper">
            <div className="popup-wrapper__content-wrapper ">
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
