import Image from "next/image";
import styles from "./about.module.scss";
import about from "../../../public/images/about.png";

const AboutPage = () => {
	return (
		<div className={styles.container}>
			AboutPage
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

export default AboutPage;
