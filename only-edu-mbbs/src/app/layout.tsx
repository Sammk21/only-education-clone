
export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
        <head>
        <link rel="icon" href="/images/onlyEducation.svg" sizes="any"></link>
      </head>
      <body>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
