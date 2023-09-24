import { Rubik } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/NavBar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Next Helpdesk",
  description: "A helpdesk app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
