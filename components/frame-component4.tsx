import type { NextPage } from "next";
import Image from "next/image";
import ButtonMd1 from "./button-md1";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.ecommerceDesktop1Inner, className].join(" ")}>
      <div className={styles.noneParent}>
        <Image
          className={styles.noneIcon}
          loading="lazy"
          width={632}
          height={492}
          alt=""
          src="/none@2x.png"
        />
        <div className={styles.colMd6Wrapper}>
          <div className={styles.colMd6}>
            <b className={styles.h5HeaderTag}>SUMMER 2020</b>
            <h1 className={styles.h1Headline}>
              <p className={styles.partOfThe}>{`Part of the Neural `}</p>
              <p className={styles.partOfThe}>Universe</p>
            </h1>
            <h3 className={styles.h4SubHeadline}>
              <p
                className={styles.partOfThe}
              >{`We know how large objects will act, `}</p>
              <p className={styles.partOfThe}>but things on a small scale.</p>
            </h3>
            <div className={styles.cta}>
              <ButtonMd1
                dropdown={false}
                icon={false}
                iconLeft
                next={false}
                ourlined={false}
                play={false}
                previous={false}
                rounded={false}
                text
                buttonName="BUY NOW"
              />
              <ButtonMd1
                dropdown={false}
                icon={false}
                iconLeft
                next={false}
                ourlined
                play={false}
                previous={false}
                rounded={false}
                text
                buttonName="READ MORE"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
