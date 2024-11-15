import Link from "next/link";
import styles from "@/components/Header/Header.module.css"

const NAV_ITEMS = [
  {href: "/", label: "Index"},
  {href: "/about", label: "About"},
]

export function Header() {
  return (
      <header className={styles.header}>
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href} className={`${styles.anchor} hover:underline hover:underline-offset-4`}>
              {item.label}
            </Link>
          )
        })}
      </header>
  );
}
