"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.scss";
import events from "../../../../../public/images/events-icon.svg";
import user from "../../../../../public/images/user.svg";

const NavLink = ({ item }) => {
	const pathName = usePathname();

	return (
		<Link
			href={item.path}
			className={`${styles.container} ${
				pathName === item.path && styles.active
			} ${item.path === "/login" && styles.login}`}
		>
			{item.path === "/events" && (
				<div className={styles.imgContainer}>
					<Image
						src={events}
						alt="Logo"
						fill
						className={styles.img}
					/>
				</div>
			)}
			{item.path === "/login" && (
				<div className={styles.imgContainerLogin}>
					<Image src={user} alt="Logo" fill className={styles.img} />
				</div>
			)}
			{item.title}
		</Link>
	);
};

export default NavLink;
