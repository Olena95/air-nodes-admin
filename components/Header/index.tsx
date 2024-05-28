"use client";
import "./header.scss";
import React from "react";
import Logo from "../icons/Logo";
import { useRouter, useSearchParams } from "next/navigation";

import NewBtnIcon from "../icons/NewBtnIcon";
import Button from "../UI/Buttons/Button";
import OutstandingBtnIcon from "../icons/OutstandingBtnIcon";
import ComletedBtnIcon from "../icons/ComletedBtnIcon";
interface IHeader {
    outstandingNodesNumber?: number;
}
const Header = ({ outstandingNodesNumber }: IHeader) => {
    const searchparams = useSearchParams();
    const router = useRouter();

    return (
        <div className="header hidden lg:flex">
            <div className="absolute left-0 top-3">
                <Logo />
            </div>
            <div className="flex gap-5">
                <Button
                    title="New"
                    className={`${
                        searchparams.get("t") === "new-nodes" ? "active" : ""
                    }`}
                    leftIcon={<NewBtnIcon />}
                    onClick={() => router.push("/admin-nodes?t=new-nodes")}
                />
                <Button
                    title="outstanding"
                    className={` ${
                        searchparams.get("t") === "outstanding" ? "active" : ""
                    }`}
                    leftIcon={<OutstandingBtnIcon />}
                    onClick={() => router.push("/admin-nodes?t=outstanding")}
                    outstandingNodesNumber={outstandingNodesNumber}
                />
                <Button
                    title="completed"
                    className={` ${
                        searchparams.get("t") === "completed" ? "active" : ""
                    }`}
                    leftIcon={<ComletedBtnIcon />}
                    onClick={() => router.push("/admin-nodes?t=completed")}
                />
            </div>
        </div>
    );
};

export default Header;
