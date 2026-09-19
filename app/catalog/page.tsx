import Link from "next/link";

const items = [
  {
    id: 74891470,
    name: "Frozen Horns of the Frigid Planes",
    type: "Hat",
    image:
      "https://www.roblox.com/asset-thumbnail/image?assetId=74891470&width=420&height=420&format=png",
    link: "https://www.roblox.com/catalog/74891470/Frozen-Horns-of-the-Frigid-Planes",
  },
  {
    id: 215718515,
    name: "Fiery Horns of the Netherworld",
    type: "Hat",
    image:
      "https://www.roblox.com/asset-thumbnail/image?assetId=215718515&width=420&height=420&format=png",
    link:
      "https://www.roblox.com/catalog/215718515/Fiery-Horns-of-the-Netherworld",
  },
];

const bundles = [
  {
    id: 374653,
    name: "Headless Horseman",
    type: "Official Roblox Bundle",
    image:
      "https://tr.rbxcdn.com/30DAY-Avatar-BD0A8F0A7B7C6B6F4D7F3A8E8E5B8B8B-Png/420/420/Avatar/Png/noFilter",
    link: "https://www.roblox.com/bundles/374653/Headless-Horseman",
  },
];

export default function Catalog() {
  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">
          REVIVAL<span>.NET</span>
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/profile">Profile</Link>
        </nav>
      </header>

      <section className="catalog">
        <p className="era">OFFICIAL ROBLOX CATALOG</p>

        <h1>Classic Items</h1>

        <p className="description">
          Official Roblox catalog items and bundles.
        </p>

        <div className="items">
          {items.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="item"
              key={item.id}
            >
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <strong>{item.name}</strong>

              <small>{item.type}</small>

              <span className="view-item">
                View on Roblox →
              </span>
            </a>
          ))}
        </div>

        <h2 className="catalog-heading">Official Bundles</h2>

        <div className="items">
          {bundles.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="item"
              key={item.id}
            >
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <strong>{item.name}</strong>

              <small>{item.type}</small>

              <span className="view-item">
                View on Roblox →
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
