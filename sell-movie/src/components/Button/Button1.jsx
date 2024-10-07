import { Link } from "react-router-dom";
export let Button1 = ({ title, url }) => {
  return (
    <>
      <Link
        to={url || "#"}
        className="block w-full font-kh flex items-center justify-center rounded-2xl bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
      >
        {title || "ចាប់ផ្ដើម"}
      </Link>
    </>
  );
};
