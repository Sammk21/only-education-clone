import "@/styles/globals.css";
export default function VerifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
}
