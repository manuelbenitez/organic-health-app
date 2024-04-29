import Image from "next/image";
import styles from "../styles/pages/home.module.scss";
import Typography from "@/components/Typography/Typography";
import BasePage from "@/components/BasePage/BasePage";
import BaseSection from "@/components/BaseSection/BaseSection";
import ProductCard, { IProduct } from "@/components/ProductCard/ProductCard";
import placeholder from "../public/assets/image_placeholder.svg";

export default function Home() {
  const product: IProduct = {
    name: "Protector Solar",
    description: "La crema protectora solar más efectiva del mercado.",
    price: 1000,
    image: placeholder,
  };
  return (
    <BasePage backgroundColor={"--black-s"}>
      <BaseSection>
        <video
          src="https://cdn.shopify.com/videos/c/o/v/d43e41edd4a948758470c42c628e8465.mp4"
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
        ></video>
      </BaseSection>
      <BaseSection>
        <Typography text={"Productos"} type={"h1"} />
        <div className={styles.productGrid}>
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </BaseSection>
    </BasePage>
  );
}
