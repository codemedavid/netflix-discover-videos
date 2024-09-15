import React from "react";
import styles from "./section-cards.module.css";
import Card from "./Card";

type videos = {
  imgUrl: string;
  id?: string;
};
export default function SectionCards(props: {
  title: string;
  videos: Array<videos>;
  size: "large" | "medium" | "small";
}) {
  const { title, videos = [], size } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video) => {
          return (
            <Card
              key={video?.id}
              id={video?.id}
              imgUrl={video?.imgUrl}
              size={size}
            />
          );
        })}
      </div>
    </section>
  );
}
