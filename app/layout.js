import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tanmay Hirodkar - Web Developer Portfolio',
  description: 'Tanmay Hirodkar is a web developer specializing in MERN stack, AI technologies, SEO, and scalable web applications.',
  keywords: 'Tanmay Hirodkar, web developer, portfolio, MERN stack, AI, SEO, React, JavaScript, Next.js, portfolio website',
  author: 'Tanmay Hirodkar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />

       

      </head>
      <body className={`${inter.className} bg-[#121212] text-white`}>
        <main className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
