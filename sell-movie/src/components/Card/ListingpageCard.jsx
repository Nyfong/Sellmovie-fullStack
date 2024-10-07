import { MediaComponent, MediaComponentPrice } from "../Media/Media Components";
import { Link } from "react-router-dom";
const listTag = [
  {
    title: "Canva",
    description:
      "Canva គឺជាឧបករណ៍រចនាតាមអ៊ីនធឺណិតដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បង្កើតក្រាហ្វិក បទបង្ហាញ ការបង្ហោះប្រព័ន្ធផ្សព្វផ្សាយសង្គម និងអ្វីៗជាច្រើនទៀតដោយប្រើមុខងារអូសនិងទម្លាក់។ វាផ្តល់នូវគំរូ រូបភាព និងធាតុរចនាសម្រាប់អ្នកជំនាញ និងអ្នកចាប់ផ្តើមដំបូងដូចគ្នា។",
  },
  {
    title: "Netflix",
    description:
      "Netflix គឺជាសេវាកម្មចាក់ផ្សាយដែលផ្តល់ជូននូវបណ្ណាល័យដ៏ធំនៃភាពយន្ត កម្មវិធីទូរទស្សន៍ ភាពយន្តឯកសារ និងខ្លឹមសារដើម។ វាផ្តល់នូវការមើលដោយគ្មានការផ្សាយពាណិជ្ជកម្មជាមួយនឹងការជាវដែលមាននៅលើឧបករណ៍ជាច្រើននៅទូទាំងពិភពលោក",
  },
  {
    title: "Sportify",
    description:
      "Spotify គឺជាសេវាកម្មស្ទ្រីមតន្ត្រីឌីជីថលដ៏ពេញនិយមដែលផ្តល់នូវការចូលប្រើបទចម្រៀងរាប់លាន ផតខាស និងមាតិកាអូឌីយ៉ូផ្សេងទៀតពីសិល្បករនៅទូទាំងពិភពលោក។ វាអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ស្វែងរក ស្តាប់ និងចែករំលែកតន្ត្រីតាមប្រភេទ និងរចនាប័ទ្មផ្សេងៗ។ Spotify ផ្តល់ជូនទាំងកម្រិតឥតគិតថ្លៃ គាំទ្រការផ្សាយពាណិជ្ជកម្ម និងសេវាកម្មជាវលំដាប់ខ្ពស់ ដែលផ្តល់នូវការស្តាប់ដោយគ្មានពាណិជ្ជកម្ម ការទាញយកក្រៅបណ្តាញ និងគុណភាពសំឡេងខ្ពស់ជាង",
  },
  {
    title: "CapCut",
    description:
      "CapCut គឺជាកម្មវិធីកាត់តវីដេអូដែលអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បង្កើត និងកែសម្រួលវីដេអូបានយ៉ាងងាយស្រួល។ វាផ្តល់នូវលក្ខណៈពិសេសដូចជាការកាត់ត តម្រង ការផ្លាស់ប្តូរ អត្ថបទ តន្ត្រី និងបែបផែន ដែលធ្វើឱ្យវាស័ក្តិសមសម្រាប់ទាំងអ្នកប្រើប្រាស់ធម្មតា និងអ្នកបង្កើតមាតិកា។ ជាមួយនឹងចំណុចប្រទាក់ដ៏សាមញ្ញ និងឧបករណ៍កែសម្រួលផ្សេងៗរបស់វា CapCut មានប្រជាប្រិយភាពសម្រាប់ការបង្កើតវីដេអូប៉ូឡូញសម្រាប់វេទិកាប្រព័ន្ធផ្សព្វផ្សាយសង្គម។",
  },
  {
    title: "Chatgpt",
    description:
      "ChatGPT គឺជាគំរូភាសា AI ដែលបង្កើតឡើងដោយ OpenAI ដែលត្រូវបានរចនាឡើងដើម្បីជួយដល់កិច្ចការដូចជាការឆ្លើយសំណួរ ការផ្តល់ការពន្យល់ ឬបង្កើតអត្ថបទ។ វាអាចចូលរួមនៅក្នុងការសន្ទនាធម្មជាតិ និងជួយជាមួយនឹងប្រធានបទជាច្រើន",
  },
  {
    title: "Steam Redeem",
    description:
      "Steam Redeem សំដៅលើដំណើរការនៃការប្ដូរលេខកូដឌីជីថល ឬកាតអំណោយនៅលើ Steam ដើម្បីដោះសោហ្គេម មាតិកា ឬមូលនិធិកាបូបសម្រាប់ការទិញផលិតផលនៅលើវេទិកា។",
  },

  {
    title: "Amazone Prime",
    description:
      "Amazon Prime Video គឺជាសេវាកម្មចាក់ផ្សាយដែលផ្តល់នូវជម្រើសដ៏ធំទូលាយនៃភាពយន្ត កម្មវិធីទូរទស្សន៍ និងមាតិកាដើម។ វាត្រូវបានរួមបញ្ចូលជាមួយនឹងការជាវ Amazon Prime និងផ្តល់នូវការមើលដោយគ្មានការផ្សាយពាណិជ្ជកម្ម និងការចូលទៅកាន់ចំណងជើងផ្តាច់មុខ។",
  },
  {
    title: "Disney Plus",
    description:
      "Disney Plus គឺជាវេទិកាផ្សាយដែលមានភាពយន្ត និងកម្មវិធីទូរទស្សន៍ពី Disney, Pixar, Marvel, Star Wars និង National Geographic ។ វាផ្តល់ជូននូវមាតិកាដែលងាយស្រួលសម្រាប់គ្រួសារ និងស៊េរីដើមដូចជា The Mandalorian ជាដើម។",
  },
];
const priceList = [
  {
    title: "បញ្ជារទិញ",
    description: "តម្លៃ 3.2$/month",
  },
];

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

export let ListingCard = () => {
  return (
    <>
      {imageUrl.map((el, i) => (
        <>
          <div
            ke={el}
            className="grid grid-cols-1 m-5 gap-3 lg:grid-cols-3 bg-transparent "
          >
            {/* images */}
            <Link to="/details">
              <div className="md:px-2   relative     ">
                <img
                  src={el}
                  alt=""
                  className="w-full  hover:scale-105 h-[250px] transition duration-150 ease-in-out object-cover rounded-lg"
                />
                <div className=" absolute top-0 text-center rounded-lg w-[100px] bg-slate-100">
                  <span className="text-black  font-kh">លំអិត </span>
                </div>
              </div>
            </Link>
            {/* description */}

            <MediaComponent
              title={listTag[i]?.title} // Accessing title based on index
              description={listTag[i]?.description} // Accessing description based on index
            />

            {/*price */}
            {priceList.map((el) => (
              <>
                <section className=" hidden md:flex  md:items-center md:justify-end lg:justify-center ">
                  <MediaComponentPrice
                    title={el.title}
                    description={el.description}
                  />
                </section>
              </>
            ))}
          </div>
        </>
      ))}
    </>
  );
};
