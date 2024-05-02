import React from "react";
import styles from "./Input.module.scss";
import Typography from "../Typography/Typography";
const Input = ({ label, value, setValue, id, textArea }: InputProps) => {
  return (
    <div className={styles.container}>
      <div style={{ paddingLeft: "20px" }}>
        <Typography text={label} type={"subtext"} />
      </div>
      {textArea && (
        <textarea id={id} value={value} onChange={setValue} className={styles.textarea} />
      )}
      {!textArea && <input id={id} value={value} onChange={setValue} className={styles.input} />}
    </div>
  );
};

interface InputProps {
  label: string;
  value: string | number;
  id: string;
  setValue: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  textArea?: boolean;
}
export default Input;
