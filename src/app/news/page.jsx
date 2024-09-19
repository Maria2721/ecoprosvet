import CardNews from "@/components/cardNews/CardNews";
import styles from "./news.module.scss";

const NewsPage = () => {
  return (
    <>
      <p className={styles.backText}>Назад</p>
      <div className={styles.titleContainer}>
        <p className={styles.titleNews}>Новости</p>
      </div>
      <div className={styles.container}>
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <button className={styles.buttonMore}>Больше новостей</button>
      <div className={styles.moreNews}>
        <p className={styles.moreNewsText1}>
          Хотите получать больше <br /> новостей?
        </p>
        <p className={styles.moreNewsText2}>Подпишитесь на нашу рассылку!</p>
        <form action="/submit-email" method="POST" className={styles.form}>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Электронная почта"
            className={styles.email}
          ></input>
          <button type="submit" className={styles.submBtn}>
            Подписаться
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsPage;
