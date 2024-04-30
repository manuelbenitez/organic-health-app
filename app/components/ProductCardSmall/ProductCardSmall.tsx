import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./ProductCardSmall.module.scss";
import placeholder from "../../../public/assets/download.jpeg";
import { IProduct } from "../ProductCard/ProductCard";
import Image from "next/image";
import Typography from "../Typography/Typography";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const ProductCardSmall = ({ product, setTotal }: IProductCardSmallProps) => {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setTotal((prevState) => prevState + product.price * quantity);
  }, [quantity]);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={placeholder} alt={""} objectFit="cover" fill />
      </div>
      <div className={styles.info}>
        <Typography text={product.name} type={"body"} color="gold" />
        <Typography text={product.description} type={"subtext"} />

        <div className={styles.bottom}>
          <div className={styles.group}>
            <CiSquareMinus
              className={styles.icon}
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                  setTotal((prevState) => prevState - (product.price * quantity));
                }
              }}
            />
            <Typography text={quantity.toString()} type={"h6"} color="gold" />
            <CiSquarePlus
              className={styles.icon}
              onClick={() => {
                if (quantity < product.stock) {
                  setQuantity(quantity + 1);
                  setTotal((prevState) => prevState + (product.price * quantity));
                }
              }}
            />
          </div>

          <div className={styles.total}>
            <Typography text={"TOTAL: "} type={"body"} color="white-75" />
            <Typography text={`${product.quantity * product.price}`} type={"body"} color="gold" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProductCardSmallProps {
  product: IProduct;
  quantity: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}
export default ProductCardSmall;
