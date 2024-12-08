import type { NextPage } from "next";
import Image from "next/image";
import ButtonMd from "./button-md";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.carousel2Wrapper, className].join(" ")}>
      <div className={styles.carousel2}>
        <div className={styles.carouselItem}>
          <div className={styles.shopHero2ProductSlide2}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.colMd6}>
                  <div className={styles.h5}>SUMMER 2020</div>
                  <h1 className={styles.h1Headline4}>Vita Classic Product</h1>
                  <div className={styles.h4}>
                    We know how large objects will act, We know how are objects
                    will act, We know
                  </div>
                  <div className={styles.cta}>
                    <b className={styles.h5Price}>$16.48</b>
                    <ButtonMd
                      dropdown={false}
                      icon={false}
                      iconLeft
                      next={false}
                      ourlined={false}
                      play={false}
                      previous={false}
                      rounded={false}
                      text
                    />
                  </div>
                </div>
                <div className={styles.colMd61}>
                  <Image
                    className={styles.shopHero2PngPicture1Icon}
                    loading="lazy"
                    width={443}
                    height={685}
                    alt=""
                    src="/shophero2pngpicture1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.carouselControlNext} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
