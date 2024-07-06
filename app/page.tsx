import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

export default function Home() {
    return (
        <ThemeContextProvider>
            <div className="font-sans bg-white dark:bg-gray-900 dark:text-white">
                <Navbar />
                <Banner />
                <Clients />
            </div>
            <ThemeSwitch />
        </ThemeContextProvider>
    );
}
