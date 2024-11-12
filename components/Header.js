import Link from "next/link";
import styles from "@/styles/header.module.css"

export function Header() {
  return (
      <header className={styles.header}>
        <Link href="/" className={`${styles.anchor} hover:underline hover:underline-offset-4`}>
            Index
        </Link>
        <Link href="/about" className={`${styles.anchor} hover:underline hover:underline-offset-4`}>
            About
        </Link>
      </header>
  );
}
