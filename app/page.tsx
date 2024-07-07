import Banner from "@/components/BannerSection";
import Clients from "@/components/ClientSection";
import FooterSection from "@/components/FooterSection";
import MiddleSection from "@/components/MiddleSection";
import Navbar from "@/components/NavbarSection";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

export default function Home() {
    return (
        <ThemeContextProvider>
            <div className="flex flex-col">
                {/* Navbar */}
                <Navbar />

                <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Carousel Banner */}
                    <Banner />

                    {/* Clients component */}
                    <Clients />

                    {/* Middle section */}
                    <MiddleSection />

                    {/* Footer */}
                    <FooterSection />
                </div>
            </div>

            {/* Theme component */}
            <ThemeSwitch />
        </ThemeContextProvider>
    );
}
