"use client";
import "./header.scss";
import React, { useEffect, useState } from "react";
import Logo from "../icons/Logo";
import Burger from "../icons/Burger";

import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
import LogoX from "../icons/LogoX";
import LogoDiscord from "../icons/LogoDiscord";

import MobHeaderBottomShape from "../icons/mobileShapes/MobHeaderBottomShape";
import CloseMenu from "../icons/CloseMenu";

import MobTopLeftShape from "../icons/mobileShapes/MobTopLeftShape";
import NewBtnIcon from "../icons/NewBtnIcon";
import Button from "../UI/Buttons/Button";
import OutstandingBtnIcon from "../icons/OutstandingBtnIcon";
import ComletedBtnIcon from "../icons/ComletedBtnIcon";
import ButtonSlideTitle from "../UI/Buttons/ButtonSlideTitle";
interface IHeader {
    outstandingNodesNumber?: number;
}
const MobHeader = ({ outstandingNodesNumber }: IHeader) => {
    const [openMobMenu, setOpenMobMenu] = useState(false);
    const year = new Date().getFullYear();
    const searchparams = useSearchParams();
    const router = useRouter();
    useEffect(() => {
        openMobMenu
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflowY = "auto");
    }, [openMobMenu]);
    return (
        <div
            className={`block w-full  lg:hidden  ${
                openMobMenu
                    ? "bg-body w-full z-50 fixed h-[calc(100%-110px)] "
                    : ""
            }`}
        >
            <div className="block md:hidden absolute top-0 left-0 z-50 ">
                <MobTopLeftShape />
            </div>{" "}
            <div className={` header-mob `}>
                <div
                    className="relative z-50"
                    onClick={() => {
                        router.push("/");
                        setOpenMobMenu(!openMobMenu);
                    }}
                >
                    <Logo />
                </div>

                <div
                    className="cursor-pointer"
                    onClick={() => setOpenMobMenu(!openMobMenu)}
                >
                    {openMobMenu ? <CloseMenu /> : <Burger />}
                </div>
            </div>
            {openMobMenu && (
                <div className="header-mob__wrapper bg-body h-full">
                    <div className="block  absolute bottom-0 right-0">
                        <MobHeaderBottomShape />
                    </div>
                    <div className="header-mob__btn-block ">
                        <div className="header-mob__btn ">
                            <Button
                                title="New"
                                className={`${
                                    searchparams.get("t") === "new-nodes"
                                        ? "active"
                                        : ""
                                }`}
                                leftIcon={<NewBtnIcon />}
                                onClick={() => {
                                    router.push("/admin-nodes?t=new-nodes");
                                    setOpenMobMenu(!openMobMenu);
                                }}
                            />
                            <Button
                                title="outstanding"
                                className={` ${
                                    searchparams.get("t") === "outstanding"
                                        ? "active"
                                        : ""
                                }`}
                                leftIcon={<OutstandingBtnIcon />}
                                onClick={() => {
                                    router.push("/admin-nodes?t=outstanding");
                                    setOpenMobMenu(!openMobMenu);
                                }}
                                outstandingNodesNumber={outstandingNodesNumber}
                            />
                            <Button
                                title="completed"
                                className={` ${
                                    searchparams.get("t") === "completed"
                                        ? "active"
                                        : ""
                                }`}
                                leftIcon={<ComletedBtnIcon />}
                                onClick={() => {
                                    router.push("/admin-nodes?t=completed");
                                    setOpenMobMenu(!openMobMenu);
                                }}
                            />
                        </div>
                        <div className="mt-[65px]">
                            <ButtonSlideTitle
                                title={"connected"}
                                className="headerConnectedBtn mob max-w-[160px] m-auto"
                            />
                        </div>
                    </div>
                    <div className="header-mob__links ">
                        <div className="flex gap-5">
                            <Link
                                href="https://twitter.com/?lang=uk"
                                target="_blank"
                            >
                                <LogoX color="#fff" />
                            </Link>
                            <Link
                                href="https://discord.com/invite/nextjs"
                                target="_blank"
                            >
                                <LogoDiscord color="#fff" />
                            </Link>
                        </div>

                        <p className="header-mob__bottom-text">{`© ${year} Copyright Air nodes | All Rights Reserved`}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobHeader;
