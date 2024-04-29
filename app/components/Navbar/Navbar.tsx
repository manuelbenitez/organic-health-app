import React, { useRef } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Typography from "../Typography/Typography";
import { RxHamburgerMenu } from "react-icons/rx";
import { useOutsideAlerter } from "../../hooks/useOutsideAlertes";
import { IProduct } from "../ProductCard/ProductCard";
import { FaCannabis } from "react-icons/fa6";
import ohLogo from "../../../public/assets/oh-logo-white.png";
import ProductCardSmall from "../ProductCardSmall/ProductCardSmall";
import { useRouter } from "next/router";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  const ref = useRef(null);

  useOutsideAlerter(ref, () => setIsMenuOpen(false));

  const product: IProduct = {
    name: "Protector Solar",
    description: "La crema protectora solar más efectiva del mercado.",
    price: 1000,
    image: "",
  };
  return (
    <div className={styles.container}>
      <FaCannabis className={styles.logo} onClick={() => router.push("/")} />
      <div className={styles.logoContainer}>
        <Image src={ohLogo} alt="" objectFit="contain" fill />
      </div>
      <RxHamburgerMenu className={styles.menu} onClick={() => setIsMenuOpen(true)} />

      {isMenuOpen && (
        <div className={styles.openMenu} ref={ref}>
          <div className={styles.links}>
            <Typography text={"Informacion de Productos"} type={"h2"} />
            <Typography text={"Blog"} type={"h2"} />
            <Typography text={"Contacto"} type={"h2"} />
          </div>
          <div className={styles.cart}>
            <Typography text={"CARRITO DE COMPRAS"} type={"h4"} />
            <div className={styles.products}>
              <ProductCardSmall product={product} />
              <ProductCardSmall product={product} />
              <ProductCardSmall product={product} />
              <ProductCardSmall product={product} />
              <ProductCardSmall product={product} />
              <ProductCardSmall product={product} />
              <ProductCardSmall product={product} />
              <ProductCardSmall product={product} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
