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
                                href="https://maps.app.goo.gl/jnBmUhXNmZZwTfBB9"
                                data-iframe="true"
                                data-sub-html="<h6 className=&quot;fs-sm text-light&quot;>396 Lillian Blvd, Holbrook, NY 11741</h6>">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.600224991454!2d38.950186099999996!3d-6.818380200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c690094ac735b%3A0x63a354286910629!2sLise%20Schools%20Kibaha%20-%20Daycare%2C%20Pre%20%26%20Primary!5e0!3m2!1sen!2stz!4v1757316656097!5m2!1sen!2stz" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe><span className="gallery-caption">
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