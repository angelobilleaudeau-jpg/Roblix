import "./globals.css";

export const metadata = {
  title: "Revival.NET",
  description: "Classic avatar catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
