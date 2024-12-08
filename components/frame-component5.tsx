import type { NextPage } from "next";
import ContentCard from "./content-card";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.ecommerceDesktop1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.h6SectionTagWrapper}>
              <b className={styles.h6SectionTag}>Practice Advice</b>
            </div>
            <div className={styles.h3SectionTitleWrapper}>
              <h1 className={styles.h3SectionTitle}>Featured Posts</h1>
            </div>
            <div className={styles.paragraph}>
              <p
                className={styles.problemsTryingTo}
              >{`Problems trying to resolve the conflict between `}</p>
              <p
                className={styles.problemsTryingTo}
              >{`the two major realms of Classical physics: Newtonian mechanics `}</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <ContentCard
            padding={false}
            rounded={false}
            small={false}
            unsplashhHdHCfAifHU="/unsplashhhdhcfaifhu@2x.png"
          />
          <ContentCard
            padding={false}
            rounded={false}
            small={false}
            contentCardMarginLeft="unset"
            contentCardHeight="606px"
            unsplashhHdHCfAifHU="/unsplashtveqstc2uz8@2x.png"
          />
          <ContentCard
            padding={false}
            rounded={false}
            small={false}
            contentCardMarginLeft="unset"
            contentCardHeight="606px"
            unsplashhHdHCfAifHU="/unsplashdeguocub1y@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
