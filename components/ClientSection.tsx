"use client";
import React from "react";
import Logo1 from "@/public/svg/Logo1.svg";
import Logo2 from "@/public/svg/Logo2.svg";
import Logo3 from "@/public/svg/Logo3.svg";
import Logo4 from "@/public/svg/Logo4.svg";
import Logo5 from "@/public/svg/Logo5.svg";
import Logo6 from "@/public/svg/Logo6.svg";
import Logo7 from "@/public/svg/Logo7.svg";
import { aboutNextGen } from "@/lib/data";
import Image from "next/image";

type Props = {};

const Clients = (props: Props) => {
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

    return (
        <div className="flex flex-col justify-between items-center w-[100%] py-10 px-5">
            <div className="flex flex-col justify-between items-center w-[100%]">
                <p className="text-3xl text-primaryFont dark:text-gray-200 font-semibold">
                    Our Clients
                </p>
                <p className="text-sm text-seconderyFont dark:text-gray-400 mt-3">
                    We have been working with some Fortune 500+ clients
                </p>

                <div className="flex gap-10 items-center w-[80%] mt-8 justify-between">
                    {logos.map((logo, index) => (
                        <div key={index} className=" dark:filter-logo">
                            <Image
                                src={logo}
                                width={38}
                                height={38}
                                alt={`Company Logo ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Community Section */}

            <div className="flex flex-col items-center justify-between mt-20">
                <p className="text-3xl font-semibold text-primaryFont dark:text-gray-300 text-center">
                    Manage your entire community <br /> in a single system
                </p>
                <p className="text-sm text-seconderyFont dark:text-gray-400 mt-4">
                    Who is Nextcent suitable for?
                </p>
                <div className="flex items-center justify-between gap-5 mt-12">
                    {aboutNextGen.map((data, index) => (
                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <div className="relative">
                                <Image
                                    className="filter-gray-900 absolute bottom-4 right-3 icon"
                                    src={data.logo}
                                    alt={data.name}
                                />
                                <div className="ml-2 bg-green-100 rounded-br-xl rounded-tl-xl h-9 w-9 dark:bg-gray-800" />
                            </div>
                            <p className="text-2xl text-primaryFont font-bold dark:text-gray-300 w-[50%] text-center">
                                {data.name}{" "}
                            </p>
                            <p className="text-sm text-seconderyFont dark:text-gray-400 w-[80%] text-center">
                                {data.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clients;
