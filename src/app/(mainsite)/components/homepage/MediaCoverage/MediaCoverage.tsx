"use client"

import styles from "./mediacoverage.module.css"
import MediaBox from "./MediaBox"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import mediaData from "@/app/(mainsite)/data/mediaData";

export default function MediaCoverage() {

  const carouselBreakpoints = {
    desktop: {
      breakpoint: { max: 9999, min: 1922 },
      items: 3
    },
    laptop: {
      breakpoint: { max: 1921, min: 991 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 990, min: 650 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 649, min: 0 },
      items: 1
    }
  };

    const mediaDataElems = mediaData.map((data: any, i)=>{
        return <MediaBox key={i} {...data} />
    });


  return (
    <section className={styles.mediaCoverage}>
      <div className="center">
        <h1>Media Coverage</h1>
      </div>
        <Carousel
        responsive={carouselBreakpoints}
        autoPlay={true}
        draggable={false}
        infinite={true}
        autoPlaySpeed={4000}
        >
            {mediaDataElems}
        </Carousel>

        
    </section>
  )
}
