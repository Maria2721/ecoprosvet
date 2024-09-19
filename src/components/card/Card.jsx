import Image from "next/image";
import styles from "./card.module.scss";
import exhibition from "../../../public/images/exhibition.jpeg";
import arrow from "../../../public/images/arrow.svg";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contForImg}>
        <div className={[styles.imgContainer, styles.color].join(" ")}>
          <Image
            src={exhibition}
            alt="About Image"
            fill
            className={styles.imgMain}
          />
        </div>
      </div>
      <p className={styles.nameCard1}>Мастер-класс “Учимся</p>
      <p className={styles.nameCard2}>рисовать деревья”</p>
      <p className={styles.dateCard}>20.09.2024</p>
      <div className={styles.place}>
        <p className={styles.place1}>Парк Культуры</p>
        <p class={styles.place2}>М. Парк Культуры</p>
      </div>
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
      <div className={styles.buttons}>
        <div className={styles.buttons1}>
          <a href="#" className={styles.buttonsLink}>
            Мастер-класс
          </a>
        </div>
        <div className={styles.buttons2}>
          <a href="#" className={styles.buttonsLink}>
            Для детей{" "}
          </a>
        </div>
        <div className={styles.buttons3}>
          <a href="#" className={styles.buttonsLink}>
            Центр{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
