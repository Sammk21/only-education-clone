import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <link rel="icon" href="/images/onlyEducation.svg" sizes="any"></link>
      </head>
      <body className={inter.className}>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
