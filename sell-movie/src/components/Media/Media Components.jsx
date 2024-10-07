export let MediaComponent = ({ title, description }) => {
  return (
    <>
      <div className="p-3 flex flex-row-reverse items-center font-kh md:gap-4 bg-white rounded-lg ">
        <div>
          <div className="hidden md:flex md:flex-col">
            <h3 className="text-lg/tight  font-bold text-gray-900 ">
              {title || "Title goes here"}
            </h3>
            <hr />
            <p className="mt-0.5 text-gray-700 line-clamp-3 md:line-clamp-none">
              {description ||
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio nesciunt quas non animi."}
            </p>
          </div>
          <div className="flex justify-between items-center mt-5 md:hidden ">
            <div>
              <Link to="https://www.facebook.com/Davidinthemood?mibextid=LQQJ4d">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9674/9674659.png"
                  alt=""
                  className="size-10 md:size-20 rounded-lg object-cover"
                />
              </Link>
            </div>
            <div>
              <p className="font-kh text-lg/tight  font-bold text-gray-900 ">
                តម្លៃ 3.2$/month
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
import { Link } from "react-router-dom";
export let MediaComponentPrice = ({ title, description }) => {
  return (
    <>
      <div className="p-3 flex flex-row-reverse items-center font-kh gap-4   ">
        <div className="bg-slate-100 rounded-xl p-5   md:p-3">
          <Link to="https://www.facebook.com/Davidinthemood?mibextid=LQQJ4d">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9674/9674659.png"
              alt=""
              className="size-10 md:size-20 rounded-lg object-cover"
            />
          </Link>

          <h3 className="text-lg/tight  font-bold text-gray-900">
            {title || "ចុចបូតុងខាងលើ"}
          </h3>

          <p className="mt-0.5 text-gray-700">
            {description || "ក្នុងការបញ្ជារទិញទំនិញ"}
          </p>
        </div>
      </div>
    </>
  );
};
