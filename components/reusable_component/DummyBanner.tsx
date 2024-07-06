import React from "react";
import Banner from "@/public/Illustration.svg";
import Image from "next/image";
import { Button } from "../ui/button";

type Props = {};

const DummyBanner = (props: Props) => {
    return (
        <div className="flex justify-between items-center dark:bg-gray-800">
            <div className="flex flex-col justify-between items-start">
                <p className="text-6xl text-gray-500 dark:text-gray-300 font-semibold">
                    Lessons and insights <br></br>
                    <span className="text-lightGreen dark:text-darkGreen">
                        from 8 years
                    </span>
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400 mt-3">
                    Where to grow your business as a photographer: site or
                    social media ?
                </p>
                <Button className="dark:bg-darkGreen mt-8">Register</Button>
            </div>
            <div>
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
