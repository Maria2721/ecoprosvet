import Image from "next/image";
import styles from "./CardNews.module.scss";
import exhibition from "../../../public/images/exhibition.jpeg";
import arrow from "../../../public/images/arrow.svg";

const CardNews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contForImg}>
        <div className={[styles.imgContainerMain, styles.color].join(" ")}>
          <Image
            src={exhibition}
            alt="About Image"
            fill
            className={styles.imgMain}
          />
        </div>
      </div>
      <p className={styles.nameCard1}>Итоги форума</p>
      <p className={styles.nameCard2}> “Территория будущего”</p>
      <p className={styles.textNews}>
        Департамент природопользования подвел итоги форума-фестиваля «Территория
        будущего. Москва 2030» от 16 сентября
      </p>
      <p className={styles.dateCard}>Дата: 20.09.2024</p>
      <div className={styles.details}>
        <div className={[styles.imgContainerArrow, styles.color].join(" ")}>
          <Image
            src={arrow}
            alt="About Image"
            fill
            className={styles.imgArrow}
          />
        </div>
        <p className={styles.detailsText}>Подробнее</p>
      </div>
    </div>
  );
};

export default CardNews;
