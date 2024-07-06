"use client";
import React from "react";
import Logo1 from "@/public/svg/Logo1.svg";
import Logo2 from "@/public/svg/Logo2.svg";
import Logo3 from "@/public/svg/Logo3.svg";
import Logo4 from "@/public/svg/Logo4.svg";
import Logo5 from "@/public/svg/Logo5.svg";
import Logo6 from "@/public/svg/Logo6.svg";
import Logo7 from "@/public/svg/Logo7.svg";
import Image from "next/image";

type Props = {};

const Clients = (props: Props) => {
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

    return (
        <div className="flex flex-col justify-between items-center w-[100%] py-10 px-5">
            <p className="text-3xl text-gray-700 dark:text-gray-200 font-semibold">
                Our Clients
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                We have been working with some Fortune 500+ clients
            </p>

            <div className="flex gap-10 items-center w-[80%] mt-5 justify-between">
                {logos.map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        width={38}
                        height={38}
                        alt={`Company Logo ${index + 1}`}
                        className="dark:text-white"
                    />
                ))}
            </div>
        </div>
    );
};

export default Clients;
