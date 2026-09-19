import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">REVIVAL<span>.NET</span></div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
          <Link href="/profile">Profile</Link>
        </nav>

        <button className="login">Login</button>
      </header>

      <section className="hero">
        <div>
          <p className="era">2006 — 2019 ERA</p>

          <h1>
            Classic avatars.
            <br />
            <span>Your way.</span>
          </h1>

          <p className="description">
            Browse classic-era avatar items and build your own old-school
            avatar.
          </p>

          <Link href="/catalog" className="button">
            Browse Catalog →
          </Link>
        </div>

        <div className="avatar-card">
          <p>FEATURED AVATAR</p>

          <div className="avatar">
            <div className="head">☺</div>
            <div className="body"></div>

            <div className="legs">
              <div></div>
              <div></div>
            </div>
          </div>

          <strong>Classic Avatar</strong>
        </div>
      </section>

      <section className="categories">
        <h2>Browse Catalog</h2>

        <div className="grid">
          <Link href="/catalog?category=faces">
            <b>☺</b>
            <strong>Faces</strong>
            <small>Classic faces</small>
          </Link>

          <Link href="/catalog?category=hats">
            <b>♠</b>
            <strong>Hats</strong>
            <small>Classic hats</small>
          </Link>

          <Link href="/catalog?category=shirts">
            <b>▣</b>
            <strong>Shirts</strong>
            <small>Classic shirts</small>
          </Link>

          <Link href="/catalog?category=pants">
            <b>▤</b>
            <strong>Pants</strong>
            <small>Classic pants</small>
          </Link>
        </div>
      </section>

      <footer>
        REVIVAL.NET — Independent revival project
      </footer>
    </main>
  );
}
