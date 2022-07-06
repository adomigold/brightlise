import React from "react";
import Image from "next/image";
import ReactReadMoreReadLess from 'react-read-more-read-less'

export default function VisionTexts() {
    return (
        <>
            <div className="row pt-5">
                <div className="col-6 pb-1 mb-grid-gutter">
                    <Image className="d-block mb-3" src="/img/logo/Teaching-amico.svg" alt="Easy to edit" height={"95px"} width={"90px"} />
                    <h3 className="h6">Excellence and Respect</h3>
                    <p className="fs-sm mb-0">
                        <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more"}
                            readLessText={"Read less"}
                            readMoreStyle={{ color: "#00A3EA" }}
                            readLessStyle={{ color: "#00A3EA" }}>
                            We believe in providing a quality early learning education to our community.
                            We believe that everybody deserves to be respected, valued, and listened regardless
                            of their gender, religion, color or disabilities.
                        </ReactReadMoreReadLess>
                    </p>
                </div>
                <div className="col-6 pb-1 mb-grid-gutter">
                    <Image className="d-block mb-3" src="/img/logo/Person with medical mask-pana.svg" alt="Easy to edit" height={"95px"} width={"90px"} />
                    <h3 className="h6">Safety and Care</h3>
                    <p className="fs-sm mb-0">
                        <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more"}
                            readLessText={"Read less"}
                            readMoreStyle={{ color: "#00A3EA" }}
                            readLessStyle={{ color: "#00A3EA" }}>
                            We believe in protecting our children from any harm or danger.
                            We believe in providing what is necessary for our children in terms of basic child’s rights.
                        </ReactReadMoreReadLess>
                    </p>
                </div>
                <div className="col-6 pb-1 mb-grid-gutter">
                    <Image className="d-block mb-3" src="/img/logo/Teaching-amico.svg" alt="Easy to edit" height={"95px"} width={"90px"} />
                    <h3 className="h6">Care</h3>
                    <p className="fs-sm mb-0">
                        <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more"}
                            readLessText={"Read less"}
                            readMoreStyle={{ color: "#00A3EA" }}
                            readLessStyle={{ color: "#00A3EA" }}>
                            We believe in providing what is necessary for our children in terms of basic child’s rights.
                        </ReactReadMoreReadLess>
                    </p>
                </div>
                <div className="col-6 pb-1 mb-grid-gutter">
                    <Image className="d-block mb-3" src="/img/logo/Software integration-pana.svg" alt="Easy to edit" height={"95px"} width={"90px"} />
                    <h3 className="h6">Integrity and Trust</h3>
                    <p className="fs-sm mb-0">
                        <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more"}
                            readLessText={"Read less"}
                            readMoreStyle={{ color: "#00A3EA" }}
                            readLessStyle={{ color: "#00A3EA" }}>
                            We believe in doing things honestly, consistently with strong morals, ethical principles and values.
                            It is about doing the right thing even when no one is watching. We believe in truth and reliability on
                            the service we are providing to our community
                        </ReactReadMoreReadLess>
                    </p>
                </div>
            </div>
        </>
    )
}