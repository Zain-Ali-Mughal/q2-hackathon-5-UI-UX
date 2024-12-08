import type { NextPage } from "next";
import Image from "next/image";
import styles from "./background.module.css";

export type BackgroundType = {
  className?: string;
};

const Background: NextPage<BackgroundType> = ({ className = "" }) => {
  return (
    <header className={[styles.background, className].join(" ")}>
      <Image
        className={styles.heroCover2Icon}
        width={1440}
        height={747}
        alt=""
        src="/herocover2@2x.png"
      />
      <div className={styles.filter}>
        <div className={styles.navbarStyle8NavbarLight}>
          <div className={styles.navbarDark}>
            <div className={styles.container}>
              <nav className={styles.row}>
                <div className={styles.settingsIcons}>
                  <div className={styles.btnSm20}>
                    <div className={styles.icnSettingsIcnXsWrapper}>
                      <Image
                        className={styles.icnSettingsIcnXs}
                        loading="lazy"
                        width={16}
                        height={16}
                        alt=""
                        src="/icn-settings-icnxs.svg"
                      />
                    </div>
                    <b className={styles.h6}>(225) 555-0118</b>
                  </div>
                  <div className={styles.btnSm20}>
                    <div className={styles.icnSettingsIcnXsWrapper}>
                      <Image
                        className={styles.icnSettingsIcnXs}
                        width={16}
                        height={16}
                        alt=""
                        src="/icn-settings-icnxs-1.svg"
                      />
                    </div>
                    <b className={styles.loginRegister}>
                      michelle.rivera@example.com
                    </b>
                  </div>
                </div>
                <div className={styles.h6Wrapper}>
                  <b className={styles.h62}>
                    Follow Us and get a chance to win 80% off
                  </b>
                </div>
                <div className={styles.rowInner}>
                  <div className={styles.h6Parent}>
                    <a className={styles.h63}>Follow Us :</a>
                    <div className={styles.icnSettingsIcnXsFrame}>
                      <Image
                        className={styles.icnSettingsIcnXs}
                        width={16}
                        height={16}
                        alt=""
                        src="/icn-settings-icnxs-2.svg"
                      />
                    </div>
                    <div className={styles.icnSettingsIcnXsFrame}>
                      <Image
                        className={styles.icnSettingsIcnXs}
                        width={16}
                        height={16}
                        alt=""
                        src="/icn-settings-icnxs-3.svg"
                      />
                    </div>
                    <div className={styles.icnSettingsIcnXsFrame}>
                      <Image
                        className={styles.icnSettingsIcnXs}
                        width={16}
                        height={16}
                        alt=""
                        src="/icn-settings-icnxs-4.svg"
                      />
                    </div>
                    <div className={styles.icnSettingsIcnXsFrame}>
                      <Image
                        className={styles.icnSettingsIcnXs}
                        width={16}
                        height={16}
                        alt=""
                        src="/icn-settings-icnxs-5.svg"
                      />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className={styles.navbarToggler}>
            <div className={styles.navbarTogglerIcon} />
          </div>
          <div className={styles.navbarStyle8NavbarLightInner}>
            <div className={styles.frameParent}>
              <div className={styles.bandageWrapper}>
                <a className={styles.bandage}>Bandage</a>
              </div>
              <div className={styles.collapseNavbarCollapse}>
                <div className={styles.linkWrapper}>
                  <a className={styles.link}>Home</a>
                </div>
                <div className={styles.dropdownToggleWrapper}>
                  <div className={styles.dropdownToggle}>
                    <a className={styles.category}>Shop</a>
                    <Image
                      className={styles.vectorIcon}
                      width={10}
                      height={6}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.dropdownMenu}>
                  <div className={styles.container1}>
                    <div className={styles.row1}>
                      <div className={styles.colMd3}>
                        <b className={styles.h5}>Shop Layout</b>
                        <div className={styles.div}>
                          <b className={styles.loginRegister}>Full Width</b>
                          <b className={styles.loginRegister}>Sidebar Right</b>
                          <b className={styles.loginRegister}>Sidebar Left</b>
                          <b className={styles.loginRegister}>List View</b>
                          <b className={styles.loginRegister}>Checkout</b>
                          <b className={styles.loginRegister}>Card</b>
                          <b className={styles.loginRegister}>Wishlist</b>
                        </div>
                      </div>
                      <div className={styles.colMd31}>
                        <b className={styles.h5}>Product layout</b>
                        <div className={styles.div}>
                          <b className={styles.loginRegister}>
                            Big Image Scrolling
                          </b>
                          <b className={styles.loginRegister}>Simple Product</b>
                          <b className={styles.loginRegister}>Vertical Right</b>
                          <b className={styles.loginRegister}>Vertical Left</b>
                          <b className={styles.loginRegister}>Vertical Left</b>
                          <b className={styles.loginRegister}>
                            Vertical Horizontal
                          </b>
                          <b className={styles.loginRegister}>Collection</b>
                        </div>
                      </div>
                      <div className={styles.colMd32}>
                        <b className={styles.h5}>Product Type</b>
                        <div className={styles.div}>
                          <b className={styles.loginRegister}>Simple Product</b>
                          <b className={styles.loginRegister}>
                            Vertical Product
                          </b>
                          <b className={styles.loginRegister}>Left Product</b>
                          <b className={styles.loginRegister}>Right Product</b>
                          <b
                            className={styles.loginRegister}
                          >{`Special Products `}</b>
                          <b className={styles.loginRegister}>Outshout store</b>
                        </div>
                      </div>
                      <div className={styles.colMd3}>
                        <b className={styles.h5}>Product Categories</b>
                        <div className={styles.div}>
                          <b className={styles.loginRegister}>Bedroom</b>
                          <b className={styles.loginRegister}>Outdoor</b>
                          <b className={styles.loginRegister}>Decoration</b>
                          <b className={styles.loginRegister}>Kitchen</b>
                        </div>
                      </div>
                      <div className={styles.colMd34}>
                        <Image
                          className={styles.dropHeroIcon}
                          width={321}
                          height={368}
                          alt=""
                          src="/drophero@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <nav className={styles.collapseNavbarCollapseInner}>
                  <nav className={styles.linkParent}>
                    <a className={styles.link}>About</a>
                    <a className={styles.link}>Blog</a>
                    <a className={styles.link}>Contact</a>
                    <a className={styles.link}>Pages</a>
                  </nav>
                </nav>
                <div className={styles.btn32}>
                  <div className={styles.icnSettingsIcnXsWrapper3}>
                    <Image
                      className={styles.icnSettingsIcnXs6}
                      width={12}
                      height={12}
                      alt=""
                      src="/icn-settings-icnxs-6.svg"
                    />
                  </div>
                  <b className={styles.loginRegister}>Login / Register</b>
                </div>
                <div className={styles.icnSettingsIcnXsWrapper}>
                  <div className={styles.btn321}>
                    <input className={styles.icnSettingsIcnXs7} type="radio" />
                  </div>
                </div>
                <div className={styles.doubleBtn}>
                  <div className={styles.btn32}>
                    <Image
                      className={styles.icnSettingsIcnXs8}
                      width={16}
                      height={16}
                      alt=""
                      src="/icn-settings-icnxs-8.svg"
                    />
                    <div className={styles.emptyBtn}>1</div>
                  </div>
                </div>
                <div className={styles.doubleBtn}>
                  <div className={styles.btn32}>
                    <input className={styles.icnSettingsIcnXs7} type="radio" />
                    <div className={styles.emptyBtn}>1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Background;
