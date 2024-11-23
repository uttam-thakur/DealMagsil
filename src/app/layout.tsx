import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import FABWhatsApp from "./components/fabComponents/FABWhatsApp";
import FABLocation from "./components/fabComponents/FABLocation";
import SEO from "./components/SEO";

export const metadata = {
  title: "Deal Magsil",
  description: "A professional Cement product Manufracture",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ backgroundColor: " rgb(244, 242, 242)" }}>
        <SEO
          title="Cement Products Manufacturing | Slabs, Tiles, Fencing, Pipes"
          description="Deal Magsil specializes in high-quality cement products including precast slabs, fencing pillars, roofing tiles, RCC pipes, and more for industrial and commercial use."
          keywords="Asansol cement product, durgapur cement product, cement products, precast concrete, roofing tiles, fencing pillars, RCC pipes, cement slabs, concrete blocks, precast construction materials, precast housing solutions, high-quality concrete, tiles"
          author="Deal Magsil"
          canonical="https://yourwebsite.com"
          ogTitle="Cement Products Manufacturing | Slabs, Tiles, Fencing, Pipes"
          ogDescription="Deal Magsil provides high-quality cement products for industrial and commercial use. Learn more about our slabs, tiles, fencing, and more."
          ogImage="/images/dmlogo1.png"
          ogUrl="./app/favicon.ico"
          twitterTitle="Cement Products Manufacturing | Slabs, Tiles, Fencing, Pipes"
          twitterDescription="Find out about high-quality cement products from Deal Magsil, including slabs, tiles, RCC pipes, and more."
          twitterImage="https://cdn.pixabay.com/photo/2017/08/10/07/51/construction-2619702_1280.jpg"
        />
        <main>{children}</main>
        <div className="application-portal" id={"portalRoot"}></div>
        <Navbar />
        <FABLocation />
        <FABWhatsApp />
        <div style={{ marginTop: "-145px" }}>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
