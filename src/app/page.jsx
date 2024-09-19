import styles from "./home.module.scss";

const Home = () => {
	return <div className="container">
		<div className={styles.hello}>
		<h1 className={styles.h1_title}>Крупнейший <span className={styles.green}>портал</span> о всех экологичных мероприятиях Москвы</h1>
		<div className={styles.buttons}>
			<button className={styles.greenButton}><b>Выбрать мероприятие</b></button>
			<button className={styles.blackButton}><b>Стать организатором</b></button>
		</div>
		<div className={styles.clouds}>
		<div className={styles.cloud}>Организуйте своё мероприятие</div>
		<div className={styles.cloud}>Выбирайте подходящие мероприятия</div>
		<div className={styles.cloud}>Будьте в курсе всех экомероприятий города</div>
		<div className={styles.cloud}>Получайте призы за экоактивность</div>
		<div className={styles.cloud}>Внесите свой вклад в экобудущее Москвы!</div>
		</div>
		</div>
		<section className={styles.about}>
			<h1 className={styles.h1_title}>Что такое ЭКОПРОСВЕТ?</h1>
			<div className={styles.description}>Экопросвет — это уникальная онлайн-платформа, объединяющая активных жителей и организаторов мероприятий экологической направленности города Москвы.<br /><br />

Мы разделяем ценности бережного отношения к природе и стремимся развивать экологическое движение г.Москва. С каждым годом интерес к экологии растёт, и наша цель — создать удобное пространство для освещения, поиска и мониторинга мероприятий экологической направленности. </div>
		<div className={styles.mission}><b><i>Наша миссия - повышать интерес к экоповестке среди москвичей</i></b></div>
		</section>
		<section className={styles.possibilities}>
		<h1 className={styles.h1_title}>На платформе посетители могут:</h1>
		<ul className={styles.ul}>
					<li className={styles.li_odd}>Найти интересное экомероприятие в подходящем местоположении и удовлетворяющее их запросам </li>
					<li className={styles.li_even}>Добавлять понравившиеся мероприятия в избранное</li>
					<li className={styles.li_odd}>Выставлять рейтинг мероприятиям</li>
					<li className={styles.li_even}>Классно провести время и выиграть призы за экоактивность</li>
				</ul>
		</section>
	</div>;
};

export default Home;
