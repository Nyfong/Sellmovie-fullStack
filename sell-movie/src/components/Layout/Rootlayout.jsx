import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../Footer/Footer";
export default function RootLayout() {
  return (
    <>
      <Navbar />
      {/* bg-black */}
      <main className=" bg-black text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
