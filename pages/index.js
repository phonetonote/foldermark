import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { withServerSideAuth } from "@clerk/nextjs/ssr";

export const getServerSideProps = withServerSideAuth();

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

const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>foldermark</h1>

    <div className={styles.cards}>
      <SignedIn>
        <div className={styles.card}>{/* if dropbox connected... */}</div>
      </SignedIn>

      <SignedOut>
        <div className={styles.card}>
          <SignupLink />
        </div>
      </SignedOut>
    </div>
  </main>
);

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
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Main />
    <Footer />
  </div>
);

export default Home;
