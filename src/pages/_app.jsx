import React from "react"
import Head from "next/head"


import '../../assets/styles/theme.min.css'
import '../../assets/vendor/simplebar/dist/simplebar.min.css'
import '../../assets/vendor/tiny-slider/dist/tiny-slider.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lise Schools Tanzania | Quality Education</title>
        <meta name="description" content="Lise Schools in Tanzania provides world-class education with a focus on academic excellence, innovation, and growth." />

        {/* Open Graph for Facebook/LinkedIn */}
        <meta property="og:title" content="Lise Schools Tanzania" />
        <meta property="og:description" content="World-class education in Tanzania." />
        <meta property="og:image" content="https://www.liseschools.ac.tz/og-image.jpg" />
        <meta property="og:url" content="https://www.liseschools.ac.tz/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lise Schools Tanzania" />
        <meta name="twitter:description" content="World-class education in Tanzania." />
        <meta name="twitter:image" content="https://www.liseschools.ac.tz/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.liseschools.ac.tz/" />

        {/* Favicon icon */}
        <link rel="shortcut icon" type="image/x-icon" href="/img/logo/ico.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "name": "Lise Schools Tanzania",
              "url": "https://www.liseschools.ac.tz/",
              "logo": "https://www.liseschools.ac.tz/img/logo/ico.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kibaha Bokotimiza, Pwani",
                "addressLocality": "Kibaha",
                "addressCountry": "TZ"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+255713785875",
                "contactType": "Admissions"
              }
            }),
          }}
        />

      </Head>

      <Component {...pageProps} />
      
    </>
  )
}

export default MyApp

