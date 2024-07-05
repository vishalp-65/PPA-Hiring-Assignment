import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className="font-sans">
            <Navbar />
            <Banner />
        </div>
    );
}
