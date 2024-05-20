"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface IContextProvider {
    openPopup?: (popup: string) => void;
    closePopup?: () => void;
    popups?: string;
    setIdNode?: (n: number) => void;
    idNode?: number;
}
const PopupContext = createContext<IContextProvider>({});

export const PopupProvider = ({ children }: { children: ReactNode }) => {
    const [popups, setPopups] = useState("");
    const [idNode, setIdNode] = useState<number>();
    const openPopup = (content: string) => {
        setPopups(content);
    };
    console.log(popups);
    const closePopup = () => {
        setPopups("");
    };

    return (
        <PopupContext.Provider
            value={{ popups, openPopup, closePopup, setIdNode, idNode }}
        >
            {children}
        </PopupContext.Provider>
    );
};

export const usePopups = () => {
    return useContext(PopupContext);
};
