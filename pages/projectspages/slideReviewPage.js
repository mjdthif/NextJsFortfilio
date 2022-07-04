import React from 'react'
import Head from 'next/head';

import SlideReviewApp from '../../Components/Projects/mySlide/SlideReviewApp'

const SlideReviewPage = () => {
  return (
    <>
     <Head>
        <title>|Slide Review</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"  key="title" />
      </Head>
        <SlideReviewApp></SlideReviewApp>
    </>
  )
}

export default SlideReviewPage;