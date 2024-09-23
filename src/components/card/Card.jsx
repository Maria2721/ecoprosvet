import Image from "next/image";
import styles from "./card.module.scss";
import exhibition from "../../../public/images/exhibition.jpeg";
import arrow from "../../../public/images/arrow.svg";

const Card = ({ curevent }) => {
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
			<p className={styles.nameCard1}>{curevent.event}</p>
			<p className={styles.dateCard}>{curevent.date}</p>
			<div className={styles.place}>{curevent.location}</div>
			<div className={styles.details}>
				<div
					className={[styles.imgContainerArrow, styles.color].join(
						" "
					)}
				>
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
				{curevent.filters.map((filter) => (
					<div className={styles.buttons1}>
						<a href="#" className={styles.buttonsLink}>
							{filter}
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
