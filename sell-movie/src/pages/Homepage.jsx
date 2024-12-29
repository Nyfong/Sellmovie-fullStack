import { Navbar } from "../components/navbar/Navbar";
import { HerobannerHomepage } from "../components/Banner/Herobanner";
import { WhyUs } from "../components/Section/WhyUs";
import { Category1 } from "../components/Category/Caregory";
import { HomepageCardProduct } from "../components/Card/HomepageCard";
import { Button1 } from "../components/Button/Button1";
import SlideBanner from "../components/Banner/SlideBanner";
let Homepage = () => {
  const titleOfProduct = "មុខទំនិញលក់ដាច់";
  const titleOfClickMore = "ចូលទៅកាន់";
  const url = "/prod";
  return (
    <>
      <HerobannerHomepage />

      <main className="p-5 md:p-3 lg:p-0  gap-5 md:gap-3 mt-10 max-w-screen-xl min-w-screen-80 mx-auto">
        <Category1 />
        <section className=" mt-10 ">
          <SlideBanner />
        </section>
        <section className="mt-10 mb-10 text-md font-bold md:text-2xl ">
          <p className="font-kh">{titleOfProduct}</p>
        </section>
        <section className="grid grid-1 gap-3 sm:grid-cols-2 md:gap-5 md:grid-cols-3 lg:grid-cols-4">
          <HomepageCardProduct />
        </section>
        <section className="mt-10 mb-10 flex gap-3 md:gap-5 justify-center items-center">
          <div>
            <p className="  text-md font-bold md:text-2xl font-kh">មើលទៀត</p>
          </div>
          <Button1 title={titleOfClickMore} url={url} />
        </section>

        <section className=" mt-10 ">
          <WhyUs />
        </section>
      </main>
    </>
  );
};
export default Homepage;
