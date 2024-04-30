import React, { useRef, useState } from "react";
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
import Button from "../Button/Button";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [total, setTotal] = useState<number>(0);

  const router = useRouter();

  const ref = useRef(null);

  useOutsideAlerter(ref, () => setIsMenuOpen(false));

  const product: IProduct = {
    uid: "1",
    name: "Protector Solar",
    description: "La crema protectora solar más efectiva del mercado.",
    price: 1000,
    image: "",
    quantity: 0,
    stock: 10,
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
              <ProductCardSmall product={product} setTotal={setTotal} quantity={0} />
              <ProductCardSmall product={product} setTotal={setTotal} quantity={0} />
              <ProductCardSmall product={product} setTotal={setTotal} quantity={0} />
              <ProductCardSmall product={product} setTotal={setTotal} quantity={0} />
              <ProductCardSmall product={product} setTotal={setTotal} quantity={0} />
            </div>
            <div className={styles.total}>
              <Typography text={"TOTAL"} type={"h4"} />
              <Typography text={`$${total}`} type={"h4"} color="gold" />
            </div>

            <div className={styles.buttons}>
              <Button text={"VACIAR CARRITO"} type={"gold-s"} size={"small"} />
              <Button text={"CHECKOUT"} type={"gold"} size={"small"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
