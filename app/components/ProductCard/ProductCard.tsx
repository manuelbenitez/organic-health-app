import React from "react";
import styles from "./ProductCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={product.image} alt={""} className={styles.image} fill objectFit="cover" />
      </div>
      <Typography text={product.name} type={"h4"} />
      <Typography text={product.description} type={"body"} />

      <div className={styles.price}>
        <Typography text={"Precio:"} type={"h4"} />
        <Typography text={`$${product.price}`} type={"h3"} color="gold" />
      </div>

      <Button text={"Agregar al Carrito"} type={"gold"} size={"small"} />
    </div>
  );
};

interface IProductCardProps {
  product: IProduct;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string | StaticImageData;
}

export default ProductCard;
