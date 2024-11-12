import Image from "next/image";

export function Headline(props) {  
  return (
    <>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="title">{props.page} page</h1>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Get started by editing {props.children} .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </>
  );
}
