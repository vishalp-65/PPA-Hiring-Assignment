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
    // State variable for carousel by shadcn ui and for current banner
    const [currentBanner, setCurrentBanner] = useState(0);
    const [api, setApi] = React.useState<CarouselApi>();
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrentBanner(api.selectedScrollSnap() + 1);

        // Change current banner if scroll happend
        api.on("select", () => {
            setCurrentBanner(api.selectedScrollSnap() + 1);
        });
    }, [api, currentBanner]);

    return (
        <Carousel
            setApi={setApi}
            className="pt-5 md:pt-12 pb-1 px-1 md:px-20 w-full bg-[#F5F7FA] dark:bg-gray-800"
        >
            {/* Repeat same carousel just for testing / we can add our data as well  */}
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <DummyBanner />
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Dot for showing current carousel */}
            <div className="flex items-center justify-center py-2">
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className="mr-0.5 cursor-pointer">
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
