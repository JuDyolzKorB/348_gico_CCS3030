
import Header from 'C:/Users/Jules/Desktop/PROJECTS/VSCODE/nextjs/my-next-app/components/Header';
import Footer from 'C:/Users/Jules/Desktop/PROJECTS/VSCODE/nextjs/my-next-app/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to My Next.js Site</h1>
        <p>This is a basic homepage built with reusable components.</p>
        <button>Get Started</button>
      </main>
      <Footer />
      <style jsx>{`
        main {
          padding: 2rem;
          text-align: center;
        }
        button {
          background-color: #0070f3;
          border: none;
          color: white;
          padding: 1rem 2rem;
          text-transform: uppercase;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
