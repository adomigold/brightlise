import React from "react"
import Head from "next/head"


import '../../assets/styles/theme.min.css'
import '../../assets/vendor/simplebar/dist/simplebar.min.css'
import '../../assets/vendor/tiny-slider/dist/tiny-slider.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Favicon icon */}
        <link rel="shortcut icon" type="image/x-icon" href="/img/logo/ico.jpg" />
        <title>Brigth Lise - Pre and Primary School</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

