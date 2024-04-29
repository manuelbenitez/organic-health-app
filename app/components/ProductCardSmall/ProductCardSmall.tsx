import React from "react";
import styles from "./ProductCardSmall.module.scss";
import placeholder from "../../../public/assets/download.jpeg";
import { IProduct } from "../ProductCard/ProductCard";
import Image from "next/image";
import Typography from "../Typography/Typography";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const ProductCardSmall = ({ product }: IProductCardSmallProps) => {
  const [quantity, setQuantity] = React.useState<number>(0);

  const STOCK = 10;

  const handleMinimumQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleMaximumQuantity = () => {
    if (quantity < STOCK) setQuantity(quantity + 1);
  };
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
            <CiSquareMinus className={styles.icon} onClick={handleMinimumQuantity} />
            <Typography text={quantity.toString()} type={"h6"} color="gold" />
            <CiSquarePlus className={styles.icon} onClick={handleMaximumQuantity} />
          </div>

          <div className={styles.total}>
            <Typography text={"TOTAL: "} type={"body"} color="white-75" />
            <Typography text={`${quantity * product.price}`} type={"body"} color="gold" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProductCardSmallProps {
  product: IProduct;
}
export default ProductCardSmall;
