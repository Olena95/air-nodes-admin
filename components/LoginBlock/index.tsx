"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./login-block.scss";
import Input from "../UI/Input";
import ButtonSlideTitle from "../UI/Buttons/ButtonSlideTitle";
import LogoHorizontal from "../icons/LogoHorizontal";
import { useRouter } from "next/navigation";
const LoginBlock = () => {
    const router = useRouter();
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [changedFields, setChangedFields] = useState<{
        [x: string]: string | number | undefined;
    }>();
    const [isDisabled, setIsDisabled] = useState(true);
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
    const clickForgotPassword = () => {
        const newFields = {
            email: "",
            password: undefined,
        };
        setChangedFields(newFields);
        setIsForgotPassword(true);
    };
    useEffect(() => {
        if (
            !isForgotPassword &&
            changedFields &&
            "password" in changedFields &&
            "email" in changedFields &&
            Object.values(changedFields).every((value) => value !== "")
        ) {
            setIsDisabled(false);
        } else if (
            isForgotPassword &&
            changedFields &&
            "email" in changedFields &&
            Object.values(changedFields).every((value) => value !== "")
        ) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [changedFields]);

    return (
        <div className="login-block">
            <div>
                <LogoHorizontal />
            </div>
            <div className="mt-[50px]">
                <div className="login-block__title">
                    {isForgotPassword ? "Forgot password?" : "Login"}{" "}
                </div>
                <div className="login-block__input-wrapper ">
                    <div>
                        <Input
                            label="Email"
                            placeholder="username@gmail.com"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleChangeFields("email", e.target.value)
                            }
                            value={changedFields?.email}
                        />
                    </div>
                    {!isForgotPassword && (
                        <div>
                            <Input
                                type="password"
                                label="Password"
                                placeholder="Password"
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleChangeFields(
                                        "password",
                                        e.target.value
                                    )
                                }
                                value={changedFields?.password}
                                iconRight={true}
                            />
                        </div>
                    )}
                </div>
                {!isForgotPassword && (
                    <div
                        className="login-block__forgot-btn"
                        onClick={clickForgotPassword}
                    >
                        Forgot Password?
                    </div>
                )}
            </div>
            <div className="mt-[55px]">
                <ButtonSlideTitle
                    title="Continue"
                    className="loginPageBtn"
                    light={true}
                    isDisabled={isDisabled}
                    onClick={() => router.push("/admin-nodes?t=new-nodes")}
                />
            </div>
        </div>
    );
};

export default LoginBlock;
