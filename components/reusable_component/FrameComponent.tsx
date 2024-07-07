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
        <div
            className="md:flex md:flex-row sm:flex sm:flex-col items-center 
            md:justify-between sm:justify-center gap-16 px-16 py-10"
        >
            <Image
                className=""
                src={props.img}
                alt={props.name}
                height={400}
                width={400}
            />
            <div className="flex flex-col md:items-start sm:items-center justify-between mt-5">
                <h2 className="text-3xl text-wrap font-semibold md:text-start sm:text-center text-primaryFont dark:text-gray-300 md:w-96 sm:w-52">
                    {props.name}
                </h2>
                <p className="text-sm text-wrap text-seconderyFont md:text-start sm:text-center dark:text-gray-400 md:w-[35rem] sm:w-60 mt-4">
                    {props.text}
                </p>
                <Button className="dark:bg-darkGreen mt-8">Learn More</Button>
            </div>
        </div>
    );
};

export default FrameComponent;
