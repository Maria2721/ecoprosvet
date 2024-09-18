"use client";

import { useState } from "react";
import styles from "./links.module.scss";
import NavLink from "./navLink/navLink";

const links = [
	{
		title: "Главная",
		path: "/",
	},
	{
		title: "Мероприятия",
		path: "/events",
	},
	{
		title: "Контакты",
		path: "/contact",
	},
];

const Links = () => {
	const [open, setOpen] = useState();

	// TEMPORARY
	const session = false;
	const isAdmin = false;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink item={link} key={link.title} />
				))}
				{session ? (
					<>
						{isAdmin && (
							<NavLink
								item={{ title: "Admin", path: "/admin" }}
							/>
						)}
						<button className={styles.logout}>Выйти</button>
					</>
				) : (
					<NavLink item={{ title: "Войти", path: "/login" }} />
				)}
			</div>
			<button
				className={styles.menuButton}
				onClick={() => setOpen((prev) => !prev)}
			>
				Menu
			</button>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink item={link} key={link.title} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
