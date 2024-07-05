import React from "react";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="flex p-5 mx-10 justify-between items-center">
            <div className="flex gap-2 items-center justify-between">
                <Image className="h-5 w-8" src={Logo} alt="Logo" />
                <p className="font-sans text-3xl font-bold">Nexcent</p>
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
                <Button variant="secondary">Login</Button>
                <Button>Sign up</Button>
            </div>
        </div>
    );
};

export default Navbar;
