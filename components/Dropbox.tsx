import styles from "../styles/Dropbox.module.css";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

const Dropbox = () => {
  const { user } = useUser();

  const hasDropbox = user && user.externalAccounts.length > 0;

  return (
    <div className={styles.dropbox}>{!hasDropbox && <div>please connect dropbox account to get started</div>}</div>
  );
};

export default Dropbox;
