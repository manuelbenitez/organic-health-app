import Image from "next/image";
import styles from "../styles/pages/home.module.scss";
import Typography from "@/components/Typography/Typography";
import BasePage from "@/components/BasePage/BasePage";
import BaseSection from "@/components/BaseSection/BaseSection";

export default function Home() {
  return (
    <BasePage backgroundColor={"--black-s"}>
      <BaseSection>
        <Typography text={"THIS IS A TEST"} type={"h1"} />
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
      </BaseSection>
    </BasePage>
  );
}
