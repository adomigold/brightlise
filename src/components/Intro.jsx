import Image from "next/image"

export default function Intro() {
    return (
        <section id="1" className="container mb-3 my-md-0 py-5 py-md-6">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 order-md-1 order-2 text-md-start text-center">
                    <h1 className="display-4 mb-lg-4 mb-3">Welcome to Bright Lise.</h1>
                    <p className="mb-lg-5 mb-4 text-muted">
                        Your child is someone very special and we take care, value, and nurture each individual child’s
                        development, learning and achievement. We provide a warm welcome for you and your child every day.
                        It can be difficult to decide what is best for your child but at Lise Day Care Centre, we truly believe
                        that children and parents deserve only the very best. We would love to have the opportunity to work and
                        grow with you and your child.
                    </p>
                </div>
                <div className="col-lg-8 col-md-7 order-md-2 order-1 mb-md-0 mb-grid-gutter">
                    <div className="card card-hover h-100 border-0 shadow">
                        <Image className="card-img-top card-img-bottom" src="/img/logo/homeImage.jpg" alt="Illustration" width={'900px'} height={'400px'} />
                    </div>
                </div>
            </div>
        </section>
    )
}