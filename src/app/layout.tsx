import "@flaticon/flaticon-uicons/css/all/all.css";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
