import Image from "next/image";
import styles from "./card.module.scss";
import about from "../../../public/images/about.png";

const Card = () => {
	return (
		<div className={styles.container}>
			Card
			<div className={[styles.imgContainer, styles.color].join(" ")}>
				<Image
					src={about}
					alt="About Image"
					fill
					className={styles.img}
				/>
			</div>
		</div>
	);
};

export default Card;
