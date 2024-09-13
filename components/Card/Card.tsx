import Image from "next/image";
import React, { useState } from "react";
import styles from "./card.module.css";
export default function Card(props: {
  imgUrl: string;
  size: "large" | "medium" | "small";
}) {
  const defaultImage =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const { imgUrl = "/static/cliffor.webp", size = "medium" } = props;
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("Hi error");
    setImgSrc(defaultImage);
  };
  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          src={imgSrc}
          alt='image'
          priority={false}
          fill
          className={styles.cardImg}
          onError={handleOnError}
        />
      </div>
    </div>
  );
}
