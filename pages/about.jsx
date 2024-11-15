import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";

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

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter()
  const { text, array, handleChange, handleAdd } = useInputArray()
  useBgLightBlue()

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <Main page="index" />
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <Footer />
    </div>
  );
}
