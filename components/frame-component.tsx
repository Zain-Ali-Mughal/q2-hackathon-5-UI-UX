import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.h5Parent}>
          <b className={styles.h5}>Company Info</b>
          <div className={styles.h5Wrapper}>
            <b className={styles.h5}>Legal</b>
          </div>
          <div className={styles.h5Container}>
            <b className={styles.h5}>Features</b>
          </div>
          <div className={styles.h5Wrapper}>
            <b className={styles.h5}>Resources</b>
          </div>
          <b className={styles.h5}>Get In Touch</b>
        </div>
        <div className={styles.footerLinksContainerParent}>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerLinksColumn}>
              <b className={styles.link}>About Us</b>
              <b className={styles.link}>Carrier</b>
              <b className={styles.link}>We are hiring</b>
              <b className={styles.link}>Blog</b>
            </div>
            <div className={styles.footerLinksColumn1}>
              <b className={styles.link}>About Us</b>
              <b className={styles.link}>Carrier</b>
              <b className={styles.link}>We are hiring</b>
              <b className={styles.link}>Blog</b>
            </div>
            <div className={styles.footerLinksColumn2}>
              <b className={styles.link8}>Business Marketing</b>
              <b className={styles.link}>User Analytic</b>
              <b className={styles.link}>Live Chat</b>
              <b className={styles.link}>Unlimited Support</b>
            </div>
            <div className={styles.footerLinksColumn3}>
              <b className={styles.link}>{`IOS & Android`}</b>
              <b className={styles.link}>Watch a Demo</b>
              <b className={styles.link}>Customers</b>
              <b className={styles.link}>API</b>
            </div>
          </div>
          <div className={styles.newsletter}>
            <div className={styles.formControlInputStyle1}>
              <div className={styles.emailPlaceholder}>
                <div className={styles.yourEmail}>Your Email</div>
              </div>
              <button className={styles.btn}>
                <div className={styles.inputGroupText}>Subscribe</div>
              </button>
            </div>
            <div className={styles.formTextWrapper}>
              <div className={styles.yourEmail}>Lore imp sum dolor Amit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
