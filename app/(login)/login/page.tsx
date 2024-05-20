import LoginShapeBottom from "@/components/icons/shapes/LoginShapeBottom";
import LoginBlock from "@/components/LoginBlock";
import React from "react";

const Login = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <LoginBlock />
            <div className="absolute bottom-0 right-0">
                <LoginShapeBottom />
            </div>
        </div>
    );
};

export default Login;
