import type { NextPage } from "next";
import Background from "../components/background";
import Carousel from "../components/carousel";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import Div from "../components/div";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const EcommerceDesktop: NextPage = () => {
  return (
    <div className={styles.ecommerceDesktop1}>
      <section className={styles.desktopShopHeader1}>
        <Background />
        <Carousel />
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <footer className={styles.divParent}>
        <Div />
        <FrameComponent />
      </footer>
      <div className={styles.div}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colMd7}>
              <b
                className={styles.madeWithLove}
              >{`Made With Love By Finland All Right Reserved `}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDesktop;
