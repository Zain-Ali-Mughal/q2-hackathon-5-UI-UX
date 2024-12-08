import type { NextPage } from "next";
import styles from "./button-md1.module.css";

export type ButtonMd1Type = {
  className?: string;
  buttonName?: string;

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

const ButtonMd1: NextPage<ButtonMd1Type> = ({
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
  buttonName,
}) => {
  return (
    <button
      className={[styles.root, className].join(" ")}
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
      <b className={styles.buttonName}>{buttonName}</b>
    </button>
  );
};

export default ButtonMd1;
