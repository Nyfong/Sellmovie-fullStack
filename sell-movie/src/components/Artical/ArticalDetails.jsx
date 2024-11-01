export let Artical1 = ({ product }) => {
  // console.log("Artical", product.name);
  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not available
  }

  return (
    <>
      <div className="grid grid-cols-1 font-kh p-3 ">
        <div>
          <span className="text-3xl text-rose-500">អំពីទំនិញ</span>
        </div>
        <div>
          <p>
            {product.description}
            {"    "} {product.name}
          </p>
        </div>
      </div>
    </>
  );
};

export let ArticalUsage = () => {
  const data = [1, 1, 1];
  return (
    <>
      <div className="grid grid-cols-1 gap-5 font-kh p-3 ">
        <div className="flex gap-3 md:gap-5 items-center">
          <i class="fa-solid fa-thumbs-up"></i>
          <span className="text-3xl text-rose-500">
            អត្ថប្រយោជន៍ការប្រើប្រាស់
          </span>
        </div>
        <div>
          <p>
            Canva
            គឺជាវេទិការចនាក្រាហ្វិចអនឡាញដែលអាចឱ្យអ្នកប្រើប្រាស់បង្កើតមាតិកាដែលមើលឃើញយ៉ាងទូលំទូលាយ។
            វាផ្តល់នូវចំណុចប្រទាក់ងាយស្រួលប្រើជាមួយនឹងមុខងារអូស និងទម្លាក់
            ដែលអនុញ្ញាតឱ្យអ្នកចាប់ផ្តើម
            និងអ្នកជំនាញរចនាដោយមិនចាំបាច់ត្រូវការជំនាញកម្រិតខ្ពស់។
            នេះជាការវិភាគនៃការប្រើប្រាស់របស់វា៖
          </p>
        </div>
        {/* 1 */}
        {data.map((el) => (
          <>
            <div className="grid grid-cols-1 gap-5 mt-5">
              <div>
                <span className="text-3xl">ម៉ាកយីហោ និងទីផ្សារ៖</span>
              </div>
              <div>
                <p>
                  1. ឡូហ្គោ និងនាមប័ណ្ណ៖ Canva សម្រួលដល់ការបង្កើតឡូហ្គោ នាមប័ណ្ណ
                  និងសម្ភារៈម៉ាកផ្សេងទៀតជាមួយនឹងគំរូ និងឧបករណ៍ប្ដូរតាមបំណង។
                  ការបង្ហោះប្រព័ន្ធផ្សព្វផ្សាយសង្គម៖ Canva
                  ផ្តល់នូវគំរូសម្រាប់វេទិកាដូចជា Instagram, Facebook, Twitter
                  និង LinkedIn ដែលធ្វើឱ្យវាងាយស្រួលក្នុងការបង្កើតការបង្ហោះ
                  និងរឿងដែលទាក់ទាញដោយមើលឃើញ។
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
