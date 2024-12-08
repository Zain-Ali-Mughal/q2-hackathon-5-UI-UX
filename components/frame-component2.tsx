import type { NextPage } from "next";
import ProductCard from "./product-card";
import ProductCard1 from "./product-card1";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.ecommerceDesktop1Inner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.h2SectionTitleWrapper}>
              <h3 className={styles.h2SectionTitle}>Featured Products</h3>
            </div>
            <div className={styles.h3SectionTitleWrapper}>
              <h2 className={styles.h3SectionTitle}>BESTSELLER PRODUCTS</h2>
            </div>
            <div
              className={styles.paragraph}
            >{`Problems trying to resolve the conflict between `}</div>
          </div>
        </div>
        <div className={styles.productCards}>
          <ProductCard fixedHeight="/fixedheight@2x.png" />
          <ProductCard
            fixedHeight="/fixedheight-1@2x.png"
            frameDivAlignItems="flex-end"
            frameDivJustifyContent="flex-end"
          />
          <ProductCard
            fixedHeight="/fixedheight-2@2x.png"
            frameDivAlignItems="flex-end"
            frameDivJustifyContent="flex-end"
          />
          <ProductCard
            fixedHeight="/fixedheight-3@2x.png"
            frameDivAlignItems="flex-end"
            frameDivJustifyContent="flex-end"
          />
          <ProductCard1 fixedHeight="/fixedheight-4@2x.png" />
          <ProductCard1
            fixedHeight="/fixedheight-5@2x.png"
            frameDivAlignItems="flex-end"
            frameDivJustifyContent="flex-end"
            frameDivJustifyContent1="flex-end"
          />
          <ProductCard1
            fixedHeight="/fixedheight-6@2x.png"
            frameDivAlignItems="flex-end"
            frameDivJustifyContent="flex-end"
            frameDivJustifyContent1="flex-end"
          />
          <ProductCard1
            fixedHeight="/fixedheight-7@2x.png"
            frameDivAlignItems="flex-end"
            frameDivJustifyContent="flex-end"
            frameDivJustifyContent1="flex-end"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
