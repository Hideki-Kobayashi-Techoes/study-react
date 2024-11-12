import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";

export function Main(props) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Headline page={props.page}>
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          page/{props.page}.js
        </code>
      </Headline>
      <Links />
    </main>
  );
}
