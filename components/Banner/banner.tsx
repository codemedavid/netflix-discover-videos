import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
export default function Banner(props: {
  title: string;
  subTitle: string;
  imgUrl: string;
}) {
  const { title, subTitle, imgUrl } = props;
  const handleOnPlay = () => {
    console.log("Handle on play");
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button onClick={handleOnPlay} className={`${styles.btnWithIcon}`}>
              <Image
                src='/static/play.svg'
                alt='play icon'
                width={32}
                height={32}
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
}
