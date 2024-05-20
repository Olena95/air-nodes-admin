"use client";
import "./nodeCard.scss";
import React, { ReactNode } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../Buttons/ButtonSlideTitle";
import { usePopups } from "@/components/Popups/PopupProvider";
interface INodeCard {
    maxWidth: number;
    children: ReactNode;
    discountPercentage?: number;
    className?: string;
    imageUrl: string;
}
function NodeCard({
    maxWidth,
    imageUrl,
    children,
    discountPercentage,
    className,
}: INodeCard) {
    const arr = [1, 2];
    return (
        <div className="relative cursor-pointer" style={{ maxWidth: maxWidth }}>
            {arr.map((item) => (
                <div
                    className={`node-card node-card-${item} ${className}`}
                    key={item}
                >
                    <div className="rounded-ss-[15px] rounded-se-[15px] overflow-hidden relative">
                        {discountPercentage && (
                            <div className="absolute rounded-[5px] text-main-discount top-[10px] right-[10px] text-xs font-semibold py-[3px] px-[5px] bg-white">
                                {`${discountPercentage}% off`}
                            </div>
                        )}
                        <Image
                            src={imageUrl}
                            width={400}
                            height={200}
                            alt="image"
                        />
                    </div>
                    {children}
                </div>
            ))}
        </div>
    );
}

export default NodeCard;
