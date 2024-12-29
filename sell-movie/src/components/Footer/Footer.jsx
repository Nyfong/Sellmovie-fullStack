import { Link } from "react-router-dom";
import Logo from "../../assets/img/logoSellMovie.png";
export let Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
              href="#"
              target="_top"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img src={Logo} className="h-16 w-16 object-cover" alt="" />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left font-kh">
                ព័ត៌មានអំពីម៉ាកយីហោ និងតម្លៃរបស់យើង។
                រក្សាទំនាក់ទំនងតាមរយៈបណ្តាញប្រព័ន្ធផ្សព្វផ្សាយសង្គមរបស់យើង
                និងជាវព្រឹត្តិប័ត្រព័ត៌មានរបស់យើងដើម្បីក្លាយជាអ្នកដំបូងគេ។
                ដើម្បីស្តាប់អំពីការមកដល់ថ្មី និងការផ្តល់ជូនផ្តាច់មុខ!
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  href="/listing"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  href="/aboutus"
                >
                  {" "}
                  About Us{" "}
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
