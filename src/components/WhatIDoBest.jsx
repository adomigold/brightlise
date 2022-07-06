import Image from "next/image"
import Skills from "../components/Skills"

export default function WhatIDoBest({ skills }) {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
                    <div className="card card-hover h-100 border-0 shadow">
                        <Image className="card-img-top card-img-bottom" src="/img/logo/whyChooseUs.jpg" alt="Illustration" width={'906px'} height={'611px'} />
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
                    <Skills skills={skills} />
                </div>
            </div>
        </>
    )
}