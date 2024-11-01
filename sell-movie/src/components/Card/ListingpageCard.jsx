import { MediaComponent, MediaComponentPrice } from "../Media/Media Components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "../../pages/testAxio";

const priceList = [
  {
    title: "បញ្ជារទិញ",
    description: "តម្លៃ 3.2$/month",
  },
];

export let ListingCard = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("index.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  console.log("this is product", product);
  return (
    <>
      {product.map((product) => (
        <>
          <div className="grid grid-cols-1 m-5 gap-3 lg:grid-cols-3 bg-transparent ">
            {/* images */}
            <Link to={`/details/${product.id}`}>
              <div className="md:px-2   relative     ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full  hover:scale-105 h-[250px] transition duration-150 ease-in-out object-cover rounded-lg"
                />
                <div className=" absolute top-0 text-center rounded-lg w-[100px] bg-slate-100">
                  <span className="text-black  font-kh">លំអិត </span>
                </div>
              </div>
            </Link>
            {/* description */}

            <MediaComponent
              title={product.name} // Accessing title based on index
              description={product.description} // Accessing description based on index
            />

            {/*price */}
            {priceList.map((el) => (
              <>
                <section className=" hidden md:flex  md:items-center md:justify-end lg:justify-center ">
                  <MediaComponentPrice
                    title={el.title}
                    description={product.price}
                  />
                </section>
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
};
