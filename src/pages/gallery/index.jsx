import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Gallery() {
    const [galleries, setGalleries] = useState([]);

    const fetchGalleries = async () => {
        const response = await fetch('https://portal.adoshcool.cloud/api/v1/public-galleries?no_page=true');
        const data = await response.json();
        setGalleries(data);
    }

    useEffect(() => {
        fetchGalleries();
    }, []);

    return (
        <main className="page-wrapper">
            <Navbar />
            <section id="1" className="container mb-3 my-md-0 py-2 py-md-5">
                <h2 className="display-7 mb-lg-4 mb-3">Gallery</h2>
                <div className="row">
                    {galleries.map(gallery => (
                        <div className="col-md-4 mb-5" key={gallery.id}>
                            <div className="card card-hover h-100 border-1 shadow">
                                <img className="card-img-top card-img-bottom" src={gallery.featured_media?.file} alt="Illustration" width={'900px'} height={'400px'} />
                                <div className="card-body">
                                    <Link href={`/gallery/${gallery.id}`} className="nav-link">
                                        <h5 className="card-title">{gallery.title}</h5>
                                    </Link>
                                    <div className="card-text" dangerouslySetInnerHTML={{ __html: gallery.description }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}