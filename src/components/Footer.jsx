import React from "react";

export default function Footer() {
    return(
        <div className="px-14 pt-12 pb-5 bg-main text-center relative">
        <hr className="pb-6 border-white" />
        <div className="flex justify-center items-center text-sm">
            <div className="font-bold text-white">
            Copyright &copy; 2024 |{" "}
            <span className="text-secondary">Reflective</span>
            </div>
        </div>
    </div>
    );
}