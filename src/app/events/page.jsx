import Card from "@/components/card/Card";
import styles from "./events.module.scss";
import { getEvents } from "@/lib/data";

const EventsPage = async () => {
	const events = await getEvents();

	return (
		<div className={styles.container}>
			EventsPage
			{events.map((event) => (
				<Card event={event} key={event.id} />
			))}
		</div>
	);
};

export default EventsPage;
