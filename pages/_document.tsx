import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#00ccff" />
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
      <meta
        property="og:image"
        content="https://media.discordapp.net/attachments/857281682242273361/1045383698440257657/mmLogoDT.png"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <title>Motion Websites</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
