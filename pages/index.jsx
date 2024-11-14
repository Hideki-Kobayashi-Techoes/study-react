import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { ExternalLinks } from "@/components/ExternalLinks";
import { useCallback, useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [count, setCount] = useState(1)
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(count => count + 1)
    }
  }, [count])

  useEffect(() => {
    document.body.style.backgroundColor = "lightBlue"
    return () => {
      document.body.style.backgroundColor = ""
    }
  }, [count])

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <Main page="index" />
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>ボタン</button>
      <Footer />
      <ExternalLinks />
    </div>
  );
}
