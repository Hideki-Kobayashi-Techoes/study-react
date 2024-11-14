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
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true)

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(count => count + 1)
    }
  }, [count])

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください")
      return
    }
    setText(e.target.value.trim())
  }, [])

  const handleDisplay = useCallback(() => {
    setIsShow(isShow => !isShow)
  }, [])

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
      <input type="text" value={text} onChange={handleChange}/>
      {isShow ? <h1>{count}</h1> : null}
      <button href="/about" onClick={handleClick}>ボタン</button>
      <button href="/about" onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <Footer />
      <ExternalLinks />
    </div>
  );
}
