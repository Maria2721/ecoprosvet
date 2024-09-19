import styles from "./home.module.scss";
import quotes from "../../public/images/quotes.svg";

const Home = () => {
	return <div className="container">
		<div className={styles.hello}>
		<h1 className={styles.h1_title_main}>Крупнейший <span className={styles.green}>портал</span> о всех экологичных мероприятиях Москвы</h1>
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
		<div className={styles.mission}>
				
			<b><i>Наша миссия - повышать интерес к экоповестке среди москвичей</i></b></div>
		</section>
		<section className={styles.possibilities}>
		<h1 className={styles.h1_title}>На платформе посетители могут:</h1>
				<ul className={styles.ul}>
					<li className={styles.li_odd}>Найти интересное экомероприятие в подходящем местоположении и удовлетворяющее их запросам </li>
					<li className={styles.li_even}>Добавлять понравившиеся мероприятия в избранное</li>
					<li className={styles.li_odd}>Выставлять рейтинг мероприятиям</li>
					<li className={styles.li_even}>Классно провести время и выиграть призы за экоактивность</li>
				</ul>
				
				
				<section className={styles.gifts}>
				Наши партнёры поддерживают экологические инициативы и предлагают подарки самым активным участникам мероприятий
				</section>

				<h1 className={styles.h1_title}>Возможности для организаторов</h1>
				<ul className={styles.ul}>
					<li className={styles.li_odd}>Предложить своё мероприятие и привлесь на него много участников</li>
					<li className={styles.li_even}>Отслеживать, какие мероприятия интересны москвичам </li>
					<li className={styles.li_odd}>Внести свой вклад в экологичное будущее Москвы</li>
				</ul>
		</section>
		<section className={styles.about_2}>
		На территории города Москвы реализуется множество экологических проектов, каждый из которых вносит вклад в сохранение окружающей среды и просвещение людей о бережном отношении к природе. По исследованиям Департамента природопользования и охраны окружающей среды города Москвы, запрос горожан на благоприятную и экологичную среду стремительно растёт. <br /><br />
		<span className={styles.green}>Экопросвет</span> — не только афиша, но и важный источник данных для разработки стратегии экологического развития города. Посети мероприятие и сделай Москву зеленее уже сейчас!
		</section>
	</div>;
};

export default Home;
