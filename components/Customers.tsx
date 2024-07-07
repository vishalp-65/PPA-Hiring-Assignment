import React from "react";
import customerImage from "@/public/customer.svg";
import Image from "next/image";
import Logo1 from "@/public/svg/Logo1.svg";
import Logo2 from "@/public/svg/Logo2.svg";
import Logo3 from "@/public/svg/Logo3.svg";
import Logo4 from "@/public/svg/Logo4.svg";
import Logo5 from "@/public/svg/Logo5.svg";
import Logo6 from "@/public/svg/Logo6.svg";
import { ArrowRight } from "lucide-react";

type Props = {};

const CustomerComponent = (props: Props) => {
    const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

    return (
        <div className="flex flex-col md:flex md:flex-row items-center justify-center md:justify-evenly gap-4 md:gap-10 px-16 py-8 bg-[#F5F7FA] dark:bg-gray-800 w-auto">
            <Image
                src={customerImage}
                alt="Customer Image"
                height={300}
                width={300}
            />
            <div className="flex flex-col items-start justify-evenly gap-2">
                <p className="text-primaryFont dark:text-gray-400 text-wrap w-full md:w-[40rem]">
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt
                    ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                    tristique quam in, gravida enim. Nullam ut molestie arcu, at
                    hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                    molestie mi blandit. Suspendisse cursus tellus sed augue
                    ultrices, quis tristique nulla sodales. Suspendisse eget
                    lorem eu turpis vestibulum pretium. Suspendisse potenti.
                    Quisque malesuada enim sapien, vitae placerat ante feugiat
                    eget. Quisque vulputate odio neque, eget efficitur libero
                    condimentum id. Curabitur id nibh id sem dignissim finibus
                    ac sit amet magna.
                </p>
                <p className="text-lightGreen  dark:text-darkGreen font-semibold text-lg cursor-pointer">
                    Tim Smith
                </p>
                <p className="text-primaryFont text-wrap dark:text-gray-400">
                    British Dragon Boat Racing Association
                </p>
                <div className="flex flex-wrap md:flex-nowrap items-center gap-8 justify-center md:justify-between mt-10">
                    <div className="flex flex-wrap md:flex-nowrap gap-10 items-center w-[80%] justify-center md:justify-between">
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
                    <div className="flex items-center justify-center gap-1 cursor-pointer text-lightGreen dark:text-darkGreen">
                        <p className="text-nowrap">Meet all customers </p>
                        <ArrowRight className="h-5 w-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerComponent;
