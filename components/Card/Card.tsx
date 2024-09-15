import Image from "next/image";
import React, { useState } from "react";
import styles from "./card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";
export default function Card(props: {
  imgUrl: string;
  size: "large" | "medium" | "small";
  id?: string;
}) {
  const defaultImage =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const { imgUrl = "/static/cliffor.webp", size = "medium", id = 1 } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  const scale = id == "0" ? { scaleY: 1.1 } : { scale: 1.1 };
  const handleOnError = () => {
    console.log("Hi error");
    setImgSrc(defaultImage);
  };
  return (
    <div className={styles.container}>
      <motion.div
        whileHover={scale}
        className={cls(classMap[size], styles.imgMotionWrapper)}
      >
        <Image
          src={imgSrc}
          alt='image'
          priority={false}
          fill
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
}
