export function ExternalLinks({ items }) {
  return (
    <div className="p-4 rounded grid grid-cols-2 gap-4 w-6/12">
      {items.map(item => {
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
