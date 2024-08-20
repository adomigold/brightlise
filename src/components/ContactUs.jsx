import React from "react";

export default function ContactUs() {
    return (
        <>
            <section id="$" className="bg-secondary">
                <div className="container pt-5 pb-6 py-md-7">
                    <h2 className="text-center mb-5">Contact Us</h2>
                    <div className="row">
                        <div className="col-md-6 mb-5 mb-md-0">
                            <form className="needs-validation mb-4 pb-2" noValidate="">
                                <div className="input-group mb-3"><i className="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                    <input className="form-control rounded" type="text" placeholder="Name" required="" />
                                </div>
                                <div className="input-group mb-3"><i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                    <input className="form-control rounded" type="email" placeholder="Email" required="" />
                                </div>
                                <div className="mb-3 pb-1">
                                    <textarea className="form-control" rows="4" placeholder="Message" required=""></textarea>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-sm-6">
                                        <button className="btn btn-primary d-block w-100" type="submit">Send Request</button>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5>We are located</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-0">Kibaha Bokotimiza</li>
                                        <li className="mb-0">Pwani</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Collaboration</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-0">0713 785 875</li>
                                        <li className="mb-0">0715 223 190</li>
                                        <li className="mb-0">info@liseschools.ac.tz</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-5 offset-xl-1 gallery">
                            <a className="gallery-item map-popup border rounded-3" target="_blank" rel="noreferrer"
                                href="https://www.google.com/maps/search/Kibaha+Bokotimiza/@-6.8023083,38.9027307,13z/data=!3m1!4b1"
                                data-iframe="true"
                                data-sub-html="<h6 className=&quot;fs-sm text-light&quot;>396 Lillian Blvd, Holbrook, NY 11741</h6>">
                                <img src="/img/logo/map.png" alt="Maps" />
                                <span className="gallery-caption">
                                    <i className="ai-maximize-2 fs-xl mt-n1 me-2"></i>View the map
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}