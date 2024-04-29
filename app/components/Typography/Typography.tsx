import React from "react";

const Typography = ({ text, type, color = "white", offSet, onClick }: ITypography) => {
  return (
    <>
      {type === "h1" && (
        <h1
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </h1>
      )}
      {type === "h1-light" && (
        <h1
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          className="h1-light"
          onClick={onClick}
        >
          {text}
        </h1>
      )}
      {type === "h2" && (
        <h2
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </h2>
      )}
      {type === "h3" && (
        <h3
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </h3>
      )}
      {type === "h4" && (
        <h4
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </h4>
      )}
      {type === "h5" && (
        <h5
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
        >
          {text}
        </h5>
      )}
      {type === "h6" && (
        <h6
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </h6>
      )}
      {type === "body" && (
        <p
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </p>
      )}
      {type === "subtext" && (
        <span
          className="sub-text"
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "subtext-bold" && (
        <span
          className="sub-text-bold"
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "button" && (
        <span
          className="button-text"
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "body-text-big" && (
        <span
          className="body-text-big"
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </span>
      )}
      {type === "h0" && (
        <h1
          className="h0"
          style={{
            color: `var(--${color})`,
            transform: `translateY(${offSet}px)`,
            cursor: onClick && "pointer",
          }}
          onClick={onClick}
        >
          {text}
        </h1>
      )}
    </>
  );
};

interface ITypography {
  text: string;
  type: TypographyType;
  color?: Colors;
  offSet?: number;
  onClick?: () => void;
}

type TypographyType =
  | "h0"
  | "h1"
  | "h1-light"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "subtext"
  | "subtext-bold"
  | "button"
  | "body-text-big";

export type Colors =
  | "white"
  | "white-50"
  | "white-75"
  | "black"
  | "black-30"
  | "neutral"
  | "mm-orange"
  | "mm-orange-secondary"
  | "gold"
  | "dark-green"
  | "light-green"
  | "blue"
  | "success"
  | "error"
  | "error-30";
export default Typography;
