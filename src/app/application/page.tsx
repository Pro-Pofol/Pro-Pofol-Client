import { ApplicationBanner } from "./Banner";
import SideBar from "./SideBar";
import ShowSection from "./ShowSection";
import { Suspense } from "react";

export default function Application() {
    return (
        <main>
            <ApplicationBanner />
            <section className="flex py-6 relative">
                <Suspense>
                    <SideBar />
                    <ShowSection />
                </Suspense>
            </section>
        </main>
    )
}