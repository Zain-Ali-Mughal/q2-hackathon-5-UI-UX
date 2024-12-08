import type { NextPage } from "next";
import Image from "next/image";
import CardItem from "./card-item";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.desktopShopCards31Wrapper, className].join(" ")}
    >
      <div className={styles.desktopShopCards31}>
        <div className={styles.desktopShopCards31Inner}>
          <div className={styles.frameParent}>
            <div className={styles.h2FeatureSection1Wrapper}>
              <h2 className={styles.h2FeatureSection1}>EDITOR’S PICK</h2>
            </div>
            <div
              className={styles.paragraph}
            >{`Problems trying to resolve the conflict between `}</div>
          </div>
        </div>
        <div className={styles.cardItems}>
          <div className={styles.cardItem}>
            <div className={styles.mediaBgCover}>
              <div className={styles.cardCover20Parent}>
                <Image
                  className={styles.cardCover20Icon}
                  width={510}
                  height={500}
                  alt=""
                  src="/cardcover20@2x.png"
                />
                <Image
                  className={styles.filterIcon}
                  loading="lazy"
                  width={509}
                  height={500}
                  alt=""
                  src="/filter@2x.png"
                />
              </div>
              <div className={styles.cardContent}>
                <b className={styles.h2}>MEN</b>
              </div>
            </div>
          </div>
          <CardItem
            cardCover21="/cardcover21@2x.png"
            filter="/filter-1@2x.png"
            h2="WOMEN"
          />
          <div className={styles.tripleCardItem}>
            <CardItem
              cardItemWidth="unset"
              cardItemAlignSelf="stretch"
              mediaBgCoverPadding="171px 14px 23px"
              cardCover21="/cardcover22@2x.png"
              filter="/filter-2@2x.png"
              h2="ACCESSORIES"
            />
            <CardItem
              cardItemWidth="unset"
              cardItemAlignSelf="stretch"
              mediaBgCoverPadding="176px 18px 18px"
              cardCover21="/cardcover23@2x.png"
              filter="/filter-3@2x.png"
              h2="KIDS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
