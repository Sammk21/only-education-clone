import { Karla } from "next/font/google";

const karla = Karla({ subsets: ['latin'] , preload:true})
 

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


// ../fonts/karla/static/Karla-VariableFont_wght.ttf