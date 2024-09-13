import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";
import styles from "./navBar.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
export default function NavBar(props: { username: string }) {
  const { username } = props;
  const router = useRouter();
  const handleOnClikHome = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickList = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={"/"} className={styles.logoLink}>
          <div className={styles.logoWrapper}>Dreflix</div>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClikHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleDropdown}>
              <p className={styles.username}>{username}</p>
              <Image
                src={"/static/expand-more.svg"}
                alt=''
                width={20}
                height={20}
              />
              {/* Expand More icon */}
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href='/login' className={styles.linkName}>
                    Sign out
                    <div className={styles.lineWrapper}></div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
