import img1 from "../assets/img/heavid.png";
import img2 from "../assets/img/fong.png";
import img3 from "../assets/img/ying.png";
import img4 from "../assets/img/mey.png";
import Logo from "../assets/img/logoSellMovie.png";
import { Link } from "react-router-dom";
import BlogCard from "../components/Card/BlogCard";
let AboutUs = () => {
  const arr = [1, 2, 2, 2];
  const arr1 = [img1, img2, img3, img4];
  const detail = ["David", "Fong", "Ying", "Jing"];
  return (
    <>
      <main className="p-5 md:p-3 lg:p-0  gap-5 md:gap-3 max-w-screen-xl min-w-screen-80 mx-auto">
        {/* intro */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center font-kh">
              {/* title */}
              <div className="grid grid-cols-1">
                <div>
                  {" "}
                  <p className="text-md md:text-xl">
                    សូមស្វាគមន៍មកកាន់ TenhKh
                    ដែលជាវេទិកាដ៏គួរឱ្យទុកចិត្តរបស់ប្រទេសកម្ពុជាសម្រាប់ការទិញសេវាកម្មឌីជីថលដ៏មានតម្លៃប្រកបដោយភាពងាយស្រួល។
                    នៅ tenhKh យើងភ្ជាប់អ្នកទៅកាន់អារេដ៏ធំទូលាយនៃសេវាកម្មកំពូល
                    រួមទាំងឧបករណ៍ច្នៃប្រឌិតដូចជា Canva
                    ការជាវកម្មវិធីកម្សាន្តដូចជា Netflix, Amazon Prime និង Disney
                    Plus ការផ្សាយតន្ត្រីជាមួយ Spotify ការកែវីដេអូដោយប្រើ CapCut
                    ការលេងហ្គេមជាមួយ Steam និងអំណោយដ៏ងាយស្រួល។ ការលោះកាត។
                    បេសកកម្មរបស់យើងគឺធ្វើឱ្យការចូលប្រើសេវាកម្មសកលទាំងនេះមានលក្ខណៈសាមញ្ញ
                    និងមានតម្លៃសមរម្យសម្រាប់អ្នកប្រើប្រាស់ក្នុងប្រទេសកម្ពុជា
                    ទាំងអស់នៅកន្លែងតែមួយ។
                  </p>
                </div>
                <div className="mt-10">
                  {" "}
                  <p>
                    Welcome to tenhKh, Cambodia’s trusted platform for
                    purchasing premium digital services with ease. At tenhKh, we
                    connect you to a wide array of top services, including
                    creative tools like Canva, entertainment subscriptions such
                    as Netflix, Amazon Prime, and Disney Plus, music streaming
                    with Spotify, video editing using CapCut, gaming with Steam,
                    and convenient gift card redemptions. Our mission is to make
                    accessing these global services simple and affordable for
                    users in Cambodia, all in one place.
                  </p>
                </div>
              </div>
            </div>
            {/* imgae */}
            <div className="  p-20">
              <img
                src={Logo}
                alt=""
                className="md:h-[500px] w-full object-cover block"
              />
            </div>
          </div>
        </section>
        {/* show team */}
        <section className="my-10">
          <p className="underline font-kh">ក្រុមរបស់យើង</p>
          <div className=" grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {/* image1 */}
            {arr1.map((el) => (
              <>
                <div
                  key={el}
                  className="rounded-lg flex flex-col gap-3 items-center"
                >
                  <img
                    src={el}
                    className="h-[150px] md:h-[200px] w-[150px] md:w-[200px] object-cover rounded-full ring-2 ring-green-500"
                    alt=""
                  />
                  <span className="text-xl">TENH KH</span>
                  <span className="font-kh">អ្នកលក់</span>
                </div>
              </>
            ))}
          </div>
        </section>
        {/* blog card */}
        <section className="my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {arr1.map((el) => (
            <>
              <BlogCard image={el} />
            </>
          ))}
        </section>

        <section>
          {/* founder */}
          <div className="my-10">
            <span>
              Founder / <span className="font-kh ">ស្ថាបនិក </span> TenhKH
            </span>
          </div>
          <div className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3  pb-10">
            <div className="relative">
              <Link to="https://www.youtube.com/@davidoeng" target={"_blank"}>
                <img
                  alt=""
                  src={arr1[0]}
                  className="h-32 w-full object-cover md:h-full rounded-lg ring-2 ring-green-500 "
                />
                <div className="absolute absolute bottom-[25%] right-[5%] md:right-[37%]">
                  <span className="font-kh  text-black md:text-white">
                    លោក អុឺង ដេវីដ
                  </span>
                </div>
              </Link>
            </div>

            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest">
                Run with the pack
              </p>

              <h2 className="mt-6 font-black uppercase">
                <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                  {" "}
                  Check out my channel{" "}
                </span>

                <span className="mt-2 block text-sm">exciting video</span>
              </h2>

              <Link
                to="https://www.youtube.com/@davidoeng"
                target={"_blank"}
                className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest rounded-lg text-white p-10 bg-red-500"
              >
                SUBSCRIBE YT NOW
              </Link>

              <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                1ST November, 2024 *
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
