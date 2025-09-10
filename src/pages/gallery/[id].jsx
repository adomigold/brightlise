import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


export default function Gallery() {
    const router = useRouter();
    const { id } = router.query;

    const [gallery, setGallery] = useState({});
    const [photos, setPhotos] = useState([]);
    const [index, setIndex] = useState(-1);

    const fetchImageDimensions = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                resolve({
                    src: url,
                    width: img.naturalWidth,
                    height: img.naturalHeight,
                });
            };
            img.onerror = reject;
        });
    };

    const processGalleryImages = async (mediaList) => {
        const imageMedia = mediaList.filter((media) => media.type === 'image');
        const photosWithDimensions = await Promise.all(
            imageMedia.map((photo) => fetchImageDimensions(photo.file))
        );
        setPhotos(photosWithDimensions);
    };

    const fetchGallery = async () => {
        const response = await fetch(`https://portal.adoshcool.cloud/api/v1/public-galleries/${id}`);
        const data = await response.json();
        setGallery(data);

        if (data.media?.length) {
                await processGalleryImages(data.media);
            }
    }

    useEffect(() => {
        if (id) {
            fetchGallery();
        }
    }, [id]);

    return (
        <>
            <main className="page-wrapper">
                <Navbar />
                <section id="1" className="container mb-3 my-md-0 py-2 py-md-5">
                    <h2 className="display-7 mb-lg-4 mb-3">{gallery.title}</h2>
                    <p className="mb-lg-5 mb-4 text-muted" dangerouslySetInnerHTML={{ __html: gallery.description }}></p>
                    <RowsPhotoAlbum targetRowHeight={400} onClick={({ index }) => setIndex(index)} photos={photos || []} />

                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                </section>
            </main>
        </>
    )
}