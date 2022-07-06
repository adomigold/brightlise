import React from "react";
import VisionList from "./VisionList";
import VisionImagesList from "./VisionImages";
import VisionTexts from "./VisionText";

export default function Visions() {
    return (
        <>
            <section className="container py-5 py-md-6 py-lg-7">
                <div className="row align-items-center pt-3 pt-md-0">
                    <VisionImagesList/>
                    <div className="col-xl-4 col-md-5 offset-xl-1 pt-5 pt-md-0">
                        <VisionList />
                        <VisionTexts/>
                    </div>
                </div>
            </section>
        </>
    )
}