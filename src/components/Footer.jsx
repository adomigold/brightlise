import React from "react";
import ContactUs from "./ContactUs";

export default function Footer() {
    return (
        <>
            <footer id="4" className="pt-5 pt-md-6pt-lg-7">
                <ContactUs />
                <div className="bg-dark pt-5 pb-4">
                    <div className="container d-md-flex justify-content-between align-items-center text-center">
                        <ul className="list-inline fs-sm mb-3 order-md-2">
                            <li className="list-inline-item my-1">
                                <a className="btn-social bs-md bs-facebook me-2" href="#">
                                    <i className="ai-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item my-1">
                                <a className="btn-social bs-md bs-instagram me-2" href="#">
                                    <i className="ai-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item my-1">
                                <a className="btn-social bs-md bs-whatsapp me-2" href="#">
                                    <i className="ai-whatsapp"></i>
                                </a>
                            </li>
                        </ul>
                        <p className="fs-sm mb-3 order-md-1">
                            <span className="text-light opacity-50 me-1">© All rights reserved. Made by</span>
                            <a className="nav-link-style nav-link-light" href="https://adolphmapunda.vercel.app/" rel="noreferrer" target="_blank">
                                Adolph Mapunda
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}