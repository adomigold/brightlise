import React from "react";
import Image from "next/image";

export default function VisionImagesList() {
    return (
        <>
            <div className="col-md-7 bg-position-start-bottom bg-repeat-0" style={{ "backgroundImage": "url(img/logo/bg-shape.svg)" }}>
                <div className="mx-auto mx-md-0 ms-xl-7" style={{ "maxWidth": "600px" }}>
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-3 mb-grid-gutter text-center text-sm-start">
                                <Image className="d-block mx-auto card-img-top card-img-bottom" src="/img/logo/visions.jpg" height="700px" alt="Features" width="705px" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-3 mb-grid-gutter text-center text-sm-start">
                                <Image className="d-block mx-auto card-img-top card-img-bottom" src="/img/logo/visions.jpg" height="700px" alt="Features" width="705px" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-3 mb-grid-gutter text-center text-sm-start">
                                <Image className="d-block mx-auto card-img-top card-img-bottom" src="/img/logo/visions.jpg" height="700px" alt="Features" width="705px" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-3 mb-grid-gutter text-center text-sm-start">
                                <Image className="d-block mx-auto card-img-top card-img-bottom" src="/img/logo/visions.jpg" height="700px" alt="Features" width="705px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}