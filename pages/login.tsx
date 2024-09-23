import Head from "next/head";
import { useRouter } from "next/router";
import React, { BaseSyntheticEvent, useState } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { magic } from "@/lib/magic.client";
import { Magic } from "magic-sdk";
export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginWithEmail = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (email) {
      try {
        setIsLoading(true);
        const didToken = await (magic as Magic).auth.loginWithMagicLink({
          email,
        });
        console.log({ didToken });
        if (didToken) {
          setIsLoading(false);
          router.push("/");
        }
      } catch (err) {
        // Handle errors if required!
        console.log("Something went wrong", err);
        setIsLoading(false);
      }
      // if (email === "jad@flix.com") router.push("/");
      // else setMessage("Something went wrong...");
    } else {
      //show message to user
      setMessage("Please enter a valid email address");
      setIsLoading(false);
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
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </main>
    </div>
  );
}
