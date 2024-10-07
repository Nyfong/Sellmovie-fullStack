import { Button1 } from "../Button/Button1";
export let WhyUs = () => {
  const talkWithMe = "និយាយជាមួយអ្នកលក់ !";
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 font-kh">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">អ្នកលក់</h2>

              <p className="mt-4 text-gray-600">
                🔍 I'm David Oeng ! 🌌 អ្នកទាំងអស់គ្នា នឹង ខ្ញុំ
                នឹងទៅស្វែងយល់ពីពិភពលោកដ៏ធំធេងនេះជាមួយគ្នា🔮 Contact me via
                Telegram: 099 661 256
              </p>
              <section className="mt-5 md:w-[250px]">
                <Button1 title={talkWithMe} />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
