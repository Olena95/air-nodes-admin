"use client";
import "./nodes-block.scss";
import React from "react";

import NodeCard from "../UI/NodeCard";
import NodeSliderMob from "../UI/Slider/NodeSliderMob";
import { chunkArray } from "@/helpers/chunkArray";

interface INodeBLock {
    title: string;
    nodes: INode[];
}
const NodesBlock = ({ title, nodes }: INodeBLock) => {
    return (
        <div className="nodes-block">
            <h1 className="general-title">{title}</h1>

            <div className="nodes-block__wrapper  hidden md:flex">
                {nodes.map((item) => (
                    <NodeCard
                        key={item.id}
                        node={item}
                        className="pb-[27px] gap-5"
                    />
                ))}
            </div>

            <div className="block md:hidden ">
                <NodeSliderMob>
                    {chunkArray(nodes, 3).map((block, i) => (
                        <div key={i} className="px-5 py-[7.5px] ">
                            {block.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="mt-[15px] flex justify-center "
                                >
                                    <NodeCard
                                        key={item.id}
                                        node={item}
                                        className="pb-[27px] gap-5"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </NodeSliderMob>
            </div>
        </div>
    );
};

export default NodesBlock;
