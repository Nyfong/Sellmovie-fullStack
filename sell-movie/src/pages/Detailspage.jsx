import {
  DetailCard1,
  DetailCardWhatOffer,
} from "../components/Card/DetailpageCard";
import { MediaComponentPrice } from "../components/Media/Media Components";
import { Artical1, ArticalUsage } from "../components/Artical/ArticalDetails";
let Detailspage = () => {
  return (
    <>
      <main className="p-5 md:p-3 lg:p-0 bg-black  gap-5 md:gap-3  max-w-screen-xl min-w-screen-80 mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 py-10 ">
          <DetailCard1 />
          <Artical1 />

          <DetailCardWhatOffer />
          <section className="w-full">
            <MediaComponentPrice />
          </section>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 py-10 md:gap-3 ">
          <ArticalUsage />
        </section>
      </main>
    </>
  );
};
export default Detailspage;
