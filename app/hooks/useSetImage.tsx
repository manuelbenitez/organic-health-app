import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";
import { RUST_TOKEN_CONTRACT_ADDRESS_V2 } from "../constants/verifiedAddresses.constants";
import {
  LUM_ADDRESS,
  SMR_ADDRESS,
  WBTC_ADDRESS,
  USDT_ADDRESS,
  PUNK_ADDRESS,
  DEEPR_ADDRESS,
  APE_ADDRESS,
  AUR_ADDRESS,
  AVAX_ADDRESS,
  BNB_ADDRESS,
  ETH_ADDRESS,
  FISH_ADDRESS,
  FTM_ADDRESS,
  FUSE_ADDRESS,
  IHG_ADDRESS,
  LOVE_ADDRESS,
  MATIC_ADDRESS,
  WIOTA_ADDRESS,
  WSOON_ADDRESS,
  USDC_ADDRESS,
  WEN_ADDRESS,
  PATHIN_ADDRESS,
  MLUM_ADDRESS,
  VOID_ADDRESS,
  RUST_NFT_POOL_ADDRESS,
  RUST_OG_POOL_ADDRESS,
  RUST_POOL_ADDRESS,
} from "../constants/verifiedAddresses.constants";

import rust from "../../public/assets/images/portfolio/rust.png";
import lum from "../../public/assets/images/portfolio/lum.png";
import smr from "../../public/assets/images/portfolio/smr.png";
import wbtc from "../../public/assets/images/portfolio/wbtc.png";
import usdt from "../../public/assets/images/portfolio/usdt.svg";
import punk from "../../public/assets/images/portfolio/punk.png";
import deepr from "../../public/assets/images/portfolio/deepr.png";
import ape from "../../public/assets/images/portfolio/apein.svg";
import aur from "../../public/assets/images/portfolio/aur.svg";
import avax from "../../public/assets/images/portfolio/avax.svg";
import bnb from "../../public/assets/images/portfolio/bnb.svg";
import eth from "../../public/assets/images/portfolio/eth.svg";
import fish from "../../public/assets/images/portfolio/fish.png";
import ftm from "../../public/assets/images/portfolio/ftm.svg";
import fuel from "../../public/assets/images/portfolio/fuel.png";
import ihg from "../../public/assets/images/portfolio/ihg.svg";
import love from "../../public/assets/images/portfolio/love.svg";
import matic from "../../public/assets/images/portfolio/matic.svg";
import siota from "../../public/assets/images/portfolio/siota.svg";
import ssoon from "../../public/assets/images/portfolio/ssoon.svg";
import usdc from "../../public/assets/images/portfolio/usdc.png";
import wen from "../../public/assets/images/portfolio/wen.png";
import pathin from "../../public/assets/images/portfolio/pathin.png";
import voidSVG from "../../public/assets/images/portfolio/void.svg";
import total from "../../public/assets/images/portfolio/total.png";

export const useSetImage = (address: string | undefined) => {
  const [src, setSrc] = useState<StaticImport | string>("");

  const setImage = () => {
    switch (address) {
      case RUST_TOKEN_CONTRACT_ADDRESS_V2:
        setSrc(rust);
        break;
      case RUST_OG_POOL_ADDRESS:
        setSrc(rust);
        break;
      case RUST_NFT_POOL_ADDRESS:
        setSrc(rust);
        break;
      case RUST_POOL_ADDRESS:
        setSrc(rust);
        break;
      case LUM_ADDRESS:
        setSrc(lum);
        break;
      case SMR_ADDRESS:
        setSrc(smr);
        break;
      case WBTC_ADDRESS:
        setSrc(wbtc);
        break;
      case USDT_ADDRESS:
        setSrc(usdt);
        break;
      case PUNK_ADDRESS:
        setSrc(punk);
        break;
      case DEEPR_ADDRESS:
        setSrc(deepr);
        break;
      case APE_ADDRESS:
        setSrc(ape);
        break;
      case AUR_ADDRESS:
        setSrc(aur);
        break;
      case AVAX_ADDRESS:
        setSrc(avax);
        break;
      case BNB_ADDRESS:
        setSrc(bnb);
        break;
      case ETH_ADDRESS:
        setSrc(eth);
        break;
      case FISH_ADDRESS:
        setSrc(fish);
        break;
      case FTM_ADDRESS:
        setSrc(ftm);
        break;
      case FUSE_ADDRESS:
        setSrc(fuel);
        break;
      case IHG_ADDRESS:
        setSrc(ihg);
        break;
      case LOVE_ADDRESS:
        setSrc(love);
        break;
      case MATIC_ADDRESS:
        setSrc(matic);
        break;
      case WIOTA_ADDRESS:
        setSrc(siota);
        break;
      case WSOON_ADDRESS:
        setSrc(ssoon);
        break;
      case USDC_ADDRESS:
        setSrc(usdc);
        break;
      case WEN_ADDRESS:
        setSrc(wen);
        break;
      case PATHIN_ADDRESS:
        setSrc(pathin);
        break;
      case VOID_ADDRESS:
        setSrc(voidSVG);
        break;
      case "total":
        setSrc(total);
        break;
      default:
        setSrc("");
    }
  };
  useEffect(() => {
    setImage();
  }, [address]);
  return {
    src,
  };
};
