import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardBox from "../components/Card/cardBox";
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
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 pt-10 gap-5">
        {products.map((product) => (
          <>
            <CardBox product={product} />
          </>
        ))}
      </div>
    </main>
  );
};
