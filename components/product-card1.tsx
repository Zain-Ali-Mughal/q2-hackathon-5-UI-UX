import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./product-card1.module.css";

export type ProductCard1Type = {
  className?: string;
  fixedHeight: string;

  /** Style props */
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivJustifyContent1?: CSSProperties["justifyContent"];
};

const ProductCard1: NextPage<ProductCard1Type> = ({
  className = "",
  fixedHeight,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivJustifyContent1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignItems: frameDivAlignItems,
    };
  }, [frameDivAlignItems]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivJustifyContent]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent1,
    };
  }, [frameDivJustifyContent1]);

  return (
    <div className={[styles.productCard, className].join(" ")}>
      <Image
        className={styles.fixedHeightIcon}
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
          <div
            className={styles.linkProductCategoryParent}
            style={frameDiv2Style}
          >
            <b className={styles.linkProductCategory}>English Department</b>
            <div className={styles.oldPriceWrapper} style={frameDiv3Style}>
              <div className={styles.oldPrice}>
                <b className={styles.h5Price}>$16.48</b>
                <b className={styles.h5Price1}>$6.48</b>
              </div>
            </div>
            <div className={styles.productColorsWrapper} style={frameDiv4Style}>
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
  );
};

export default ProductCard1;
