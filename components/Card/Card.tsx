import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
export default function Card(props: {
  imgUrl: string;
  size: "large" | "medium" | "small";
}) {
  const { imgUrl, size } = props;

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  return (
    <div>
      Card
      <Image src={imgUrl} alt='image' height={300} width={300} />
    </div>
  );
}
