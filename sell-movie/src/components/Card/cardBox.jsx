import { Link } from "react-router-dom";

const CardBox = ({ product }) => {
  return (
    <>
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
    </>
  );
};

export default CardBox;
