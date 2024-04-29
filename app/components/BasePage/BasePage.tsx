import React from "react";
import styles from "./BasePage.module.scss";
import classNames from "classnames/bind";
const BasePage = ({ children, backgroundColor, noPadding }: IPageProps) => {
  const cx = classNames.bind(styles);

  const className = cx({
    basePage: true,
    noPadding: noPadding,
  });
  return (
    <div className={className} style={{ backgroundColor: `var(${backgroundColor})` }}>
      {children}
    </div>
  );
};

interface IPageProps {
  children: React.ReactNode;
  backgroundColor: string;
  noPadding?: boolean;
}
export default BasePage;
