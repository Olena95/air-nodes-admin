"use client";
import React, { ChangeEvent, useState } from "react";
import "./login-block.scss";
import Input from "../UI/Input";
import ButtonSlideTitle from "../UI/ButtonSlideTitle";
import LogoHorizontal from "../icons/LogoHorizontal";
const LoginBlock = () => {
    const [changedFields, setChangedFields] = useState<{
        [x: string]: string | number | undefined;
    }>();
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
    return (
        <div className="login-block">
            <div>
                <LogoHorizontal />
            </div>
            <div className="mt-[50px]">
                <div className="login-block__title">Login</div>
                <div className="login-block__input-wrapper ">
                    <div>
                        <Input
                            label="Email"
                            placeholder="username@gmail.com"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleChangeFields("email", e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            label="Password"
                            placeholder="Password"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleChangeFields("password", e.target.value)
                            }
                            iconRight={true}
                        />
                    </div>
                </div>
                <div className="login-block__forgot-btn">Forgot Password?</div>
            </div>
            <div className="mt-[55px]">
                <ButtonSlideTitle
                    title="Continue"
                    className="loginPageBtn"
                    light={true}
                    isDisabled={false}
                />
            </div>
        </div>
    );
};

export default LoginBlock;
