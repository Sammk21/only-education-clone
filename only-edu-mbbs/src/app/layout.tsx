import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  preload: true,
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <link rel="icon" href="/images/onlyEducation.svg" sizes="any"></link>
      </head>
      <body className={karla.className}>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
