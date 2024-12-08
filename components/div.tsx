import type { NextPage } from "next";
import Image from "next/image";
import styles from "./div.module.css";

export type DivType = {
  className?: string;
};

const Div: NextPage<DivType> = ({ className = "" }) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <div className={styles.bandageParent}>
        <h2 className={styles.bandage}>Bandage</h2>
        <div className={styles.socialContainerWrapper}>
          <div className={styles.socialContainer}>
            <Image
              className={styles.facebookIcon}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/facebook.svg"
            />
            <Image
              className={styles.facebookIcon}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/instagram.svg"
            />
            <div className={styles.twitterWrapper}>
              <Image
                className={styles.twitterIcon}
                loading="lazy"
                width={24}
                height={20}
                alt=""
                src="/twitter.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hr} />
    </div>
  );
};

export default Div;
