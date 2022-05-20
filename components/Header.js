import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.left}>
      <Link href="/">
        <a className={styles.logo}>
          <span className={styles.appName}>foldermark</span>
        </a>
      </Link>
    </div>
    <div className={styles.right}>
      <SignedOut>
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton userProfileURL="/user" afterSignOutAll="/" afterSignOutOneUrl="/" />
      </SignedIn>
    </div>
  </header>
);

export default Header;
