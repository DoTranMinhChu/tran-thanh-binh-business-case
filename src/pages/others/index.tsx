import { NextSeo } from "next-seo";
import ReactTooltip from "react-tooltip";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh | Others"
        description=""
        openGraph={{
          url: "/others",
          title: "Tran Thanh Binh | Others",
          description: "",
          images: [
            {
              url: "/image/others-page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/others-page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Tran Thanh Binh | Others",
        }}
      />
      {/* Top Body Home Page */}

      <div className="container p-4 mx-auto">
        <section className="py-4">
          <h1 className="text-sm font-bold">REFERENCE</h1>
          <hr className="mt-4 h-2 w-[70%] border-black" />
          <ul className="py-2 pl-4 list-decimal">
            <li className="text-justify">
              <p>
                Julius Solichin, Mohammad Hamsal, Asnan Furinto and Rano
                Kartono. A literature review on Affiliate Marketing in Ecommerce
                (2022)
              </p>
            </li>
          </ul>

          <h1 className="mt-40 text-sm font-bold">APPENDIX</h1>
          <hr className="mt-4 h-2 w-[70%] border-black" />
          <h1 className="py-2">
            <b>Appendix 1:</b> P&L from Publishers forecast for 3 months:
          </h1>
          <div className="py-2 w-fit md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="bg-white ">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase"></th>
                    <th className="px-4 py-3 text-sm font-semibold text-right uppercase">
                      Million VND
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="px-4 py-3 text-left">No. of publishers</td>
                    <td className="px-4 py-3 text-right">500</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="px-4 py-3 text-left">Revenue</td>
                    <td className="px-4 py-3 text-right">4.938</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-left">Income</td>
                    <td className="px-4 py-3 text-right">444</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="px-4 py-3 text-left">% margin</td>
                    <td className="px-4 py-3 text-right">9%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h1 className="py-2">
            <b>Appendix 2:</b> Forecast for P&L of the whole platform for 3
            months:
          </h1>
          <div className="py-2 w-fit md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="bg-white ">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-center uppercase"></th>
                    <th className="px-4 py-3 text-sm font-semibold text-right uppercase">
                      Million VND
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="px-4 py-3 text-left">Revenue</td>
                    <td className="px-4 py-3 text-right">25.000</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="px-4 py-3 text-left">Gross margin (10%)</td>
                    <td className="px-4 py-3 text-right">2.500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-left">Indirect cost</td>
                    <td className="px-4 py-3 text-right">900</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="px-4 py-3 text-left">Sale & marketing</td>
                    <td className="px-4 py-3 text-right">700</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-left">Others</td>
                    <td className="px-4 py-3 text-right">100</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="px-4 py-3 text-left">EBT</td>
                    <td className="px-4 py-3 text-right">800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-left">Margin</td>
                    <td className="px-4 py-3 text-right">3.2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h1 className="py-2">
            <b>Appendix 3:</b> NPV analysis and payback
          </h1>
          <p className="py-2 text-justify">
            Cash-inflows forecasted (annualized from the quarter P&L in Appendix
            2)
          </p>
          <div className="py-2">
            <img
              className="w-full py-2 mx-auto"
              src="image/others-image001.png"
              alt="Others"
            />
          </div>
          <p className="py-2 text-justify">NPV analysis:</p>
          <div className="py-2">
            <img
              className="w-full py-2 mx-auto"
              src="image/others-image002.png"
              alt="Others"
            />
          </div>
        </section>
      </div>
    </>
  );
}
