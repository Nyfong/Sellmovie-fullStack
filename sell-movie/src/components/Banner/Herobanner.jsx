import { Button1 } from "../Button/Button1";
import shopGif from "../../assets/img/shop.gif";
export let HerobannerHomepage = () => {
  const aboutUs = "អំពីយើង";
  const aboutProduct = "រាយមុខទំនិញ";
  const url = "/prod";
  const url2 = "/aboutus";
  // https://a-static.besthdwallpaper.com/batman-sketch-red-wallpaper-3840x2160-101734_54.jpg
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section
        className="relative  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${shopGif})` }}
      >
        <div className="absolute inset-0 bg-gray-900/75 "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl font-kh text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold  mb-5 leading-loose  text-white sm:text-5xl">
              ទិញទំនិញដែលមានតម្លៃសមរម្យ មានគុណភាពខ្ពស់
              <strong className="block font-extrabold text-rose-500">
                {" "}
                ជាមួយ TENH KH SHOP.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg mb-5 text-white sm:text-xl/relaxed">
              ទិញទំនិញដែលទំនុកចិត្ត១០០ភាគរយ your secret website &#x1F631;
            </p>

            <div className="mt-8 flex mb-5  md:w-[355px] flex-wrap gap-4 text-center">
              <Button1 title={aboutProduct} url={url} />
              <Button1 title={aboutUs} url={url2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
