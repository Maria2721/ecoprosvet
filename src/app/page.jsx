import styles from "./home.module.scss";

const Home = () => {
	return <div className="container">
		<h1 className={styles.h1_title}>Крупнейший портал о всех экологичных мероприятиях Москвв</h1>
		<div className={styles.buttons}>
			<button className={styles.greenButton}>Выбрать мероприятие</button>
			<button className={styles.blackButton}>Стать организатором</button>
		</div>
	</div>;
};

export default Home;
