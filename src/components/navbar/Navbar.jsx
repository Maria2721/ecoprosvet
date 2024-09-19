import Image from "next/image";
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.scss";
import logo from "../../../public/images/logo.svg";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Link href="/" className={styles.logo}>
				<div className={styles.imgContainer}>
					<Image src={logo} alt="Logo" fill className={styles.img} />
				</div>
			</Link>
			<div>
				<Links />
			</div>
		</div>
	);
};

export default Navbar;
