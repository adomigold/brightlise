import React from "react";

export default function AboutUs({ about }) {
    return (
        <>
            <section id="3" className="container">
                <h2 className="text-center pb-2 mb-5">About Us</h2>
                <div className="row pb-2">
                    <div className="col-lg-6">
                        <div className="accordion" id="faq">
                            {about.data.map((a, i) => (
                                <div key={i} className="accordion-item shadow">
                                    <h2 className="accordion-header" id={`faq-heading-${i}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target={`#faq-content-${i}`} aria-expanded="false" aria-controls={`faq-content-${i}`}>
                                            {a.title}
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse" id={`faq-content-${i}`} aria-labelledby={`faq-heading-${i}`} data-bs-parent="#faq">
                                        <div className="accordion-body">
                                            <div className="fs-sm">
                                                {a.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-5 offset-lg-1 bg-light shadow-lg rounded-3 p-1 mb-grid-gutter text-center text-sm-start">
                        <img className="card-img-top card-img-bottom" src="/img/logo/AboutUs.jpg" alt="Illustration" />
                    </div>
                </div>
            </section>
        </>
    )
}