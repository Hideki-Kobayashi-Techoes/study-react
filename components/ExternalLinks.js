const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn \u2192",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates/next.js?utm_source=next-site&utm_medium=navbar&utm_campaign=next_site_nav_templates",
    title: "Examples \u2192",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/home",
    title: "Deploy \u2192",
    description: "Instantly deploy your Next.js site to a public URL with vercel",
  },
]

export function ExternalLinks() {
  return (
    <div className="p-4 rounded grid grid-cols-2 gap-4 w-6/12">
      {ITEMS.map(item => {
        return (
          <a key={item.href} href={item.href} className="p-4 border rounded-lg hover:text-blue-500 hover:border-blue-500" target="_blank">
            <h3 className="text-2xl font-bold p-2 px-4">{item.title}</h3>
            <p className="p-2 px-4">{item.description}</p>
          </a>
        )
      })}
    </div>
  );
}
