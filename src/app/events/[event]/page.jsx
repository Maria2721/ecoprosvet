import Image from "next/image";
import styles from "./event.module.scss";
import clean_up from "../../../../public/images/clean-up.png";
import arrow_left from "../../../../public/images/arrow_left.png";
import calendar from "../../../../public/images/calendar.png";
import butterfly from "../../../../public/images/butterfly.svg";
import ellipsies from "../../../../public/images/ellipsies.svg";

const SingleEventPage = () => {
	return (
		<>
			<div className={styles.back}>
				<div className={styles.imgBack}>
					<Image
						src={arrow_left}
						alt="arrow left"
						fill
						className={styles.img}
					/>
				</div>
				Все мероприятия
			</div>
			<h1 className={styles.title}>
				Центр Чистой Природы 12-15 приглашает на арт-субботник "Чистая
				осень"
			</h1>
			<div className={styles.about}>
				<div className={styles.imgContainer}>
					<Image
						src={clean_up}
						alt="Saturday clean-up"
						fill
						className={styles.img}
					/>
				</div>
				<div className={styles.location}>
					<h2 className={styles.h2}>Когда</h2>
					<p className={styles.info}>28 сентября 2024г, 13:00</p>
					<h2 className={styles.h2}>Местоположение</h2>
					<p className={styles.info}>Томилинский лесопарк, Люберцы</p>
					<div className={styles.metro}>
						<div className={styles.metro_color}></div>м. Выхино
					</div>
				</div>
			</div>
			<div className={styles.description}>
				<div className={styles.title_description}>
					<div className={styles.imgButterfly}>
						<Image
							src={butterfly}
							alt="Butterfly"
							fill
							className={styles.img}
						/>
					</div>
					<h1 className={styles.title_ul}>Нас ждёт:</h1>
				</div>
				<ul className={styles.ul}>
					<li className={styles.li_odd}>разминка</li>
					<li className={styles.li_even}>субботник</li>
					<li className={styles.li_odd}>раздельный сбор</li>
					<li className={styles.li_even}>живые фото</li>
					<li className={styles.li_odd}>
						установка креативных табличек
					</li>
				</ul>
				<div className={styles.description_text}>
					Томилинский лесопарк расположен в Московской области (го
					Люберцы), это действительно прекрасное, живописное место,
					неподалеку расположен Волкушинский (Лыткаринский) карьер, но
					также рядом был построен жилищный комплекс, запущено
					строительство Южно-лыткаринской автодороги, поэтому
					увеличение количества людей приводит к тому, что лес
					загрязняется все больше и больше. Хочется, чтобы островок
					природы к юго-востоку от Москвы был сохранен и очищен.
					<br />
					<br />
					Готовы очищать природу с ЦЧП?{" "}
					<span className={styles.green_text}>Регистируйтесь</span> на
					мероприятие.
				</div>
				<button className={styles.btn}>Регистрация</button>
			</div>
			<div className={styles.calendar}>
				<div className={styles.imgCalendar}>
					<Image
						src={calendar}
						alt="Calendar"
						fill
						className={styles.img}
					/>
				</div>
				Добавить в календарь: iOS Google
			</div>
		</>
	);
};

export default SingleEventPage;
