import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Dropbox from "../components/Dropbox";

const DropBox = () => {
  console.log("DropBox");

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Dropbox</h3>
      </div>
    </div>
  );
};

const SignupLink = () => (
  <Link href="/sign-up">
    <a className={styles.cardContent}>
      <img src="/icons/user-plus.svg" />
      <div>
        <h3>Sign up for an account</h3>
        <p>Sign up with dropbox to get started</p>
      </div>
      <div className={styles.arrow}>
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
);

// Main component using <SignedIn> & <SignedOut>.
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether or not a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>foldermark</h1>

    <div className={styles.cards}>
      <SignedIn>
        <div className={styles.card}>
          <h2>getting started</h2>
          <Dropbox />
        </div>
      </SignedIn>

      <SignedOut>
        <div className={styles.card}>
          <SignupLink />
        </div>
      </SignedOut>
    </div>
  </main>
);

// Footer component
const Footer = () => (
  <footer className={styles.footer}>
    Powered by{" "}
    <a href="https://clerk.dev?utm_source=github&utm_medium=starter_repos&utm_campaign=nextjs_starter" target="_blank">
      <img src="/clerk.svg" alt="Clerk.dev" className={styles.logo} />
    </a>
    +
    <a href="https://nextjs.org/" target="_blank" rel="noopener">
      <img src="/nextjs.svg" alt="Next.js" className={styles.logo} />
    </a>
  </footer>
);

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>foldermark</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Main />
    <Footer />
  </div>
);

export default Home;
