import { NextSeo } from "next-seo";
import ReactTooltip from "react-tooltip";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh | Alternatives"
        description=""
        openGraph={{
          url: "/alternatives",
          title: "Tran Thanh Binh | Alternatives",
          description: "",
          images: [
            {
              url: "/image/alternatives-page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/alternatives-page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Tran Thanh Binh | Alternatives",
        }}
      />
      {/* Top Body Home Page */}

      <div className="container p-4 mx-auto">
        <section className="py-4">
          <p className="py-2 text-justify">
            There are five alternatives that are considered in order to improve
            the situation of the Company:
          </p>
          <ul className="pt-2 pl-6 list-decimal">
            <li className="text-justify">
              <p className="inline">Organization restructure.</p>
            </li>
            <li className="text-justify">
              <p className="inline">
                Optimization of high-low margin products.
              </p>
            </li>
            <li className="text-justify">
              <p className="inline">Price discount programs.</p>
            </li>
            <li className="text-justify">
              <p className="inline">
                Increase the coverage of key product categories.
              </p>
            </li>
            <li className="text-justify">
              <p className="inline">
                Launch a new affiliate marketing project.
              </p>
            </li>
          </ul>
          {/* Organization restructure */}
          <h2 className="py-2 pt-8 font-medium">Organization restructure</h2>
          <p className="py-2 text-justify">
            For the short-term view in order to reduce the cost spendings to be
            covered by the lower sales, the Company can consider to re-structure
            its sale team and supporting staff.
          </p>
          <p className="py-2 text-justify">
            As afore mentioned, there are some idle time periods of display
            staff in display stores and shelves in supermarkets and mega stores
            that can be reduced to a certain level. There are some measures to
            compensate the reduced services of these display staff that the
            company can implement:
          </p>
          <ul className="pt-2 pl-4 list-disc">
            <li className="text-justify">
              <p className="inline">
                Putting on more advertisement panels, photos and short
                illustrative video clips on screens, etc. This is to remain the
                attraction from the walking guests to the stores and products.
              </p>
            </li>
            <li className="text-justify">
              <p className="inline">
                Staff who are in charge of one display shelf can take more
                duties in other nearby shelves. Staff salary is paid off into
                two portions: (1) a fixed monthly salary (normally not much far
                beyond the required minimum wage) and (2) KPI performance
                salary. An increase in KPI rates helps stimulate the staff for
                additional duties and put more effort to convince walking guests
                to place orders. Additional training for staff is necessary to
                take new product categories.
              </p>
            </li>
            <li className="text-justify">
              <p className="inline">
                Hiring the same service from the owner’s stores when necessary.
              </p>
            </li>
          </ul>
          <p className="py-2 text-justify">
            For the supporting staff in back office (such as finance and
            accounting, HR, marketing, administration, IT), the Company can
            consolidate some of these functions from its subsidiary units, which
            are currently handled almost separately, into the head office on the
            share basis. One function in head office can serve each and all
            units. Idle staff can be reduced.
          </p>
          <p className="py-2 text-justify">
            After the restructure, the Company can save about 20% of operational
            expenses (of 10 billion VND/month average) and retain 2/3 of its
            operational staff.
          </p>

          <p className="py-2 text-justify">
            <i>Table 3:</i> Advantages and disadvantages of this Organization
            restructure
          </p>
          <div className="w-full py-2 md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-center uppercase">
                      Advantages
                    </th>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-center uppercase">
                      Disadvantages
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/2 px-4 py-3 text-left">
                      Reductions in cost spending and cash outflow
                    </td>
                    <td className="w-1/2 px-4 py-3 text-left ">
                      Not sufficient skilled resource to boost sales.{" "}
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/2 px-4 py-3 text-left">
                      Better control from head office
                    </td>
                    <td className="w-1/2 px-4 py-3 text-left">
                      Possible to lose the momentum for sale improvement due to
                      limited available human resource in long-term period.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Optimization of high-low margin products */}
          <h2 className="py-2 pt-8 font-medium">
            Optimization of high-low margin products
          </h2>
          <p className="py-2 text-justify">
            The Company can prioritize its limited resources for the products
            with high margin and high sale contribution ranking. At the same
            time, products with slow moving and/or low margin can be reduced and
            gradually eliminated (after stock-out) from its product basket.
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
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                      Prioritized
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Moms & Babies</td>
                    <td className="px-4 py-3 text-center ">11%</td>
                    <td className="px-4 py-3 text-center">8%</td>
                    <td className="px-4 py-3 text-center">3</td>
                    <td className="px-4 py-3 text-center">Yes</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">Toys</td>
                    <td className="px-4 py-3 text-center">7%</td>
                    <td className="px-4 py-3 text-center">6%</td>
                    <td className="px-4 py-3 text-center">1%</td>
                    <td className="px-4 py-3 text-center">Yes</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Health Care</td>
                    <td className="px-4 py-3 text-center">7%</td>
                    <td className="px-4 py-3 text-center">N/A</td>
                    <td className="px-4 py-3 text-center">5</td>
                    <td className="px-4 py-3 text-center">No</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">Watch</td>
                    <td className="px-4 py-3 text-center ">15%</td>
                    <td className="px-4 py-3 text-center">10%</td>
                    <td className="px-4 py-3 text-center">2</td>
                    <td className="px-4 py-3 text-center">Yes</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">Glasses</td>
                    <td className="px-4 py-3 text-center ">14%</td>
                    <td className="px-4 py-3 text-center">N/A</td>
                    <td className="px-4 py-3 text-center">4</td>
                    <td className="px-4 py-3 text-center">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="py-2 text-justify">
            <i>Table 4:</i> Additional advantages and disadvantages of the
            Optimization of high-low margin products
          </p>
          <div className="w-full py-2 md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-center uppercase">
                      Advantages
                    </th>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-center uppercase">
                      Disadvantages
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/2 px-4 py-3 text-left">
                      Reductions in cost spending and cash outflow of reduced
                      products
                    </td>
                    <td className="w-1/2 px-4 py-3 text-left ">
                      Losing the current commercial position of reduced products
                      in the market that might cost the company more to re-build
                      up in the future if Company decides to add them back to
                      the basket.
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/2 px-4 py-3 text-left">
                      Move resources from the reduced products to boost sales of
                      the prioritized ones
                    </td>
                    <td className="w-1/2 px-4 py-3 text-left"></td>
                  </tr>
                  <tr className="text-white bg-[#33576F]">
                    <td className="w-1/2 px-4 py-3 text-left">
                      Reduce stock level (of slow-moving items)
                    </td>
                    <td className="w-1/2 px-4 py-3 text-left"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Sale programs */}
          <h2 className="py-2 pt-8 font-medium">Sale programs</h2>
          <p className="py-2 text-justify">
            The Company can continue its regular price discount programs for the
            coming time in order to increase sales and also to reduce the not
            prioritized products as mentioned in the measure above.
          </p>
          <p className="py-2 text-justify">
            The price can be systematically discounted to breakeven level or
            even more (in consideration of the future loss of obsolescence) to
            get all slow moving stocks clear as soon as possible. It can be
            arranged in form of combo sales (i.e.: a combination of prioritized
            items at certain price and not prioritized items for free) or pure
            discounts on price.
          </p>
          <p className="py-2 text-justify">
            Additional discount can be offered to the MT and GT for cash sales.
          </p>
          <p className="py-2 text-justify">
            <i>Table 5:</i> Additional advantages and disadvantages of the
            Optimization of high-low margin products
          </p>
          <div className="w-full py-2 md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-center uppercase">
                      Advantages
                    </th>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-center uppercase">
                      Disadvantages
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/2 px-4 py-3 text-left">
                      Reduce stocks and especially slow-moving items which can
                      become out of fashion in future.
                    </td>
                    <td className="w-1/2 px-4 py-3 text-left ">
                      The sale can increase in short-term (year 2023) but the
                      margin will not improve much.
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/2 px-4 py-3 text-left">
                      Increase cash inflow
                    </td>
                    <td className="w-1/2 px-4 py-3 text-left"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Increase the coverage of key product categories */}
          <h2 className="py-2 pt-8 font-medium">
            Increase the coverage of key product categories
          </h2>
          <p className="py-2 text-justify">
            While maintaining (at least) the presence and performance of general
            products in all channels, the Company can leverage what it is good
            at by putting focus more on increasing the coverage of its key
            and/or prioritized products in the MT channel (supermarkets and mega
            stores) that it has competitive advantages. Watch category whose
            sale mainly contributed from Mobile World Group (MWG) is worth for a
            consideration. The Company has already established a quite strong
            network in MWG eco-system for Watch products where MWG eco-system is
            forecasted to continue its leading position in non-luxury watch
            market in coming years.
          </p>
          <p className="py-2 text-justify">
            <i>Table 6:</i> Vietnam market share of non-luxury watch 2022
            (provided by the company)
          </p>
          <div className="w-full py-2 md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-left uppercase">
                      Account
                    </th>
                    <th className="w-1/2 px-4 py-3 text-sm font-semibold text-center uppercase">
                      Mobile World Group
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/2 px-4 py-3 text-left">
                      Mobile World Group
                    </td>
                    <td className="w-1/2 px-4 py-3 text-center ">63%</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/2 px-4 py-3 text-left">PNJ</td>
                    <td className="w-1/2 px-4 py-3 text-center">5%</td>
                  </tr>
                  <tr>
                    <td className="w-1/2 px-4 py-3 text-left">Hai Trieu</td>
                    <td className="w-1/2 px-4 py-3 text-center ">6%</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/2 px-4 py-3 text-left">
                      Dang Quan Watch
                    </td>
                    <td className="w-1/2 px-4 py-3 text-center">6%</td>
                  </tr>
                  <tr>
                    <td className="w-1/2 px-4 py-3 text-left">Anh Khue</td>
                    <td className="w-1/2 px-4 py-3 text-center ">6%</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/2 px-4 py-3 text-left">Top Ten</td>
                    <td className="w-1/2 px-4 py-3 text-center">3%</td>
                  </tr>
                  <tr>
                    <td className="w-1/2 px-4 py-3 text-left">Others</td>
                    <td className="w-1/2 px-4 py-3 text-center ">10%</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/2 px-4 py-3 font-medium text-left">
                      Total
                    </td>
                    <td className="w-1/2 px-4 py-3 font-medium text-center">
                      100%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="py-2 text-justify">
            <i>Table 7:</i> Market share of non-luxury watch forecast
          </p>
          <div className="w-full py-2 md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-left uppercase ">
                      Year
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase ">
                      Mobile World Group
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase ">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="px-4 py-3 text-left ">2023</td>
                    <td className="px-4 py-3 text-center ">85%</td>
                    <td className="px-4 py-3 text-center ">15%</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="px-4 py-3 text-left ">2024</td>
                    <td className="px-4 py-3 text-center ">72%</td>
                    <td className="px-4 py-3 text-center ">28%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-left ">2025</td>
                    <td className="px-4 py-3 text-center ">65%</td>
                    <td className="px-4 py-3 text-center ">35%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="py-2 text-justify">
            It is forecasted that with this measure and under the current
            circumstance with MWG, Watch sale with MWG can increase by 10% more
            and its margin increases by 3% (after the increased commission rate
            for MWG) in the 2nd half of 2023.
          </p>
          {/* Launch a new affiliate marketing platform project */}
          <h2 className="py-2 pt-8 font-medium">
            Launch a new affiliate marketing platform project
          </h2>
          <p className="py-2 text-justify">
            The idea to increase sales via e-commerce platform, as analyzed in
            the Chapter II, is a vital to the company business development if it
            does not want to be left behind in the evolving
            technology-integrated retails market. Affiliate marketing strategy
            which will be implemented in this platform will expectedly make a
            radical growth of the Company business in few years to come.
          </p>
          <p className="py-2 text-justify">
            The key success factor to this project is to make this platform
            special and differentiated from other players already in the market
            <span className="relative inline cursor-pointer group">
              <span className="text-blue-500 "> (1)</span>
              <span className="absolute p-3 mx-auto mt-5 text-xs italic text-blue-700 transition-opacity bg-gray-400 rounded-md opacity-0 w-96 -translate-x-1/2translate-y-2 group-hover:opacity-100 left-1/2">
                Due to the confidentiality of the information of the platform to
                be developed and launched, it is advised by the Company not to
                disclose the main features in the context of this writing.
              </span>
            </span>
            . The main features of this project can be summarized and
            illustrated in the preliminary Business Model Canvas, which will be
            developed more or less independently from existing business and
            support each other with the existing business model, below:
          </p>
          <div className="py-2">
            <img
              className="w-full py-2 mx-auto"
              src="image/alternatives-image001.png"
              alt="Alternatives"
            />
          </div>
          <p className="py-2 text-justify">
            This platform is not to directly complete with major players such as
            Shopee, Lazada or Access Trade and so on, but is to take advantage
            of the existing strengths (product identity, coverage, websites and
            customers’ data) and resources of the Company to offer better
            opportunities for the customers to make better business (i.e.: earn
            income as Publishers) and/or smart consumption (i.e.: enjoy more
            discounts as Members).
          </p>
          <p className="py-2 text-justify">
            The development cost of this platform is estimated at 15billion VND
            with an annual maintenance cost at 10%. The development time is one
            year. The profitability of this project is summarized below:
          </p>
        </section>
        <p className="py-2 text-justify">
          <i>Table 8:</i> Profitability of the project
        </p>
        <div className="w-full py-2 md:px-2">
          <div className="overflow-hidden border-b border-gray-200 rounded shadow">
            <table className="min-w-full bg-white">
              <thead className="text-white bg-[#4C90CA]">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-left uppercase">
                    Profitability
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                    Scenario 1: High (quarter growth rate: 20%, discount rate:
                    10%)
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold text-center uppercase">
                    Scenario 2: Low (quarter growth rate: 10%, discount rate:
                    15%)
                  </th>
                </tr>
              </thead>
              <tbody className="text-white bg-[#33576F]">
                <tr>
                  <td className="px-4 py-3 text-left">NPV (million VND)</td>
                  <td className="px-4 py-3 text-center ">9,134</td>
                  <td className="px-4 py-3 text-center ">3,213</td>
                </tr>
                <tr className="text-white bg-[#2C404E]">
                  <td className="px-4 py-3 text-left">
                    Payback (no. of years)
                  </td>
                  <td className="px-4 py-3 text-center ">3</td>
                  <td className="px-4 py-3 text-center ">4</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-left">Investment decision?</td>
                  <td className="px-4 py-3 text-center ">Yes</td>
                  <td className="px-4 py-3 text-center ">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="py-2 !text-xs text-justify">
            (<i>Notes</i>: Working calculations in the Appendix 3)
          </p>
        </div>
      </div>
    </>
  );
}
