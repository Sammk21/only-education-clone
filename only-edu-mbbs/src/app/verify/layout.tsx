export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col  h-screen w-screen justify-center items-center">
          <p className="text-center mb-16 font-medium text-red-500">
            Please dont refresh or go back
          </p>
          {children}
        </main>
      </body>
    </html>
  );
}
