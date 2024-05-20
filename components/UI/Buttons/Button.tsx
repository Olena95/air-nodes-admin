import React, { ReactNode } from "react";
interface IButton {
    title: string;
    leftIcon?: ReactNode;
    className?: string;
    onClick?: () => void;
    outstandingNodesNumber?: number;
}
const Button = ({
    title,
    leftIcon,
    className,
    onClick,
    outstandingNodesNumber,
}: IButton) => {
    return (
        <button className={`ui-button ${className}`} onClick={onClick}>
            {outstandingNodesNumber && (
                <div className="red-number">{outstandingNodesNumber}</div>
            )}
            {leftIcon && <div> {leftIcon}</div>} <div>{title}</div>
        </button>
    );
};

export default Button;
