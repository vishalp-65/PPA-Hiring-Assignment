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
            <div className="font-sans bg-white dark:bg-gray-900 dark:text-white">
                <Navbar />
                <Banner />
                <Clients />
                <MiddleSection />
                <FooterSection />
            </div>
            <ThemeSwitch />
        </ThemeContextProvider>
    );
}
