import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export let DetailCard1 = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not available
  }

  return (
    <>
      <article className="rounded-xl border-2 border-gray-100 bg-white overflow-hidden">
        <div>
          <div>
            <img
              src={product.image} // Use the image from the product prop
              className="w-full h-[170px] md:h-[300px] object-cover"
              alt={product.name} // Better alt text for accessibility
            />
          </div>
        </div>
        <div className="flex justify-end">
          <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>

            <span className="text-[10px] sm:text-xs font-kh">
              លក់ដាច់! {product.name} {/* Use product.name directly */}
            </span>
          </strong>
        </div>
      </article>
    </>
  );
};

export let DetailCardWhatOffer = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-5 md:gap-2 font-kh w-full  md:pt-5  p-4 sm:p-6 lg:p-8 ">
        {/* what offer Title */}
        <div className="flex items-center">
          <span className="font-bold text-2xl  ">ការផ្តល់ជូន</span>
        </div>
        {/* what offers */}
        <div className="grid grid-cols-2 gap-5 md:gap-2">
          {/* one */}
          <div className="flex gap-3 items-center">
            <i class="fa-regular fa-star  items-center"></i>
            <span>គុណភាព, ទំនុកចិត្ត, ១០០ភាគរយ</span>
          </div>
          {/* two */}
          <div className="flex gap-3 items-center">
            <i class="fa-brands fa-telegram"></i>
            <span>មានការជួយ support ពីអ្នកលក់</span>
          </div>
          {/* one */}
          <div className="flex gap-3 items-center">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>មានតម្លៃសមរម្យ</span>
          </div>
          {/* one */}
          <div className="flex gap-3 items-center">
            <i class="fa-solid fa-user"></i>
            <span>អ្នកលក់រួសរាយ</span>
          </div>
        </div>
      </section>
    </>
  );
};
