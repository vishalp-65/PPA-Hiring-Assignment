import React from "react";
import { communityData } from "@/lib/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {};

const CommunityUpdates = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-between gap-3 px-16 py-8">
            <div className="flex flex-col items-center justify-between gap-3">
                <p className="text-3xl text-primaryFont dark:text-gray-200 font-semibold">
                    Caring is the new marketing
                </p>
                <p className="text-sm text-seconderyFont dark:text-gray-400 w-[50%] text-center">
                    The Nexcent blog is the best place to read about the latest
                    membership insights, trends and more. See who's joining the
                    community, read about how our community are increasing their
                    membership income and lot's more.​
                </p>
            </div>
            <div className="flex items-center justify-between gap-6">
                {communityData.map((community, ind) => (
                    <div className="relative flex flex-col items-center justify-between">
                        <Image
                            src={community.logo}
                            alt="community Images"
                            className="rounded-sm h-80 w-96"
                        />
                        <div
                            className="absolute bottom-[35%] top-[69%] flex flex-col bg-[#F5F7FA] dark:bg-gray-800 
                            w-80 h-36 items-center justify-between gap-1 p-3 rounded-xl shadow-2xl"
                        >
                            <p className="text-center text-wrap w-[80%] font-semibold text-seconderyFont dark:text-gray-300">
                                {community.text}
                            </p>
                            <div className="flex items-center cursor-pointer justify-between gap-2 text-lightGreen dark:text-darkGreen">
                                <p className="text-nowrap">Readmore</p>
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityUpdates;
