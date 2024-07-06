"use client";
import React, { useEffect, useState } from "react";
import Dot from "@/public/Dot.svg";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import DummyBanner from "./reusable_component/DummyBanner";

type Props = {};

const Banner = (props: Props) => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [api, setApi] = React.useState<CarouselApi>();
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrentBanner(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrentBanner(api.selectedScrollSnap() + 1);
        });
    }, [api, currentBanner]);

    return (
        <Carousel
            setApi={setApi}
            className="py-12 px-20 bg-[#F5F7FA] dark:bg-gray-800"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <DummyBanner />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-center py-2">
                {Array.from({ length: count }).map((_, index) => (
                    <div className="mr-0.5 cursor-pointer">
                        <Image
                            key={index}
                            src={Dot}
                            alt="Dot"
                            className={`w-2 h-2 mx-1 ${
                                currentBanner === index + 1
                                    ? "dot-green"
                                    : "dot-gray"
                            }`}
                        />
                    </div>
                ))}
            </div>
        </Carousel>
    );
};

export default Banner;
