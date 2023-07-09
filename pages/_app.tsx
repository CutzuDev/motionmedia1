import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00ccff" />
        <meta
          name="keywords"
          content="web development, website design, responsive websites, custom web development, e-commerce solutions, front-end development, back-end development, SEO optimization, mobile-friendly websites, user experience, web application development, CMS development, HTML, CSS, JavaScript, PHP, Python, Java, Ruby, WordPress, Drupal, Joomla, Magento, Shopify, SEO-friendly URLs, site speed optimization, cross-browser compatibility, website maintenance, website security, UI/UX design, graphic design"
        ></meta>
        <meta
          name="description"
          content="A Start-Up Company focused on providing the Best Quality websites on the market!"
        />
        <meta property="og:title" content="Motion Websites - Web Developing" />
        <meta
          property="og:description"
          content="A Start-Up Company focused on providing the Best Quality websites on the market!"
        />
        <meta property="og:site_name" content="Motion Websites" />
        <meta property="og:image" content="/assets/MMLOGO.webp" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <title>Motion Websites</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
