import React from "react";
import styles from "./ProductCard.module.scss";
import Image, { StaticImageData } from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import { BsCartPlus } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const ProductCard = ({ product, buttonText, onButtonClick, onCartClick }: IProductCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={product.imageUrl} alt={""} className={styles.image} fill objectFit="cover" />
      </div>
      <Typography text={product.name} type={"h2"} color="gold" />
      <Typography text={product.description} type={"body"} />

      <div className={styles.pillContainer}>
        {product.properties.split(",").map((prop) => (
          <div className={styles.pill}>
            <Typography text={prop} type={"subtext-bold"} color="gold" />
          </div>
        ))}
      </div>

      <div className={styles.price}>
        <Typography text={"Precio"} type={"h4"} color="white-75" />
        <Typography text={`$${product.price}`} type={"h3"} color="gold" />
      </div>

      <div className={styles.bottom}>
        <Button text={buttonText} type={"gold-s"} size={"small"} onClick={onButtonClick} />
        {buttonText !== "EDITAR" && (
          <div className={styles.addToCart} onClick={onCartClick}>
            <BsCartPlus className={styles.icon} />
          </div>
        )}
        {buttonText === "EDITAR" && (
          <div className={styles.addToCart} onClick={onCartClick}>
            <MdDeleteForever className={styles.icon} />
          </div>
        )}
      </div>
    </div>
);
};

interface IProductCardProps {
  product: IProduct;
  buttonText: string;
  onCartClick?: () => void;
  onButtonClick?: () => void;
}

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  longDescription: string;
  properties: string;
  quantity?: number;
  stock: number;
  imageUrl: string | StaticImageData;
}

export default ProductCard;
