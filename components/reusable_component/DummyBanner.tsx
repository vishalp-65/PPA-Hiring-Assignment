import React from "react";
import Banner from "@/public/Illustration.svg";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {};

const DummyBanner = (props: Props) => {
    return (
        <div
            className="flex justify-center md:justify-between w-96 md:w-full h-56 md:h-80 
                items-center dark:bg-gray-800 px-2 gap-2"
        >
            <div className="flex flex-col justify-between items-start">
                <p className="md:text-6xl text-2xl text-wrap text-gray-500 dark:text-gray-300 font-semibold">
                    Lessons and insights <br />
                    <span className="text-lightGreen dark:text-darkGreen">
                        from 8 years
                    </span>
                </p>
                <p className="text-gray-500 text-sm text-wrap w-[90%] dark:text-gray-400 mt-3">
                    Where to grow your business as a photographer: site or
                    social media ?
                </p>
                <Button className="dark:bg-darkGreen mt-3 md:mt-8 px-1.5 py-0 md:px-5 md:py-2">
                    Register
                </Button>
            </div>
            <div className="">
                <Image
                    src={Banner}
                    height={350}
                    width={300}
                    alt="Banner image"
                />
            </div>
        </div>
    );
};

export default DummyBanner;
