import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RecomendSlideBanner from "../components/Banner/RecomendBanner";
import NeedHelp from "../components/Card/NeedHelp";
import { HomepageCardProduct } from "../components/Card/HomepageCard";
import notFound from "../assets/img/notfound.png";
import {
  DetailCard1,
  DetailCardWhatOffer,
} from "../components/Card/DetailpageCard";
import { MediaComponentPrice } from "../components/Media/Media Components";
import { Artical1, ArticalUsage } from "../components/Artical/ArticalDetails";

const Detailspage = () => {
  const { id } = useParams(); // Retrieve id from URL params
  const titleOfProduct = "មុខទំនិញលក់ដាច់";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/index.json"); // Ensure the file path is correct
        const data = await response.json();
        setProducts(data); // Store the products
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Find the product matching the id
  const product = products.find((item) => String(item.id) === id);

  console.log("this is product", product);
  console.log("id", id);

  if (loading) {
    return <p>Loading...</p>; // Render a loading state while data is being fetched
  }

  if (!product) {
    return (
      <>
        <section className="flex justify-center items-center h-screen">
          <div className="flex  flex-col items-center justify-center">
            <img src={notFound} className="block h-24" alt="" />
            <p className="font-kh">មិនមានលទ្ទិផលក្នុងការស្វែងរកទេ.</p>
          </div>
        </section>
      </>
    ); // Render an error message if the product is not found
  }

  return (
    <main className="p-5 md:p-3 lg:p-0 bg-black gap-5 md:gap-3 max-w-screen-xl min-w-screen-80 mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 py-10 ">
        <DetailCard1 product={product} />
        <Artical1 product={product} />
        <DetailCardWhatOffer />
        <section className="w-full">
          <MediaComponentPrice product={product} />
        </section>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 py-10 md:gap-3 ">
        <ArticalUsage product={product} />
        <NeedHelp />
      </section>
      <section className="mt-10 mb-10 text-md font-bold md:text-2xl ">
        <p className="font-kh">{titleOfProduct}</p>
      </section>
      <section className="grid grid-1 gap-3 sm:grid-cols-2 md:gap-5 md:grid-cols-3 lg:grid-cols-4 mb-10">
        <HomepageCardProduct />
      </section>
      <RecomendSlideBanner product={product} />
    </main>
  );
};

export default Detailspage;
