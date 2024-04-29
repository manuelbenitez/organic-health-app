import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import Image, { StaticImageData } from "next/image";

const cx = classNames.bind(styles);
const Button = ({
  text,
  onClick,
  type,
  size,
  image,
  moveOnMobile,
  id,
  selected,
  errorMessage,
  disabled,
}: IButton) => {
  const classNames = cx({
    button: true,
    /**
     * Classnames by size
     */
    main: size === "main",
    small: size === "small",
    wc: size === "wc",
    /**
     * Classnames by type
     */
    white: type === "white",
    orange: type === "orange",
    blue: type === "blue",
    gold: type === "dark-green",
    black: type === "black",
    whiteSec: type === "white-s",
    orangeSec: type === "orange-s",
    blueSec: type === "blue-s",
    goldSec: type === "gold-s",
    error: type === "error",
    errorSec: type === "error-s",
    blackSec: type === "black-s",
    goldBlack: type === "goldBlack",
    /**
     * Classnames by state
     */
    selected: selected !== undefined && selected,
  });

  const container = cx({
    buttonContainer: true,
    moveOnMobile: moveOnMobile,
  });
  return (
    <>
      <button
        className={classNames}
        onClick={onClick}
        id={id}
        disabled={errorMessage || disabled ? true : false}
      >
        {image && <Image src={image} alt={"img"} width={100} height={100} />}
        <span className="button-text">{text}</span>
      </button>
    </>
  );
};
interface IButton {
  text: string;
  onClick?: () => void;
  type: TButton;
  size: TSize;
  id?: string;
  selected?: boolean;
  image?: StaticImageData;
  moveOnMobile?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

type TButton =
  | "blue"
  | "white"
  | "orange"
  | "gold"
  | "dark-green"
  | "goldBlack"
  | "error"
  | "black"
  | "blue-s"
  | "white-s"
  | "orange-s"
  | "gold-s"
  | "error-s"
  | "black-s";
type TSize = "main" | "small" | "wc";
export default Button;
