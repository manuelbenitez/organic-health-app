import React from "react";
import styles from "./BaseSection.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const BaseSection = ({ children, lightBg }: IBaseSectionProps) => {
  const className = cx({
    baseSection: true,
    lightBg: lightBg,
  });
  return <div className={className}>{children}</div>;
};

interface IBaseSectionProps {
  children: React.ReactNode;
  lightBg?: boolean;
}

export default BaseSection;
