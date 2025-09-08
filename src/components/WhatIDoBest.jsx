import Image from "next/image"
import Skills from "../components/Skills"

export default function WhatIDoBest({ skills }) {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
                    <div className="card card-hover border-0 shadow" style={{ height: "600px" }}>
                        <Image className="card-img-top card-img-bottom" src="https://dgrprvbq96zzq.cloudfront.net/demo/uploads/media/1755189672172-1752872790390-18.jpg" alt="Illustration" width={'600px'} height={'800px'} />
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
                    <Skills skills={skills} />
                </div>
            </div>
        </>
    )
}