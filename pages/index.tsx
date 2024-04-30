import Image from "next/image";
import styles from "../styles/pages/home.module.scss";
import Typography from "@/components/Typography/Typography";
import BasePage from "@/components/BasePage/BasePage";
import BaseSection from "@/components/BaseSection/BaseSection";
import ProductCard, { IProduct } from "@/components/ProductCard/ProductCard";
import placeholder from "../public/assets/download.jpeg";

export default function Home() {
  const product: IProduct = {
    uid: '1',
    name: "Protector Solar",
    description: "La crema protectora solar más efectiva del mercado.",
    price: 1000,
    image: placeholder,
    quantity: 0,
    stock: 0,
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
      <BaseSection lightBg>
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
