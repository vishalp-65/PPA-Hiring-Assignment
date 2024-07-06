import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {
    img: any;
    name: string;
    text: string;
};

const FrameComponent = (props: Props) => {
    return (
        <div className="flex items-center justify-center gap-5 px-16 py-10">
            <Image
                className=""
                src={props.img}
                alt={props.name}
                height={400}
                width={400}
            />
            <div className="flex flex-col items-start justify-between">
                <h2 className="text-3xl font-semibold text-primaryFont dark:text-gray-300 w-[70%]">
                    {props.name}
                </h2>
                <p className="text-sm text-seconderyFont dark:text-gray-400 w-[85%] mt-4">
                    {props.text}
                </p>
                <Button className="dark:bg-darkGreen mt-8">Learn More</Button>
            </div>
        </div>
    );
};

export default FrameComponent;
