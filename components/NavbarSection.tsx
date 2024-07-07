"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { IoIosMenu } from "react-icons/io";

type Props = {};

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {}, [isOpen]);

    return (
        <div className="bg-[#F5F7FA] dark:bg-gray-800 p-3 md:p-5 md:px-10 w-screen">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-between">
                    <Image
                        className="h-5 w-8 dark:text-white"
                        src={Logo}
                        alt="Logo"
                    />
                    <p className="font-sans text-2xl font-bold">Nexcent</p>
                </div>
                <div className="hidden md:block">
                    <div className="flex gap-6">
                        <p className="cursor-pointer">Home</p>
                        <p className="cursor-pointer">Service</p>
                        <p className="cursor-pointer">Feature</p>
                        <p className="cursor-pointer">Product</p>
                        <p className="cursor-pointer">Testimonial</p>
                        <p className="cursor-pointer">FAQ</p>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="flex gap-2">
                        <Button
                            variant="secondary"
                            className="dark:bg-slate-300"
                        >
                            Login
                        </Button>
                        <Button className="dark:bg-darkGreen">Sign up</Button>
                    </div>
                </div>

                <div className="block md:hidden">
                    <IoIosMenu
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-7 h-7 text-center text-black dark:text-white"
                    />
                </div>
            </div>

            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:hidden transition ease-in-out delay-300`}
            >
                <div className="flex flex-wrap flex-col items-center justify-center px-3 py-0.5 mt-3">
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                        <p>Home</p>
                        <p>Service</p>
                        <p>Feature</p>
                        <p>Product</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button
                            variant="secondary"
                            className="dark:bg-slate-300 px-2.5 py-0.5"
                        >
                            Login
                        </Button>
                        <Button className="dark:bg-darkGreen px-2 py-1">
                            Sign up
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
