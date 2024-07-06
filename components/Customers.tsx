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
        <div className="flex items-center justify-between gap-7 px-16 py-8 bg-[#F5F7FA] dark:bg-gray-800">
            <Image src={customerImage} alt="Customer Image" />
            <div className="flex flex-col items-start justify-between gap-3">
                <p className="text-primaryFont dark:text-gray-400 w-[92%]">
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
                <p className="text-lightGreen dark:text-darkGreen font-semibold text-lg">
                    Tim Smith
                </p>
                <p className="text-primaryFont dark:text-gray-400">
                    British Dragon Boat Racing Association
                </p>
                <div className="flex items-center gap-8 justify-between mt-10">
                    <div className="flex gap-10 items-center w-[80%] justify-between">
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
                    <div className="flex items-center justify-between gap-1 text-lightGreen dark:text-darkGreen">
                        <p className="text-nowrap">Meet all customers </p>
                        <ArrowRight className="h-5 w-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerComponent;
