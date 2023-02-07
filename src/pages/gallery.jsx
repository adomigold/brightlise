import React from "react";
import NavBar from "../components/Navbar";

export default function Gallery() {
    return (
        <>
            <NavBar />
            <section class="container mt-3 pb-5 mb-lg-4 mb-xl-5">
                <h2 class="h2 pb-3 mb-lg-4">Our Gallery</h2>
                <div class="row pb-2 pb-sm-3 pb-md-4 mb-xxl-2 g-4">
                    <div class="col-md-6">
                        <div class="hotspots hotspots-alt">
                            <img class="d-block rounded-1" src="/img/logo/visions.jpg" alt="Image" />
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <img class="d-block rounded-1 mb-4" src="/img/logo/visions.jpg" alt="Image" />
                        <img class="rounded-1" src="/img/logo/visions.jpg" alt="Image" />
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <img class="d-block rounded-1 mb-4" src="/img/logo/visions.jpg" alt="Image" />
                        <img class="rounded-1" src="/img/logo/visions.jpg" alt="Image" />
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <img class="d-block rounded-1 mb-4" src="/img/logo/visions.jpg" alt="Image" />
                        <img class="rounded-1" src="/img/logo/visions.jpg" alt="Image" />
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <img class="d-block rounded-1 mb-4" src="/img/logo/visions.jpg" alt="Image" />
                        <img class="rounded-1" src="/img/logo/visions.jpg" alt="Image" />
                    </div>
                    <div class="col-md-6">
                        <div class="hotspots hotspots-alt">
                            <img class="d-block rounded-1" src="/img/logo/visions.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}