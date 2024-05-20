"use client";
import React, { ChangeEvent, useState } from "react";
import PopupWrapper from "./PopupWrapper";

import { usePopups } from "./PopupProvider";

import trandingNodes from "../../data/trandingNode.json";
import ButtonSlideTitle from "../UI/Buttons/ButtonSlideTitle";
import Input from "../UI/Input";
const EditNodePopup = () => {
    const { closePopup, idNode } = usePopups();
    const [changedFields, setChangedFields] = useState<{
        [x: string]: string | number | undefined;
    }>();
    const findNode = trandingNodes.find((node) => node.id === idNode);
    const [errorMessage, setErrorMessage] = useState<string>();

    function handleChangeFields(
        field: string,
        value: string | number | undefined
    ) {
        const newFields = {
            ...changedFields,
            [field]: value,
        };

        setChangedFields(newFields);
    }
    const connectBtn = () => {
        closePopup && closePopup();

        console.log(changedFields);
    };
    return (
        <PopupWrapper title={findNode?.title ?? ""}>
            <div className="content-popup__content ">
                <Input
                    label="Customer key"
                    placeholder="Password"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChangeFields("custom_key", e.target.value)
                    }
                />
                <Input
                    label="Pubilc key"
                    placeholder="Password"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChangeFields("publick_key", e.target.value)
                    }
                />
                <Input
                    label="Private key"
                    placeholder="Password"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleChangeFields("private_key", e.target.value)
                    }
                />
            </div>
            <div className="content-popup__btn-wrapper">
                <ButtonSlideTitle
                    title="Add"
                    className="applyPopupBtn"
                    onClick={connectBtn}
                />
                <ButtonSlideTitle
                    title="Cancel"
                    className="cancelPopupBtn"
                    onClick={closePopup}
                />
            </div>
        </PopupWrapper>
    );
};

export default EditNodePopup;
