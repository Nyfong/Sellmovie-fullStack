import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RecomendSlideBanner from "../components/Banner/RecomendBanner";
import NeedHelp from "../components/Card/NeedHelp";
import {
  DetailCard1,
  DetailCardWhatOffer,
} from "../components/Card/DetailpageCard";
import { MediaComponentPrice } from "../components/Media/Media Components";
import { Artical1, ArticalUsage } from "../components/Artical/ArticalDetails";
let Detailspage = () => {
  const { id } = useParams();
  const productId = parseInt(id, 12);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/index.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);
  let pro;
  const product = products[id - 1];
  console.log("this is product", product);
  console.log("id", id);
  console.log("id from convert", productId);

  return (
    <>
      <main className="p-5 md:p-3 lg:p-0 bg-black  gap-5 md:gap-3  max-w-screen-xl min-w-screen-80 mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 py-10 ">
          <DetailCard1 product={product} />
          <Artical1 product={product} />
          <DetailCardWhatOffer />
          <section className="w-full">
            <MediaComponentPrice product={product} />
          </section>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 py-10 md:gap-3 ">
          <ArticalUsage />
          <NeedHelp />
        </section>
        <RecomendSlideBanner product={product} />
      </main>
    </>
  );
};
export default Detailspage;
