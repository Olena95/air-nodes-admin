import "./button.scss";
import React, { ReactNode } from "react";
interface IButton {
    title?: string;
    onClick?: () => void;
    className?: string;
    isDisabled?: boolean;
    light?: boolean;
    leftIcon?: ReactNode;
}
const ButtonSlideTitle = ({
    title,
    onClick,
    className,
    isDisabled,
    light,
    leftIcon,
}: IButton) => {
    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            className={`ui-button-slide-title ${
                isDisabled ? "disabled-btn" : ""
            } ${className} cursor-pointer `}
        >
            <div className={`container ${className} `}>
                <div
                    className={`text-wrapper  ${className} ${
                        isDisabled ? "disabled-btn" : ""
                    } `}
                >
                    <div
                        className={`text text1 flex gap-1 justify-center items-center ${className} ${
                            isDisabled ? "disabled-btn" : ""
                        }`}
                    >
                        {leftIcon}
                        <div>{title}</div>
                    </div>
                    <div
                        className={`text text2 flex gap-1 justify-center items-center ${className} ${
                            isDisabled ? "disabled-btn" : ""
                        }`}
                    >
                        {leftIcon} <div>{title}</div>
                    </div>
                </div>
            </div>

            {light && <div className={`ligter ${className} `} />}
        </button>
    );
};

export default ButtonSlideTitle;
