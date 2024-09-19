import CardNews from "@/components/cardNews/CardNews";
import styles from "./news.module.scss";

const NewsPage = () => {
	return (
		<div className="container">
			<h3 className={styles.title}>NewsPage</h3>
			<CardNews />
		</div>
	);
};

export default NewsPage;
