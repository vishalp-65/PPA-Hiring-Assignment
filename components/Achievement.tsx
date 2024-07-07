"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useScrollTriggeredCountUp from "@/hooks/countUp";
import booking from "@/public/svg/booking.svg";
import payment from "@/public/svg/payment.svg";
import Group2 from "@/public/svg/Group2.svg";
import Group3 from "@/public/svg/Group3.svg";

type Props = {};

const Achievements = (props: Props) => {
    // Ref for count section to show count up animation
    const countRef = useRef<HTMLDivElement>(null);

    return (
        <div className="bg-[#F5F7FA] dark:bg-gray-800 w-full md:flex md:flex-row sm:flex sm:flex-col items-center justify-around md:gap-3 sm:gap-10 px-10 md:px-20 py-16">
            <div className="flex flex-col items-start justify-between gap-2 md:gap-4">
                <p className="text-3xl text-gray-500 dark:text-gray-300 md:text-start sm:text-center font-semibold">
                    Helping a local <br />
                    <span className="text-lightGreen dark:text-darkGreen">
                        business reinvent itself
                    </span>
                </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                    We reached here with our hard work and dedication
                </p>
            </div>
            <div
                ref={countRef}
                className="grid grid-cols-2 gap-x-10 gap-y-5 mt-8 md:mt-0"
            >
                <div className="flex items-center gap-3">
                    <Image
                        src={Group3}
                        alt="Members"
                        height={40}
                        width={40}
                        className="filter-gray-900"
                    />
                    <div className="flex flex-col items-start justify-between">
                        <p className="text-xl font-semibold text-primaryFont dark:text-gray-300 text-center">
                            {/* Use useScrollTriggeredCountUp hook to show animation of count up */}

                            {useScrollTriggeredCountUp(
                                countRef,
                                2245341
                            ).toLocaleString()}
                        </p>
                        <p className="text-sm text-seconderyFont dark:text-gray-400">
                            Members
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Image
                        src={Group2}
                        alt="Clubs"
                        height={40}
                        width={40}
                        className="filter-gray-900"
                    />
                    <div className="flex flex-col items-start justify-between  ">
                        <p className="text-xl font-semibold text-primaryFont dark:text-gray-300 text-center">
                            {/* Use useScrollTriggeredCountUp hook to show animation of count up */}
                            {useScrollTriggeredCountUp(
                                countRef,
                                46328
                            ).toLocaleString()}
                        </p>
                        <p className="text-sm text-seconderyFont dark:text-gray-400">
                            Clubs
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Image
                        src={booking}
                        alt="Event Booking"
                        height={40}
                        width={40}
                    />
                    <div className="flex flex-col items-start justify-between  ">
                        <p className="text-xl font-semibold text-primaryFont dark:text-gray-300 text-center">
                            {/* Use useScrollTriggeredCountUp hook to show animation of count up */}

                            {useScrollTriggeredCountUp(
                                countRef,
                                828867
                            ).toLocaleString()}
                        </p>
                        <p className="text-sm text-seconderyFont dark:text-gray-400">
                            Event Bookings
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Image
                        src={payment}
                        alt="Payments"
                        height={35}
                        width={35}
                    />
                    <div className="flex flex-col items-start justify-between  ">
                        <p className="text-xl font-semibold text-primaryFont dark:text-gray-300 text-center">
                            {/* Use useScrollTriggeredCountUp hook to show animation of count up */}

                            {useScrollTriggeredCountUp(
                                countRef,
                                1926436
                            ).toLocaleString()}
                        </p>
                        <p className="text-sm text-seconderyFont dark:text-gray-400">
                            Payments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
