import React from "react";

export default function AboutUs() {
    return (
        <>
            <section id="3" className="container">
                <h2 className="text-center pb-2 mb-5">About Us</h2>
                <div className="row pb-2">
                    <div className="col-lg-6">
                        <div className="accordion" id="faq">
                            <div className="accordion-item shadow">
                                <h2 className="accordion-header" id="faq-heading-1">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-1" aria-expanded="false" aria-controls="faq-content-1">
                                        What are we offer?
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="faq-content-1" aria-labelledby="faq-heading-1" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <div className="fs-sm">
                                            Lise Schools is offering day-care and pre-school education on a part- or full-time basis
                                            for children from 0-6 years old. The Centre is located at Boko Timiza area – Kibaha District, near
                                            Boko Timiza Primary school.
                                            <br /><br />
                                            We are offering high- class learning environment in our unique purpose-built countryside location.
                                            School Opening time is Monday to Friday from 8:00am-4:00pm. The Day Care Centre is staffed by
                                            dedicated and specialist professionals who will support your child’s learning, physical and
                                            emotional wellbeing.
                                            <br /><br />
                                            At Lise Schools, We also work towards environmental protection and respecting UNICEF Rights.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item shadow">
                                <h2 className="accordion-header" id="faq-heading-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2"
                                        aria-expanded="false" aria-controls="faq-content-2">
                                        What is Our Leadership?
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="faq-content-2" aria-labelledby="faq-heading-2" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <div className="fs-sm">
                                            Lise Schools is led by Day Care Centre Director, who is supported by a team of Qualified Cleaners, Cooks,
                                            Gardeners, Drivers and other  Day Care Centre assistants completes  the highly qualified Lise  team.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item shadow">
                                <h2 className="accordion-header" id="faq-heading-3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-3" aria-expanded="false" aria-controls="faq-content-3">
                                        Patnership with Parents/Gurdians
                                    </button>
                                </h2>
                                <div className="accordion-collapse collapse" id="faq-content-3" aria-labelledby="faq-heading-3" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <div className="fs-sm">
                                            You as parents/guardians are the prime educators of our children in their earliest years. At Lise Schools,
                                            we clearly recognize that you have a critical role to play in working with us to support
                                            child’s development and learning. We recognize that children do better when parents / guardians, carers
                                            and staff work closely together.
                                            <br /><br />
                                            Lise Schools has an open-door policy whereby parents/ Guardians are encouraged to pay a
                                            visit and have a discussion on matters related to child growth and learnings. Staff are always
                                            available to listen to your comments or suggestions and  work hard to build meaningful and positive
                                            relationships with you.It is only by working together that we can be THE BEST!
                                        </div>
                                    </div>
                                </div>
                            </div>
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