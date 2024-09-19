"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.scss";
import NavLink from "./navLink/navLink";
import searchIcon from "../../../../public/images/search.svg";

const links = [
	{
		title: "Новости",
		path: "/news",
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
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		setSearch(e.target.value);
		// Добавьте здесь логику поиска, например, запрос к API или фильтрацию данных
	};

	// TEMPORARY
	const session = false;
	const isAdmin = false;

	return (
		<div className={styles.container}>
			<div
				className={[styles.links, open && styles.mobileLinks].join(" ")}
			>
				<NavLink item={links[0]} key={links[0].title} />
				<NavLink item={links[1]} key={links[1].title} />
				<div className={styles.wrapper}>
					<label htmlFor="search" className={styles.label}>
						<div className={styles.imgContainer}>
							<Image
								src={searchIcon}
								alt="Logo"
								fill
								className={styles.img}
							/>
						</div>
					</label>
					<input
						type="text"
						id="search"
						placeholder="Найти мероприятие..."
						value={search}
						onChange={handleSearch}
						className={styles.input}
					/>
				</div>
				<NavLink item={links[2]} key={links[2].title} />
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
		</div>
	);
};

export default Links;
