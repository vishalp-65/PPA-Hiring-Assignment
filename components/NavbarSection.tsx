import React from "react";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="bg-[#F5F7FA] dark:bg-gray-800 flex p-5 px-10 justify-between items-center ">
            <div className="flex gap-2 items-center justify-between">
                <Image
                    className="h-5 w-8 dark:text-white"
                    src={Logo}
                    alt="Logo"
                />
                <p className="font-sans text-2xl font-bold">Nexcent</p>
            </div>
            <div className="flex gap-6">
                <p>Home</p>
                <p>Service</p>
                <p>Feature</p>
                <p>Product</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="flex gap-2">
                <Button variant="secondary" className="dark:bg-slate-300">
                    Login
                </Button>
                <Button className="dark:bg-darkGreen">Sign up</Button>
            </div>
        </div>
    );
};

export default Navbar;
