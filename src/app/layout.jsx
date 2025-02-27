import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Logo from "../../public/Logo.svg";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex-grow flex items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
