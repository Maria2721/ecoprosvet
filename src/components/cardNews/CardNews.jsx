import Image from "next/image";
import styles from "./CardNews.module.scss";
import about from "../../../public/images/about.png";

const CardNews = () => {
	return (
		<div className={styles.container}>
			CardNews
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

export default CardNews;
