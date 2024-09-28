import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import FABWhatsApp from "./components/fabComponents/FABWhatsApp";
import FABLocation from "./components/fabComponents/FABLocation";

export const metadata = {
  title: "Deal Magsil",
  description: "A professional Cement product Manufracture",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Navbar />
        <FABLocation />
        <FABWhatsApp />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
