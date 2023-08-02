import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh | Problem Refinement"
        description=""
        openGraph={{
          url: "/problem-refinement",
          title: "Tran Thanh Binh | Problem Refinement",
          description: "",
          images: [
            {
              url: "/image/problem-refinement-page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/problem-refinement-page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Tran Thanh Binh | Problem Refinement",
        }}
      />
      {/* Top Body Home Page */}

      <div className="container p-4 mx-auto">
        <section className="py-4">
          <p className="py-2 text-justify">
            Company&apos;s sales are generated through 2 channels, i.e.: MT and GT in
            70% and 30% approx. proportion of the total sales of the company. We
            will go through each channel to see how the products are distributed
            and sales are recognized by the Company to the consumers.
          </p>
          {/* MT channel */}
          <h2 className="font-medium">MT channel</h2>
          <p className="py-2 text-justify">
            The Company has the list of registered supermarkets and chain stores
            (MT) across the country. There are two types of distribution and
            sales in MT channel. The first type, not the major, is direct sale,
            in which Company recognizes revenue upon delivering products to the
            MT. The second type, the main one, is that the company delivers the
            products to the MT upon the request from MT and then recognizes
            revenue when the products are really sold to the end-buyers. The
            un-sold products remaining at MT are still treated as an inventory
            of the Company. There are frame agreements between the Company and
            each MT where some key terms and conditions (such as: pricing and
            commission mechanism, sales program, payment terms, product request
            and delivery time, quality guarantee, etc.) are pre-defined. The
            Company also send the sale programs, if any, for certain types of
            products to the MT to roll out. In most of MTs, the Company has its
            display stores or shelves with its own sale and marketing staff.
            These display staff are to attract, introduce, explain and guide the
            visiting guests about the products’ functionalities, choices, sale
            programs and related matters with the purpose to convince the guests
            to buy the products. Although sale KPIs are given to each display
            store and shelf and down to each staff as the basis for monthly wage
            payments, it is shared and observed that many staff are still under
            occupied and have quite much “available time” because not many
            guests like before visit the stores/shelves now. In many cases, the
            staff found more difficult than before to convince the visiting
            guests to place orders. The Company has not received any critical
            claims or feedbacks from the buyers or MT in terms of the quality of
            the products or display staff’s negative behaviors and attitude that
            could make the visiting guests not happy to go to the final
            purchases.
          </p>

          {/* GT channel*/}
          <h2 className="font-medium">GT channel</h2>
          <p className="py-2 text-justify">
            This GT (agents, shops and end-users) channel generates direct sales
            for the Company at the time the products are delivered by the
            Company at the purchase orders from the GT. This channel also
            includes sales from websites of the Company which are just purely
            online selling platform (similar to most of other FMCG websites in
            the market) that anyone can order and get delivered directly. There
            is no special marketing programs introduced in such websites rather
            than normal discount information posted to certain product
            categories.
          </p>

          {/* Sales and marketing strategy */}
          <h2 className="font-medium">Sales and marketing strategy</h2>
          <p className="py-2 text-justify">
            The financial performance of the company in the first half of 2023
            is not positive, which is mainly due to the lower sales, accounting
            for only one third of 2022 sales.
          </p>
          <p className="py-2 text-justify">
            <i>Table 1:</i> Profit and loss in 2022 and the first half of 2023
          </p>
          <div className="w-full py-2 md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-1/3 px-4 py-3 text-sm font-semibold text-left uppercase">
                      Profit and loss
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                      2022 Full year
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                      2023-H1
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                      2023-H1/2022
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Revenue</td>
                    <td className="px-4 py-3 text-center ">100%</td>
                    <td className="px-4 py-3 text-center">100%</td>
                    <td className="px-4 py-3 text-center">34%</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">COGS</td>
                    <td className="px-4 py-3 text-center">75%</td>
                    <td className="px-4 py-3 text-center">90%</td>
                    <td className="px-4 py-3 text-center">40%</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Gross margin</td>
                    <td className="px-4 py-3 text-center">25%</td>
                    <td className="px-4 py-3 text-center">10%</td>
                    <td className="px-4 py-3 text-center">14%</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">
                      Operational expenses
                    </td>
                    <td className="px-4 py-3 text-center ">23%</td>
                    <td className="px-4 py-3 text-center">17%</td>
                    <td className="px-4 py-3 text-center">25%</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Net result</td>
                    <td className="px-4 py-3 text-center ">2%</td>
                    <td className="px-4 py-3 text-center">-6%</td>
                    <td className="px-4 py-3 text-center">-109%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="py-2 !text-xs text-justify">
              (<i>Note</i>: due to the confidentiality of the financial
              information, only % of sales is advised by the company)
            </p>
          </div>
          <p className="py-2 text-justify">
            The aggregated gross margin much reduced from 25% last year to 10%
            in 2023H1. The margins of all product categories also reduced (due
            to the lower selling prices). Moms & Babies and Watch which are
            within the group of higher margins, and Toys remained to be the main
            sources of revenue (90% approx.).
          </p>
          <p className="py-2 text-justify">
            <i>Table 2:</i> Gross margin (%) of product categories - 2023 H1
          </p>
          <div className="w-full py-2 md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-1/3 px-4 py-3 text-sm font-semibold text-left uppercase">
                      Gross margin
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                      MT
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                      GT
                    </th>
                    <th className="w-[30%] px-4 py-3 text-sm font-semibold text-center uppercase">
                      Sale contribution ranking
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Moms & Babies</td>
                    <td className="px-4 py-3 text-center ">11%</td>
                    <td className="px-4 py-3 text-center">8%</td>
                    <td className="px-4 py-3 text-center">3</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">Toys</td>
                    <td className="px-4 py-3 text-center">7%</td>
                    <td className="px-4 py-3 text-center">6%</td>
                    <td className="px-4 py-3 text-center">1%</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Health Care</td>
                    <td className="px-4 py-3 text-center">7%</td>
                    <td className="px-4 py-3 text-center">N/A</td>
                    <td className="px-4 py-3 text-center">5</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">Watch</td>
                    <td className="px-4 py-3 text-center ">15%</td>
                    <td className="px-4 py-3 text-center">10%</td>
                    <td className="px-4 py-3 text-center">2</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Glasses</td>
                    <td className="px-4 py-3 text-center ">14%</td>
                    <td className="px-4 py-3 text-center">N/A</td>
                    <td className="px-4 py-3 text-center">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="py-2 text-justify">
            The Company products, in fact, are of no special and competitive
            features compared with other available and similar ones
            (alternatives) in the market. The Company has tried to boost sales
            by launching more sale programs which resulted in the eroded gross
            margin in the period. The regular sale program that the Company has
            applied is giving discounts at various rates on a variety of
            products (based on the analysis of the products’ ages). Rather than
            this, there has been no considerable marketing program conducted by
            the Company. Technically, the Company has been operating a “passive”
            business strategy where it does not actively approach the targeted
            consumers and make itself attractive to the consumers in some way.
            This strategy, in this challenging time, is even more challenging to
            the growth of the Company in a long-term. Furthermore, the Company
            seems to be left behind in taking advantage of blooming retails
            market on ecommerce. Although the Company has implemented selling
            via its websites, the sale contribution from this channel is still
            relatively humble to its total sales.
          </p>
          <p className="py-2 text-justify">
            In sum, the real issue of the company is that the company is still
            running a basic marketing strategy which might not be able to catch
            up with the rapid development of technology. Next step, we will look
            into some alternatives to help solve this issue out.
          </p>
        </section>
      </div>
    </>
  );
}
