import AdminNodesPage from "@/components/AdminNodesPage";
import trandingNodes from "../../../data/trandingNode.json";
import React, { Suspense } from "react";
import Header from "@/components/Header";

const AdminNodes = () => {
    return (
        <Suspense>
            <Header outstandingNodesNumber={trandingNodes.length} />
            <div className="max-w-[1280px] mx-auto">
                <AdminNodesPage
                    newNodes={trandingNodes}
                    outstandingNodes={trandingNodes}
                    completedNodes={trandingNodes}
                />
            </div>
        </Suspense>
    );
};

export default AdminNodes;
