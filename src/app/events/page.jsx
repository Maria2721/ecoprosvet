import Card from "@/components/card/Card";
import styles from "./events.module.scss";

const EventsPage = () => {
  return (
    <>
      <div className={styles.eventText}>
        <div className={styles.eventText1}>
          <p className={styles.eventText1_1}>Формат мероприятия </p>
          <button className={styles.eventText1_2}>Мастер-класс</button>
          <button className={styles.eventText1_3}>Лекция </button>
          <button className={styles.eventText1_4}>Конкурс </button>
          <button className={styles.eventText1_5}>Конкурс </button>
        </div>
        <div className={styles.eventText2}>
          <button className={styles.eventText2_1}>Мастер-класс</button>
          <button className={styles.eventText2_2}>Мастер-класс</button>
          <button className={styles.eventText2_3}>Мастер-класс</button>
          <button className={styles.eventText2_4}>Мастер-класс</button>
          <button className={styles.eventText2_5}>Мастер-класс</button>
          <button className={styles.eventText2_6}>Мастер-класс</button>
          <button className={styles.eventText2_7}>Мастер-класс</button>
          <button className={styles.eventText2_8}>Мастер-класс</button>
        </div>
        <div className={styles.eventText3}>
          <p className={styles.eventText3_1}>Где проходит</p>
          <button className={styles.eventText3_2}>Мастер-класс</button>
          <button className={styles.eventText3_3}>Мастер-класс</button>
          <button className={styles.eventText3_4}>Мастер-класс</button>
          <button className={styles.eventText3_5}>Мастер-класс</button>
          <button className={styles.eventText3_6}>Мастер-класс</button>
          <button className={styles.eventText3_7}>Мастер-класс</button>
        </div>
        <div className={styles.eventText4}>
          <p className={styles.eventText4_1}>Стоимость</p>
          <button className={styles.eventText4_2}>Бесплатные</button>
          <button className={styles.eventText4_3}>Платные</button>
          <button className={styles.eventText4_4}>Все</button>
        </div>
      </div>
      <p className={styles.mapName}>Подходящие мероприятия на карте </p>
      <div className={styles.mapContainer}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A33ef4a3e8a7ffcb5007e429f50179caeb07ac67a6e737e49b156da5ebdb296a8&amp;source=constructor"
          width="600"
          height="315"
          frameborder="0"
          className={styles.mapYandex}
        ></iframe>
      </div>
      <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className={styles.buttonMore}>Больше мероприятий</button>
    </>
  );
};

export default EventsPage;
