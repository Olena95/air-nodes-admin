"use client";
import React, { ChangeEvent, useState } from "react";
import "./input.scss";
import EyeOff from "@/components/icons/EyeOff";
import EyeOn from "@/components/icons/EyeOn";
interface IInput {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    iconRight?: boolean;
    value?: string | number;
}
const Input = ({
    onChange,
    label,
    errorMessage,
    placeholder,
    type = "text",
    iconRight,
    value,
}: IInput) => {
    const [inputType, setInputType] = useState(type);
    return (
        <div className="input-wrapper">
            {label && <label className="input-label">{label}</label>}
            <div className="w-full relative">
                <input
                    type={inputType}
                    className={`custom-input ${errorMessage ? "error" : ""}`}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={value}
                />
                {iconRight && (
                    <div className="input-icon">
                        {inputType === "text" ? (
                            <EyeOn onClick={() => setInputType("password")} />
                        ) : (
                            <EyeOff onClick={() => setInputType("text")} />
                        )}
                    </div>
                )}
            </div>

            {errorMessage && <div className="input-error">{errorMessage}</div>}
        </div>
    );
};

export default Input;
