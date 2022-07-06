import React from "react";
import ChildrenHelpedWith from "./ChildrenHelpedWith";
import CurriculumList from "./CurriculumList";

export default function Curriculum() {
    return (
        <>
            <section className="container py-5 py-md-6 py-lg-7">
                <div className="row align-items-center mt-3 mt-md-0">
                    <ChildrenHelpedWith/>
                    <CurriculumList/>
                </div>
            </section>
        </>
    )
}