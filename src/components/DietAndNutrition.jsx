import React, { useEffect } from "react";

export default function DietAndNutrion() {
    useEffect(() => {
        function parallax() {
            const Parallax = require('../../assets/vendor/parallax-js/dist/parallax.min.js')
            for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t])
        }
        parallax()
    }, [])
    return (
        <>
            <section className="bg-secondary" id="2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 mt-3 mt-md-0 py-5 py-md-0">
                            <h2 className="text-lg-nowrap pb-2 text-center text-md-start">Diet and Nutrition</h2>
                            <p className="pb-2 text-center text-md-start">
                                Healthy foods help your child to grow and can improve concentration leading to higher levels of interest,
                                curiosity and playful learning. If we introduce children to healthy eating now, it is much more likely that they
                                will continue to make healthy food choices as they grow up. <br/><br/>

                                Lise Day Care Centre is providing a healthy and nutritious food which is prepared by our chief cook – within LISE
                                kitchenette. Your child will receive a breakfast at 10am, hot two-course lunch at 1pm and a porridge at 3pm before
                                going back home.
                            </p>
                        </div>
                        <div className="col-md-8">
                            <div className="parallax ms-auto" style={{ "maxWidth": "600px", "transform": "translate3d(0px, 0px, 0px) rotate(0.0001deg)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "pointerEvents": "none" }}>
                                <img className="d-block" src="/img/logo/lines.png" alt="Lines" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "position": "relative", "display": "block", "left": "0px", "top": "0px" }} />
                                <div className="parallax-layer" style={{ "zIndex": "2", "transform": "translate3d(5.7px, 2.2px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "position": "absolute", "display": "block", "left": "0px", "top": "0px" }} data-depth="0.15">
                                    <img src="/img/logo/Cooking.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}