import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./card-item.module.css";

export type CardItemType = {
  className?: string;
  cardCover21: string;
  filter: string;
  h2?: string;

  /** Style props */
  cardItemWidth?: CSSProperties["width"];
  cardItemAlignSelf?: CSSProperties["alignSelf"];
  mediaBgCoverPadding?: CSSProperties["padding"];
};

const CardItem: NextPage<CardItemType> = ({
  className = "",
  cardItemWidth,
  cardItemAlignSelf,
  mediaBgCoverPadding,
  cardCover21,
  filter,
  h2,
}) => {
  const cardItemStyle: CSSProperties = useMemo(() => {
    return {
      width: cardItemWidth,
      alignSelf: cardItemAlignSelf,
    };
  }, [cardItemWidth, cardItemAlignSelf]);

  const mediaBgCoverStyle: CSSProperties = useMemo(() => {
    return {
      padding: mediaBgCoverPadding,
    };
  }, [mediaBgCoverPadding]);

  return (
    <div
      className={[styles.cardItem, className].join(" ")}
      style={cardItemStyle}
    >
      <div className={styles.mediaBgCover} style={mediaBgCoverStyle}>
        <div className={styles.cardCover21Parent}>
          <Image
            className={styles.cardCover21Icon}
            width={240}
            height={500}
            alt=""
            src={cardCover21}
          />
          <Image
            className={styles.filterIcon}
            width={239}
            height={500}
            alt=""
            src={filter}
          />
        </div>
        <div className={styles.cardContent}>
          <b className={styles.h2}>{h2}</b>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
