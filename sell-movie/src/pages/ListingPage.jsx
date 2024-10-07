import { ListingCard } from "../components/Card/ListingpageCard";
import { SearchBar1 } from "../components/Search/SearchBar";
let ListingPage = () => {
  return (
    <>
      <div className="relative   bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/de911b7-9a6675b5-753b-447e-9923-ca2d81af28bf.png')] sm:bg-[url('https://static.vecteezy.com/system/resources/previews/035/916/301/non_2x/ai-generated-male-anime-characters-transparent-background-free-png.png')] bg-no-repeat bg-contain bg-left-top bg-[left_100px] p-5 md:p-3 lg:p-0 bg-fixed">
        <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-md"></div>
        <main className="relative  gap-5 md:gap-3 max-w-screen-xl min-w-screen-80 mx-auto">
          <section className="p-10 sticky top-[50px] z-10">
            <SearchBar1 />
          </section>
          <section className="p-5">
            {/* <div className="flex justify-start md:justify-end mb-3">
              <p className="font-kh text-2xl text-white">រាយមុខទំនិញ</p>
            </div> */}
            <span className="flex items-center">
              <span className="h-px flex-1 bg-white"></span>
              <span className="pl-6 text-2xl text-rose-500 font-kh">
                រាយមុខទំនិញ
              </span>
            </span>
            {/* <hr className="border-white" /> */}
            <ListingCard />
          </section>
        </main>
      </div>
    </>
  );
};

export default ListingPage;
