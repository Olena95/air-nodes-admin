"use client";
import "./nodeCard.scss";
import React from "react";
import Image from "next/image";

import { usePopups } from "@/components/Popups/PopupProvider";
import ButtonSlideTitle from "../Buttons/ButtonSlideTitle";
interface INodeCard {
    node: INode;
    className?: string;
}
function NodeCard({ node, className }: INodeCard) {
    const { openPopup, setIdNode } = usePopups();
    const handlePopupOpen = (id?: number) => {
        openPopup && openPopup("edit-node-popup");
        setIdNode && setIdNode(id!);
    };
    const arr = [1, 2];
    return (
        <div className="relative cursor-pointer">
            {arr.map((item) => (
                <div
                    className={`node-card node-card-${item} ${className}`}
                    key={item}
                >
                    <div className="rounded-ss-[15px] rounded-se-[15px] overflow-hidden relative">
                        {node.discountPercentage && (
                            <div className="absolute rounded-[5px] text-main-discount top-[10px] right-[10px] text-xs font-semibold py-[3px] px-[5px] bg-white">
                                {`${node.discountPercentage}% off`}
                            </div>
                        )}
                        <Image
                            src="/images/logo.png"
                            width={400}
                            height={200}
                            alt="image"
                        />
                    </div>
                    <div className={`pl-[10px] pr-[5px] w-full`}>
                        <h3 className="card-title">{node.title}</h3>

                        <div
                            className={`card-bottom-block ${
                                node.discountPrice
                                    ? "justify-between  md:gap-[13px]"
                                    : "justify-between "
                            }`}
                        >
                            <div className="price-block">
                                <div
                                    className={` ${
                                        node.discountPrice ? "line-through" : ""
                                    }  price-block__price-text `}
                                >
                                    {`$${node.price}/mo`}
                                </div>
                                {node.discountPrice && (
                                    <div className="price-block__price-discount-text ">{`$${node.discountPrice}/mo`}</div>
                                )}
                            </div>
                            <div>
                                <ButtonSlideTitle
                                    title="Edits"
                                    className="deployBtn"
                                    light={true}
                                    onClick={() => handlePopupOpen(node.id)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NodeCard;
