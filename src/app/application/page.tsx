import { ApplicationBox } from "@/components";
import { ApplicationBanner } from "./Banner";
import SideBar from "./SideBar";
import ShowSection from "./ShowSection";

export default function Application() {
    return (
        <main>
            <ApplicationBanner />
            <section className="flex py-6 relative">
                <SideBar />
                <ShowSection />
            </section>
        </main>
    )
}