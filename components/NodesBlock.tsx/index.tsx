"use client";
import "./nodes-block.scss";
import React from "react";
import ButtonSlideTitle from "../UI/Buttons/ButtonSlideTitle";
import NodeCard from "../UI/NodeCard";
import { usePopups } from "../Popups/PopupProvider";

interface INodeBLock {
    title: string;
    nodes: INode[];
}
const NodesBlock = ({ title, nodes }: INodeBLock) => {
    const { openPopup, setIdNode } = usePopups();
    const handlePopupOpen = (id?: number) => {
        openPopup && openPopup("edit-node-popup");
        setIdNode && setIdNode(id!);
    };
    return (
        <div className="nodes-block">
            <h1 className="general-title">{title}</h1>

            <div className="nodes-block__wrapper  ">
                {nodes.map((item) => (
                    <NodeCard
                        imageUrl="/images/logo.png"
                        key={item.id}
                        maxWidth={300}
                        discountPercentage={item.discountPercentage}
                        className="pb-[27px] gap-5"
                    >
                        <div className={`pl-[10px] pr-[5px] w-full`}>
                            <h3 className="card-title">{item.title}</h3>

                            <div
                                className={`card-bottom-block ${
                                    item.discountPrice
                                        ? "gap-[13px]"
                                        : "justify-between "
                                }`}
                            >
                                <div className="price-block">
                                    <div
                                        className={` ${
                                            item.discountPrice
                                                ? "line-through"
                                                : ""
                                        }  price-block__price-text `}
                                    >
                                        {`$${item.price}/mo`}
                                    </div>
                                    {item.discountPrice && (
                                        <div className="price-block__price-discount-text ">{`$${item.discountPrice}/mo`}</div>
                                    )}
                                </div>
                                <div>
                                    <ButtonSlideTitle
                                        title="Edits"
                                        className="deployBtn"
                                        light={true}
                                        onClick={() => handlePopupOpen(item.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    </NodeCard>
                ))}
            </div>
        </div>
    );
};

export default NodesBlock;
