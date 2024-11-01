import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// src/components/Products.js
import SlideProd from "../components/Banner/SlideBarProd";
export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/index.json");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main className="p-5 md:p-3 lg:p-0 bg-black  gap-5 md:gap-3 bg-black  max-w-screen-xl min-w-screen-80 mx-auto py-10">
      <SlideProd />
      <div className="grid  grid-cols-1 md:grid-cols-4 pt-10 gap-5">
        {products.map((product) => (
          <>
            <div className="  group relative block overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />

              <div className="relative border border-gray-100 bg-white p-6 font-kh">
                <p className="text-gray-700">
                  ${product.price}.00
                  {/* <span className="text-gray-400 line-through">$5.5</span> */}
                </p>

                <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>

                {/* <p className="mt-1.5 line-clamp-3 text-gray-700">
                  {product.description}
                </p> */}

                <form className="mt-4 flex gap-4">
                  <Link to={`/details/${product.id}`}>
                    <button
                      type="button"
                      className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                    >
                      Buy Now
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
};
