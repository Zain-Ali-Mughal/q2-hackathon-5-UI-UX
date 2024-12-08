import type { NextPage } from "next";
import styles from "./button-md.module.css";

export type ButtonMdType = {
  className?: string;

  /** Variant props */
  dropdown?: boolean;
  icon?: boolean;
  iconLeft?: boolean;
  next?: boolean;
  ourlined?: boolean;
  play?: boolean;
  previous?: boolean;
  rounded?: boolean;
  text?: boolean;
};

const ButtonMd: NextPage<ButtonMdType> = ({
  className = "",
  dropdown = false,
  icon = false,
  iconLeft = true,
  next = false,
  ourlined = false,
  play = false,
  previous = false,
  rounded = false,
  text = true,
}) => {
  return (
    <button
      className={[styles.buttonMd, className].join(" ")}
      data-dropdown={dropdown}
      data-icon={icon}
      data-iconLeft={iconLeft}
      data-next={next}
      data-ourlined={ourlined}
      data-play={play}
      data-previous={previous}
      data-rounded={rounded}
      data-text={text}
    >
      <b className={styles.btnText}>ADD TO CART</b>
    </button>
  );
};

export default ButtonMd;
