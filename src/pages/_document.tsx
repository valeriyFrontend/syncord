import { Head, Html, Main, NextScript } from "next/document";

import { fontClassName } from "../fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Syncord AI" />
      </Head>
      <body className={`${fontClassName} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
