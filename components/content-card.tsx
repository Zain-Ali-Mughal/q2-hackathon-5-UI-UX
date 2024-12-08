import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./content-card.module.css";

export type ContentCardType = {
  className?: string;
  unsplashhHdHCfAifHU: string;

  /** Variant props */
  padding?: boolean;
  rounded?: boolean;
  small?: boolean;

  /** Style props */
  contentCardMarginLeft?: CSSProperties["marginLeft"];
  contentCardHeight?: CSSProperties["height"];
};

const ContentCard: NextPage<ContentCardType> = ({
  className = "",
  padding = false,
  rounded = false,
  small = false,
  contentCardMarginLeft,
  contentCardHeight,
  unsplashhHdHCfAifHU,
}) => {
  const contentCardStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: contentCardMarginLeft,
      height: contentCardHeight,
    };
  }, [contentCardMarginLeft, contentCardHeight]);

  return (
    <div
      className={[styles.contentCard, className].join(" ")}
      data-padding={padding}
      data-rounded={rounded}
      data-small={small}
      style={contentCardStyle}
    >
      <div className={styles.fixedHeight}>
        <Image
          className={styles.unsplashhhdhcfaifhuIcon}
          loading="lazy"
          width={348}
          height={300}
          alt=""
          src={unsplashhHdHCfAifHU}
        />
        <div className={styles.tag}>
          <b className={styles.new}>NEW</b>
        </div>
      </div>
      <div className={styles.tagsParent}>
        <div className={styles.tags}>
          <div className={styles.small}>Google</div>
          <div className={styles.small1}>Trending</div>
          <div className={styles.small2}>New</div>
        </div>
        <h3 className={styles.h4PostTitle}>
          <p className={styles.loudestLa}>{`Loudest à la Madison #1 `}</p>
          <p className={styles.lintegral}>(L'integral)</p>
        </h3>
        <div className={styles.paragraphPostDescription}>
          <p
            className={styles.weFocusOn}
          >{`We focus on ergonomics and meeting `}</p>
          <p
            className={styles.youWhereYou}
          >{`you where you work. It's only a `}</p>
          <p className={styles.keystrokeAway}>keystroke away.</p>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.iconAkarIconsCalendarParent}>
            <Image
              className={styles.iconAkarIconsCalendar}
              width={16}
              height={16}
              alt=""
              src="/icon-akariconscalendar.svg"
            />
            <div className={styles.small3}>22 April 2021</div>
          </div>
          <div className={styles.iconAntDesignAreaChartOutParent}>
            <Image
              className={styles.iconAntDesignAreaChartOut}
              loading="lazy"
              width={16}
              height={15}
              alt=""
              src="/icon-antdesignareachartoutlined.svg"
            />
            <div className={styles.small4}>10 comments</div>
          </div>
        </div>
        <div className={styles.a}>
          <a className={styles.h6}>Learn More</a>
          <Image
            className={styles.iconArrowNext}
            width={9}
            height={16}
            alt=""
            src="/icon-arrownext.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
