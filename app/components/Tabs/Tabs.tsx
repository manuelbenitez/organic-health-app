import React from "react";
import styles from "./Tabs.module.scss";
import Typography from "../Typography/Typography";
const Tabs = ({ options, selected, setSelected }: ITabsProps) => {
  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => setSelected(index)}
          className={`${styles.tab} ${selected === index ? styles.selected : ""}`}
        >
          <Typography text={option} type={"body"} />
        </div>
      ))}
    </div>
  );
};

interface ITabsProps {
  options: string[];
  selected: number;
  setSelected: (num: number) => void;
}
export default Tabs;
