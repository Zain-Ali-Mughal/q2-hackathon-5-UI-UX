import type { NextPage } from "next";
import Image from "next/image";
import styles from "./carousel.module.css";

export type CarouselType = {
  className?: string;
};

const Carousel: NextPage<CarouselType> = ({ className = "" }) => {
  return (
    <div className={[styles.carousel1, className].join(" ")}>
      <div className={styles.carouselInner}>
        <div className={styles.carouselItem}>
          <Image
            className={styles.shopHero1ProductSlide1Icon}
            loading="lazy"
            width={1440}
            height={716}
            alt=""
            src="/shophero1productslide1@2x.png"
          />
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colMd8}>
                <b className={styles.h5}>SUMMER 2020</b>
                <h1 className={styles.h1Headline6}>NEW COLLECTION</h1>
                <h3 className={styles.h4}>
                  <p
                    className={styles.weKnowHow}
                  >{`We know how large objects will act, `}</p>
                  <p className={styles.weKnowHow}>
                    but things on a small scale.
                  </p>
                </h3>
                <button className={styles.cta}>
                  <div className={styles.buttonbtnprimaryColorbtnL}>
                    <b className={styles.h3}>SHOP NOW</b>
                  </div>
                </button>
              </div>
              <div className={styles.colMd4} />
            </div>
          </div>
          <div className={styles.carouselControlNext} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
