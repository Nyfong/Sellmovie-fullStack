export let Artical1 = ({ product }) => {
  // console.log("Artical", product.name);
  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not available
  }

  return (
    <>
      <div className="mt-5 md:mt-0 grid grid-cols-1 font-kh p-3 ">
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

export let ArticalUsage = ({ product }) => {
  console.log("atical ", product);
  console.log("+++ ", product.banefit);
  const addi = product.banefit;
  const data = [1, 1, 1];
  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not available
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-5 font-kh p-3 ">
        <div className="flex gap-3 md:gap-5 items-center">
          <i class="fa-solid fa-thumbs-up"></i>
          <span className="text-xl md:text-3xl text-green-500">
            អត្ថប្រយោជន៍ការប្រើប្រាស់
          </span>
        </div>

        {/* 1 */}
        {addi.map((el) => (
          <>
            <div className="grid grid-cols-1 gap-5 mt-5">
              <div>
                <p>
                  {" "}
                  <span className="text-xl">🎁 </span>.{" "}
                  <span className="text-3xl"> {el.title}</span>{" "}
                </p>
              </div>
              <div>
                <p>{el.dec}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
