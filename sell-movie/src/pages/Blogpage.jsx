import vid from "../assets/img/heavid.png";
let Blogpage = () => {
  return (
    <>
      <main className="p-5 md:p-3 lg:p-0  gap-5 md:gap-3 max-w-screen-xl min-w-screen-80 mx-auto">
        {/* main content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* title */}
          <div className="flex justify-center items-center  h-16">
            <p>ABOUT HEA VID</p>
          </div>
          {/* title */}
          <div className="flex justify-center items-center  h-16 bg-red-500 rounded-lg">
            <p>Mey</p>
          </div>
          {/* pic */}
          <div>
            <img
              src={vid}
              className="h-[300] w-full object-cover block"
              alt=""
            />
          </div>
          {/* details */}
          <div className="flex items-center p-10">
            <p className="line-clamp-5 md:line-clamp-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Mollitia, maiores obcaecati repudiandae enim hic laudantium,
              nihil, ipsa modi quibusdam eaque voluptatem? Suscipit ad
              consequuntur, inventore esse fugiat laudantium quidem dignissimos
              in, provident ullam saepe ratione obcaecati, aperiam ex est
              delectus neque at laboriosam aspernatur dolores. Ea voluptatibus
              perspiciatis aspernatur rerum totam officiis quidem, aperiam quae
              voluptatem accusantium repudiandae, natus quibusdam praesentium.
              Eaque minima ea rerum ducimus architecto officia ipsa
              necessitatibus. Ipsum quibusdam nesciunt quis fuga natus,
              voluptate sit officiis, cumque obcaecati magni recusandae
              provident corrupti assumenda facilis beatae quas? Sapiente,
              pariatur! Libero tempora aliquam omnis illo maxime deserunt
              praesentium laboriosam! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Mollitia, maiores obcaecati repudiandae enim hic
              laudantium, nihil, ipsa modi quibusdam eaque voluptatem? Suscipit
              ad consequuntur, inventore esse fugiat laudantium quidem
              dignissimos in, provident ullam saepe ratione obcaecati, aperiam
              ex est delectus neque at laboriosam aspernatur dolores. Ea
              voluptatibus perspiciatis aspernatur rerum totam officiis quidem,
              aperiam quae voluptatem accusantium repudiandae, natus quibusdam
              praesentium. Eaque minima ea rerum ducimus architecto officia ipsa
              necessitatibus. Ipsum quibusdam nesciunt quis fuga natus,
              voluptate sit officiis, cumque obcaecati magni recusandae
              provident corrupti assumenda facilis beatae quas? Sapiente,
              pariatur! Libero tempora aliquam omnis illo maxime deserunt
              praesentium laboriosam!
            </p>
          </div>
          {/* blog */}
          <div>
            <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
              <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Latest Shirts
                  </h2>

                  <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore officia corporis quasi doloribus iure architecto
                    quae voluptatum beatae excepturi dolores.
                  </p>
                </div>
              </div>
            </section>
          </div>
          {/* blog */}
          <div>
            <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
              <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Latest Shirts
                  </h2>

                  <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore officia corporis quasi doloribus iure architecto
                    quae voluptatum beatae excepturi dolores.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blogpage;
