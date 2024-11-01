import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export let HomepageCardProduct = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/index.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      {product.slice(0, 4).map((product) => (
        <Link to={`/details/${product.id}`}>
          <div className="relative group cursor-pointer font-kh overflow-hidden duration-500  h-80 bg-rose-800   rounded-xl text-gray-50 p-5">
            <div className="">
              <div className="group-hover:scale-110 w-full h-60  duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute w-56 left-0 p-5 -bottom-10 duration-500 group-hover:-translate-y-12">
                <div className="absolute -z-10 left-0  h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                <span className="text-xl font-bold">អំពី!</span>
                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                  {product.name || "default"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
