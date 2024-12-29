import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import img1 from "../assets/img/heavid.png";
import img2 from "../assets/img/ying.png";
import img3 from "../assets/img/mey.png";
import img4 from "../assets/img/fong.png";
let Blogpage = ({}) => {
  const { id } = useParams();
  const [seller, setSellers] = useState([]);
  const detail = [img1, img2, img3, img4];
  useEffect(() => {
    const fetchSellers = async () => {
      const response = await fetch("/saller.json");
      const data = await response.json();
      setSellers(data);
    };

    fetchSellers();
  }, []);
  // Find the product matching the id
  const sellerData = seller.find((item) => String(item.id) === id);

  console.log("this is product", sellerData);
  console.log("id", id);
  return (
    <>
      <main className="p-5 md:p-3 lg:p-0  gap-5 md:gap-3 max-w-screen-xl min-w-screen-80 mx-auto">
        {/* main content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* title */}
          <div className="flex justify-center items-center  h-16">
            <p className="font-kh">អំពី {seller[id - 1]?.name}</p>
          </div>
          {/* title */}
          <div className="flex justify-center items-center  h-16 bg-red-500 rounded-lg">
            <p className="font-kh"> សង្ខេប</p>
          </div>
          {/* pic */}
          <div className="flex items-center justify-center">
            {sellerData ? (
              <img
                src={detail[id - 1]}
                className="h-[200px] w-[200px] md:w-[400px] md:h-[400px] rounded-full  object-cover block opacity-50 hover:opacity-100 duration-700	"
                alt={seller[id - 1]?.name}
              />
            ) : (
              <p>No seller found</p>
            )}
          </div>
          {/* details */}
          <div className="flex flex-col  p-10 font-kh">
            <p className="line-clamp-5 md:line-clamp-none ">
              {seller[id - 1]?.description}
            </p>
            <span> 🔥 skills </span>
            <ul className="list-disc list-inside text-white  text-sm">
              {/* Display each service from the seller's services array */}
              {seller[id - 1]?.services?.map((service, index) => (
                <li key={index} className="hover:text-green-300 leading-8	">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          {/* blog */}
          <div>
            <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
              <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Latest Shirts
                  </h2>

                  <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore officia corporis quasi doloribus iure architecto
                    quae voluptatum beatae excepturi dolores.
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* blog */}
          <div>
            <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
              <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Latest Shirts
                  </h2>

                  <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore officia corporis quasi doloribus iure architecto
                    quae voluptatum beatae excepturi dolores.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blogpage;
