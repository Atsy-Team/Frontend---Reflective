import React from "react";
import logoDummy from "../assets/logo-dummy.jpeg";


export default function Navbar() {
    return(
        <nav className="fixed w-full z-20 top-0 start-0 shadow">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                <a href="/">
                    <img 
                        src={logoDummy} 
                        alt="Reflective Logo" 
                        className="w-20 p-1.5 ml-12"
                    />
                </a>
                <div className="ml-auto flex space-x-4">
                    <button
                        type="button"
                        className="py-2 px-4 rounded-full bg-[#BFE95E] focus:outline-none hover:bg-[#AEDD48] transition-colors"
                    >
                        <div className="flex items-center font-medium">
                            <span className="text-md text-[#0E3D42]">Login</span>
                        </div>
                    </button>

                    <button
                        type="button"
                        className="py-2 px-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        <div className="flex items-center font-medium">
                            <span className="text-md">Register</span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>

    );
}