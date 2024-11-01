import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../Footer/Footer";
import ScrollToTop from "../Scroll/TopNavigate";
export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* bg-black */}
      <main className=" bg-black text-white ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
