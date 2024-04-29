import React, { useRef } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Typography from "../Typography/Typography";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../public/assets/iconCoda.svg";
import { useOutsideAlerter } from "../../hooks/useOutsideAlertes";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const ref = useRef(null);

  useOutsideAlerter(ref, () => setIsMenuOpen(false));

  return (
    <div className={styles.container}>
      <Image src={logo} alt={""} className={styles.logo} />
      <div className={styles.links}>
        <Typography text={"ORGANIC HEALTH FARMS"} type={"h1"} />
      </div>
      <RxHamburgerMenu className={styles.menu} onClick={() => setIsMenuOpen(true)} />

      {isMenuOpen && (
        <div className={styles.openMenu} ref={ref}>
          <Typography text={"Informacion de Productos"} type={"h2"} />
          <Typography text={"Blog"} type={"h2"} />
          <Typography text={"Contacto"} type={"h2"} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
