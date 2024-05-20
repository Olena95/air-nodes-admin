import React from "react";
import { usePopups } from "../Popups/PopupProvider";

const CloseBtn = () => {
    const { closePopup } = usePopups();
    return (
        <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={closePopup}
        >
            <rect
                x="1.20557"
                y="1.20898"
                width="29"
                height="29"
                rx="14.5"
                stroke="black"
            />
            <path
                d="M15.7056 14.2648L20.7613 9.20898L22.2056 10.6532L17.1498 15.709L22.2056 20.7648L20.7613 22.209L15.7056 17.1532L10.6498 22.209L9.20557 20.7648L14.2613 15.709L9.20557 10.6532L10.6498 9.20898L15.7056 14.2648Z"
                fill="#10172A"
            />
        </svg>
    );
};

export default CloseBtn;
