import React from "react";
import { IProduct } from "../ProductCard/ProductCard";

const ProductItem = ({product}: IProductItemProps) => {
  return <div>ProductItem</div>;
};

interface IProductItemProps {
  product: IProduct;
}

export default ProductItem;
