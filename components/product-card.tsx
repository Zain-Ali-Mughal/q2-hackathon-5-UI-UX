import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./product-card.module.css";

export type ProductCardType = {
  className?: string;
  fixedHeight: string;

  /** Style props */
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
};

const ProductCard: NextPage<ProductCardType> = ({
  className = "",
  fixedHeight,
  frameDivAlignItems,
  frameDivJustifyContent,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
    };
  }, [frameDivAlignItems]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivJustifyContent]);

  return (
    <div className={[styles.productCard, className].join(" ")}>
      <Image
        className={styles.fixedHeightIcon}
        loading="lazy"
        width={239}
        height={427}
        alt=""
        src={fixedHeight}
      />
      <div className={styles.productCardInner}>
        <div className={styles.frameParent}>
          <div className={styles.h5ProductTitleWrapper}>
            <b className={styles.h5ProductTitle}>Graphic Design</b>
          </div>
          <div className={styles.linkProductCategoryWrapper}>
            <b className={styles.linkProductCategory}>English Department</b>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.secondOldPriceParent} style={frameDivStyle}>
              <div className={styles.secondOldPrice}>
                <b className={styles.h5Price}>$16.48</b>
                <b className={styles.h5Price1}>$6.48</b>
              </div>
              <div
                className={styles.productColorsWrapper}
                style={frameDiv1Style}
              >
                <div className={styles.productColors}>
                  <div className={styles.productColorsChild} />
                  <div className={styles.productColorsItem} />
                  <div className={styles.productColorsInner} />
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
