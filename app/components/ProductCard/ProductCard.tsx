import React from "react";
import styles from "./ProductCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={product.image} alt={""} className={styles.image} fill objectFit="cover" />
      </div>
      <Typography text={product.name} type={"h2"} color="gold" />
      <Typography text={product.description} type={"body"} />

      <div className={styles.pillContainer}>
        <div className={styles.pill}>
          <Typography text={"FPS 38-40"} type={"subtext-bold"} color="gold" />
        </div>
        <div className={styles.pill}>
          <Typography text={"50cc"} type={"subtext-bold"} color="gold" />
        </div>
      </div>

      <div className={styles.price}>
        <Typography text={"Precio"} type={"h4"} color="white-75" />
        <Typography text={`$${product.price}`} type={"h3"} color="gold" />
      </div>

      <div className={styles.bottom}>
        <Button text={"VER DETALLES"} type={"gold-s"} size={"small"} />
        <div className={styles.addToCart}>
          <BsCartPlus className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

interface IProductCardProps {
  product: IProduct;
}

export interface IProduct {
  uid: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  stock: number;
  image: string | StaticImageData;
}

export default ProductCard;
