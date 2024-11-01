import img1 from "../assets/img/heavid.png";
import img2 from "../assets/img/fong.png";
import img3 from "../assets/img/ying.png";
let AboutUs = () => {
  const arr = [1, 2, 2, 2];
  const arr1 = [img1, img2, img3, img1];
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
            <div className="  p-10">
              <img
                src="https://static-00.iconduck.com/assets.00/person-typing-at-desk-illustration-2048x1919-9cvyoh0g.png"
                alt=""
                className="md:h-[500px] w-full object-cover block"
              />
            </div>
          </div>
        </section>
        {/* show team */}
        <section>
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
                  <span className="text-xl">Pu kDet</span>
                  <span>seller</span>
                </div>
              </>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
