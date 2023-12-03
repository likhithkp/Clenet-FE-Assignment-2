import Navbar from "@/components/Navbar";
import OptionBar from "@/components/OptionBar";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clenet FE Assignment 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={inter.className}>
        <OptionBar/>
        <Navbar/>
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}
