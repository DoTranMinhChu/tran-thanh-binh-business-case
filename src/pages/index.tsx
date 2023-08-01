import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh"
        description=""
        openGraph={{
          url: "/",
          title: "Tran Thanh Binh",
          description: "",
          images: [
            {
              url: "/image/home-page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/home-page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Tran Thanh Binh",
        }}
      />
      {/* Top Body Home Page */}

      <div className="container p-4 mx-auto">
        <section className="py-4">
          <h1 className="font-semibold">1. COMPANY PROFILE</h1>
          <div className="px-4">
            <p className="py-2 text-justify">
              Smart Marketing Co., Ltd. (“Smart Marketing”) is established from
              2011 as Marketing Consultant Agency. In 2017, with the new
              development department, the company changed to a distributor with
              a wide network of Toys, Watches, Sunglass, Cosmetics, Baby and
              Maternity, Electrical Appliances, and Consumer Goods.
            </p>
            <div className="py-2">
              <img
                className="w-full mx-auto"
                src="image/image001.png"
                alt="Company Logo"
              />
            </div>
            {/* MAIN PRODUCT CATEGORIES */}
            <p className="">MAIN PRODUCT CATEGORIES</p>
            <div className="py-2">
              <p className="italic">Moms and Babies</p>
              <img
                className="w-full py-2 mx-auto"
                src="image/image002.png"
                alt="Moms and Babies"
              />
              <img
                className="w-full py-2 mx-auto"
                src="image/image003.png"
                alt="Moms and Babies"
              />
              <div className="text-center">
                <a
                  href="https://nicky.com.vn"
                  className="text-blue-500 underline"
                >
                  (https://nicky.com.vn)
                </a>
              </div>
            </div>
            <div className="py-2">
              <p className="italic">Toys</p>
              <img
                className="w-full py-2 mx-auto"
                src="image/image004.png"
                alt="Toys"
              />
              <img
                className="w-full py-2 mx-auto"
                src="image/image005.png"
                alt="Toys"
              />
              <div className="grid grid-cols-2 gap-1 py-2">
                <div>
                  <div className="text-center bg-[#ec1e25] p-1">
                    <p className="font-semibold">Bookstore display</p>
                  </div>
                  <img
                    className="w-full h-full mx-auto"
                    src="image/image006.png"
                    alt="Toys"
                  />
                </div>
                <div>
                  <div className="text-center bg-[#ec1e25] p-1">
                    <p className="font-semibold">Supermarket displays</p>
                  </div>
                  <img
                    className="w-full h-full mx-auto"
                    src="image/image007.png"
                    alt="Toys"
                  />
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://amotoy.com "
                  className="text-blue-500 underline"
                >
                  (https://amotoy.com)
                </a>
              </div>
            </div>
            <div className="py-2">
              <p className="italic">Healthcare and Beauty</p>
              <img
                className="w-full py-2 mx-auto"
                src="image/image008.png"
                alt="Healthcare and Beauty"
              />
            </div>
            <div className="py-2">
              <p className="italic">Glasses</p>
              <img
                className="w-full py-2 mx-auto"
                src="image/image009.png"
                alt="Glasses"
              />
              <img
                className="w-full py-2 mx-auto"
                src="image/image010.png"
                alt="Glasses"
              />
            </div>
            <div className="py-2">
              <p className="italic">Watches</p>
              <img
                className="w-full py-2 mx-auto"
                src="image/image011.png"
                alt="Watches"
              />

              <div className="grid grid-cols-2 gap-1 py-2">
                <div>
                  <img
                    className="w-full h-full mx-auto"
                    src="image/image012.png"
                    alt="Toys"
                  />
                </div>
                <div>
                  <img
                    className="w-full h-full mx-auto"
                    src="image/image013.png"
                    alt="Toys"
                  />
                </div>
              </div>
              <img
                className="w-full py-2 mx-auto"
                src="image/image014.png"
                alt="Watches"
              />
            </div>
            <div className="text-center">
              <a href="https://amotoy.com " className="text-blue-500 underline">
                (https://cuahangdongho.vn)
              </a>
            </div>
            {/* CUSTOMERS AND DISTRIBUTION CHANNELS */}
            <p className="pt-6">CUSTOMERS AND DISTRIBUTION CHANNELS</p>
            <p className="py-2 text-justify">
              Smart Marketing’s customers and sale channels are the leading
              retailers in Vietnam such as Thegioididong, Dienmayxanh, Aeon,
              Lotte, FPT, Emart, Fahasa, Phuong Nam, Concung, Tuticare,
              Bibomart, Shoptretho, Tiki, Shopee, Lazada, etc. (called as Modern
              Trades – MT) together with hundreds of Level 1 wholesale
              distributors nationwide and end-users (called as General Trades –
              GT).
            </p>
            <div className="py-2">
              <img
                className="w-full py-2 mx-auto"
                src="image/image015.png"
                alt="Moms and Babies"
              />
            </div>

            {/* BUSINESS MODEL CANVAS */}
            <p className="pt-6">BUSINESS MODEL CANVAS</p>
            <p className="py-2 text-justify">
              Smart Marketing’s customers and sale channels are the leading
              retailers in Vietnam such as Thegioididong, Dienmayxanh, Aeon,
              Lotte, FPT, Emart, Fahasa, Phuong Nam, Concung, Tuticare,
              Bibomart, Shoptretho, Tiki, Shopee, Lazada, etc. (called as Modern
              Trades – MT) together with hundreds of Level 1 wholesale
              distributors nationwide and end-users (called as General Trades –
              GT).
            </p>
            <div className="py-2">
              <img
                className="w-full py-2 mx-auto"
                src="image/image016.png"
                alt="Moms and Babies"
              />
            </div>
          </div>
        </section>
        <section className="py-4">
          <h1 className="font-semibold">2. COMPANY PROFILE</h1>
          <div className="px-4">
            <p className="py-2 text-justify">
              It is observed that the Smart Marketing operation had gone quite
              smoothly, it even had expanded the business in the last couple of
              years before Covid-19 pandemic then dramatically hit the country
              in 2020-2021. The consumption demand for the retails and similar
              products of the Company in the market went down considerably.
              After the pandemic was taken under control in early 2022, the
              Company has tried to recover its business with some slightly
              positive signals to restructure the operations and boost sales.
              However, due to the consumption demand for this market continuing
              its slowing-down trend from 2022, as a preliminarily perceived
              cause, the Company has suffered a loss for the first half of 2023.
              As the Company operates in the distribution business, the main
              sale driving force is the marketing and sale programs. Hence, it
              is relevant and necessary to look more into the issues in order to
              find the way to improve the Company’s sales as much as possible in
              this challenging time.
            </p>
          </div>
        </section>
        <section className="py-4">
          <h1 className="font-semibold">3. 3. STUDY METHODOLOGY</h1>
          <div className="px-4">
            <div>
              <p className="py-2 text-justify">
                While financial difficulty is the common issue to any business
                that involves with several factors derived externally and
                internally from the business environment, such as general market
                conditions, products offered to the market, sale programs and
                networks, operation organization, human resource, etc., this
                study is not ambitious to cover everything to turn around the
                Company financial performance in a short term but to put a main
                focus on boosting sales as pre-identified as the key driver to
                improve the Company financial situation in both short and long
                term views (so that the inventory level can be reduced and more
                cashflow can be generated accordingly). The study was,
                therefore, executed with the following structure:
              </p>
              <ul>
                <li>abc</li>
                <li>abc</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
