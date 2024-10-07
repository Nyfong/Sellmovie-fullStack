import { Button1 } from "../Button/Button1";
const title = "ប្រភេទ";
export let Category1 = () => {
  return (
    <>
      <section className=" flex flex-col gap-5 md:gap-3  mb-10 mt-10  p-5   rounded-lg ">
        <div className="grid grid-cols-8">
          <Button1 title={title} />
        </div>

        <div className="grid grid-cols-3 gap-4  md:grid-cols-6 sm:gap-3 md:gap-10 	">
          <div className="grid grid-rows-2 font-kh justify-center items-center">
            <img
              src="
            https://static.vecteezy.com/system/resources/thumbnails/015/340/589/small_2x/video-editor-3d-character-illustration-png.png"
              className=" w-[100px]  object-cover block"
              alt=""
            />
            <span>ឌីជីថល</span>
          </div>

          <div className="grid grid-rows-2 ​​ font-kh justify-center items-center">
            <img
              src="
              https://static.vecteezy.com/system/resources/previews/010/286/340/non_2x/online-cinema-art-movie-watching-with-popcorn-and-film-strip-cinematograph-concept-png.png "
              className=" w-[100px]  object-cover block"
              alt=""
            />
            <span>មើលរឿង</span>
          </div>

          <div className="grid grid-rows-2 font-kh justify-center items-center">
            <img
              src="
              https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-music-note-staves-png-image_5998977.png"
              className=" w-[100px]  object-cover block"
              alt=""
            />
            <span>តន្រ្តី</span>
          </div>

          <div className="grid grid-rows-2 font-kh justify-center items-center">
            <img
              src="
              https://static.vecteezy.com/system/resources/previews/013/361/342/non_2x/3d-render-game-equipment-console-headset-free-png.png"
              className=" w-[100px]  object-cover block"
              alt=""
            />
            <span>ហ្គេម</span>
          </div>

          <div className="grid grid-rows-2 font-kh justify-center items-center">
            <img
              src="
              https://images.freeimages.com/image/previews/12c/semi-flat-study-supply-png-5690858.png"
              className=" w-[100px]  object-cover block"
              alt=""
            />
            <span>សិក្សា</span>
          </div>

          <div className="grid grid-rows-2 font-kh justify-center items-center">
            <img
              src="
              https://static1.squarespace.com/static/52e8c70fe4b0fa0698b7c4a6/5e82a341e2b00968faee90c3/5e82a364da9c1c714062a4f5/1585620951518/?format=1500w"
              className=" w-[100px]  object-cover block"
              alt=""
            />
            <span>រីឌីមកាត</span>
          </div>
        </div>
      </section>
    </>
  );
};
