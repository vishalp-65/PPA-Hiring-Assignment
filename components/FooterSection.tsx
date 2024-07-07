import React from "react";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type Props = {};

const FooterSection = (props: Props) => {
    return (
        <div className="w-full">
            <div className="bg-[#F5F7FA] dark:bg-gray-800 flex flex-col items-center justify-between gap-10 px-10 py-14 mt-5">
                <div className="text-5xl font-semibold text-center flex flex-col gap-3">
                    <p>Pellentesque suscipit</p>
                    <p>fringilla libero eu.</p>
                </div>
                <Button className="dark:bg-darkGreen">
                    Get a Demo <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
            </div>
            <Footer />
        </div>
    );
};

export default FooterSection;
