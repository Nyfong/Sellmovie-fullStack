import { Link } from "react-router-dom";
let BlogCard = ({ image, seller, id, index, name }) => {
  console.log(
    "object ====",
    seller.map((el) => el.id)
  );

  return (
    <>
      <Link to={`/blog/${index + 1}`}>
        <article className="flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>2024</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Oct 10</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt=""
              src={image}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900 font-kh">
                  <span className="hover:text-green-500 ">
                    {seller[index]?.name}
                  </span>{" "}
                  ស្វែងរកព័ត៌មានរបស់យើងនៅទីនេះ
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                {seller[index]?.description}
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                <span className="font-kh">អានប្លុក </span>/ Read Blog
              </a>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};

export default BlogCard;
