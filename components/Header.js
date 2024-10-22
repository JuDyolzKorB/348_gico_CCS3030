import Link from 'http://localhost:3001/';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        header {
          background-color: #333;
          padding: 1rem;
        }
        nav ul {
          display: flex;
          list-style: none;
          justify-content: space-around;
        }
        nav ul li a {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
        }
      `}</style>
    </header>
  );
}
