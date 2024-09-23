import Head from "next/head";
import { useRouter } from "next/router";
import React, { BaseSyntheticEvent, useState } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";
export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleLoginWithEmail = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (email) {
      if (email === "jad@flix.com") router.push("/");
      else setMessage("Something went wrong...");
    } else {
      //show message to user
      setMessage("Please enter a valid email address");
    }
  };

  const handleOnChangeEmail = (e: BaseSyntheticEvent) => {
    setMessage("");
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dreflix Login</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link href={"/"} className={styles.logoLink}>
            <div className={styles.logoWrapper}>Dreflix</div>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign in</h1>
          <input
            type='email'
            placeholder='Enter email address'
            onChange={handleOnChangeEmail}
            className={styles.emailInput}
          />
          <p className={styles.userMsg}>{message}</p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
}
