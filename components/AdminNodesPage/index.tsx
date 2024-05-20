"use client";
import React from "react";
import NodesBlock from "../NodesBlock.tsx";
import { useSearchParams } from "next/navigation.js";
interface INodes {
    newNodes: INode[];
    outstandingNodes: INode[];
    completedNodes: INode[];
}
const AdminNodesPage = ({
    newNodes,
    outstandingNodes,
    completedNodes,
}: INodes) => {
    const searchparams = useSearchParams();
    return (
        <div>
            {searchparams.get("t") === "new-nodes" && (
                <NodesBlock title="New nodes" nodes={newNodes} />
            )}
            {searchparams.get("t") === "outstanding" && (
                <NodesBlock
                    title="Outstanding nodes"
                    nodes={outstandingNodes}
                />
            )}
            {searchparams.get("t") === "completed" && (
                <NodesBlock title="Completed nodes" nodes={completedNodes} />
            )}
        </div>
    );
};

export default AdminNodesPage;
