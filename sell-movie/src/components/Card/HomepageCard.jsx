const imageUrl = [
  "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBb8YkqrmoFjcMUJULGOJelBjd5QCreFQGGrELW8fl67Ntaocg609TDJFVWNHUdAJP33ceFrjJlK.E3wzTjKkiFc-&format=source",
  "https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/c144749aa0df745e43367744af149f66/Android_Collage_1920x1080__UCAN_En.jpg?w=1200",
  "https://cdn.britannica.com/49/255249-050-98B74D34/Spotify-logo-cellphone.jpg",
  "https://lf16-web-buz.capcut.com/obj/capcut-web-buz-us/ies/lvweb_os_monorepo/platformSSR/3f7c59f36d529f90-1200.png",
  "https://cdn.prod.website-files.com/60ab0571dc2b4b3a7165c912/65bb5e44a7173f31270f005a_%E1%84%8E%E1%85%A2%E1%86%BA-gpt.png",
  "https://down-th.img.susercontent.com/file/th-11134207-7r98r-ly83ahr0l9xdad",
  "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
  "https://static.standard.co.uk/2023/08/10/09/disneyp.jpg?width=1200&height=900&fit=crop",
];
const titlePro = [
  "Canva",
  "Netflix",
  "Sportify",
  "Capcut",
  "ChatGpt",
  "Steam Redeem",
  "Amazone Prime",
  "Disney Plus",
];
export let HomepageCardProduct = () => {
  return (
    <>
      {imageUrl.map((el, i) => (
        <div className="relative group cursor-pointer font-kh overflow-hidden duration-500  h-80 bg-rose-800   rounded-xl text-gray-50 p-5">
          <div className="">
            <div className="group-hover:scale-110 w-full h-60  duration-500">
              <img
                src={imageUrl[i]}
                className="h-full w-full object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="absolute w-56 left-0 p-5 -bottom-10 duration-500 group-hover:-translate-y-12">
              <div className="absolute -z-10 left-0  h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
              <span className="text-xl font-bold">អំពី!</span>
              <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                {titlePro[i] || "default"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
