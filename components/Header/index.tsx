"use client";
import "./header.scss";
import React from "react";
import Link from "next/link";
import Logo from "../icons/Logo";
import { usePathname, useRouter } from "next/navigation";
import ButtonSlideTitle from "../UI/ButtonSlideTitle";
import DashboardIcon from "../icons/DashboardIcon";
import MyNodesIcon from "../icons/MyNodesIcon";
import DiscordLogo from "../icons/DiscordLogo";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className="header ">
            {(pathname.includes("/dashboard") ||
                pathname.includes("/my-nodes")) && (
                <div className="header__btn-wrapper-lft ">
                    <ButtonSlideTitle
                        title="Dashboard"
                        className={`headerDashboardBtn ${
                            pathname.includes("/dashboard") ? "active" : ""
                        }`}
                        leftIcon={<DashboardIcon />}
                        onClick={() => router.push("/dashboard")}
                    />
                    <ButtonSlideTitle
                        title="My nodes"
                        className={`headerDashboardBtn ${
                            pathname.includes("/my-nodes") ? "active" : ""
                        }`}
                        leftIcon={<MyNodesIcon />}
                        onClick={() => router.push("/my-nodes")}
                    />
                </div>
            )}
            <div className="cursor-pointer" onClick={() => router.push("/")}>
                <Logo />
            </div>

            {pathname.length > 1 && (
                <div className=" header__btn-wrapper-rght ">
                    {(pathname.includes("/dashboard") ||
                        pathname.includes("/my-nodes")) && (
                        <Link
                            href="https://discord.com/invite/nextjs"
                            target="_blank"
                            className="py-[10px] px-5"
                        >
                            <DiscordLogo />
                        </Link>
                    )}

                    <div>
                        <ButtonSlideTitle
                            title="connect"
                            className="headerConnectBtn"
                            onClick={() => router.push("/dashboard")}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
