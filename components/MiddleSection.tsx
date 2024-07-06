import React from "react";
import FrameComponent from "./reusable_component/FrameComponent";
import { frameData } from "@/lib/data";
import Achievements from "./Achievement";
import CustomerComponent from "./Customers";

type Props = {};

const MiddleSection = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-between gap-5">
            <FrameComponent
                img={frameData[0].logo}
                name={frameData[0].name}
                text={frameData[0].text}
            />

            <Achievements />

            <FrameComponent
                img={frameData[1].logo}
                name={frameData[1].name}
                text={frameData[1].text}
            />
            <CustomerComponent />
        </div>
    );
};

export default MiddleSection;
