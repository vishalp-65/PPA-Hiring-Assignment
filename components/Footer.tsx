import React from "react";
import Logo from "@/public/Logo.svg";
import Image from "next/image";
import dribble from "@/public/dribble.svg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className="flex flex-col md:flex md:flex-row items-start justify-evenly gap-5 bg-[#263238] px-8 md:px-16 py-10 text-white">
            <div className="flex flex-col justify-between items-start w-auto md:w-96 gap-5 md:gap-10">
                <div className="flex gap-2 items-center justify-between">
                    <Image
                        className="h-5 w-8 dark:text-white bg-transparent"
                        src={Logo}
                        alt="Logo"
                    />
                    <p className="font-sans text-2xl font-bold text-gray-200">
                        Nexcent
                    </p>
                </div>
                <p className="text-gray-300 text-sm">
                    Copyright © 2020 Nexcent ltd. <br /> All rights reserved
                </p>
                <div className="flex items-center justify-between gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        <FaInstagram className="text-gray-200" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        <Image
                            src={dribble}
                            alt="dribble"
                            className="text-gray-200 p-0.5"
                        />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        <FaTwitter className="text-gray-200" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        <FaYoutube className="text-gray-200" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-start justify-between gap-10 md:gap-20 mt-3 md:mt-0">
                <div className="flex flex-col items-start justify-between gap-3 md:gap-5">
                    <p className="font-semibold text-lg">Company</p>
                    <div className="text-sm text-gray-300 flex flex-col gap-3 justify-between">
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>testimonials</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-3 md:gap-5">
                    <p className="font-semibold text-lg">Support</p>
                    <div className="text-sm text-gray-300 flex flex-col gap-3 justify-between">
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-between gap-3 md:gap-5">
                    <p className="font-semibold text-lg">Stay up to date</p>
                    <input
                        className="px-2 py-1.5 rounded-md bg-[#4d5c63]"
                        type="email"
                        placeholder="Your email address"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
