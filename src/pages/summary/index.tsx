import { NextSeo } from "next-seo";
import ReactTooltip from "react-tooltip";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh | Summary"
        description=""
        openGraph={{
          url: "/summary",
          title: "Tran Thanh Binh | Summary",
          description: "",
          images: [
            {
              url: "/image/summary-page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/summary-page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Tran Thanh Binh | Summary",
        }}
      />
      {/* Top Body Home Page */}

      <div className="container p-4 mx-auto">
        <section className="py-4">
          <p className="py-2 text-justify">
            Smart Marketing operates in the distribution industry of various
            products which are quite suitable for Vietnam consumers. It has a
            quite wide range of distribution networks across the country and
            running a traditional marketing strategy (sales programs mainly).
            The pandemic has hit the market demand force hard and caused the
            Company sales to drop dramatically in the first half of 2023.
          </p>
          <p className="py-2 text-justify">
            The study has looked into the Company issue and proposed some
            alternatives in order to boost sales up and to some certain extent
            to improve the financial situation of the Company. Some alternatives
            can be immediately implemented without much initial investment cost
            which will not cause the Company situation worse if the results are
            not so as expected. The key alternative proposes the Company to
            design and launch a new marketing business strategy in addition to
            the existing one which, prudently, should be communicated clearly to
            the Company management for validation and revision.
          </p>
          <p className="py-2 text-justify">
            Below is the list of the alternatives:
          </p>

          <p className="py-2 text-justify">
            <i>Table 11:</i> Proposed alternatives
          </p>
          <div  className="w-full py-2 max-[450px]:text-[0.55rem] text-base md:px-2">
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-2/3 px-1 py-1 md:px-4 md:py-3 font-semibold text-left uppercase">
                      Alternatives
                    </th>
                    <th className="px-1 py-1 md:px-4 md:py-3 font-semibold text-center uppercase">
                      Execution
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">
                      <b>Alternative 1:</b> Organization restructure
                    </td>
                    <td className="px-4 py-3 text-center ">Immediate</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">
                      <b>Alternative 2:</b> Optimization of high-low margin
                      products
                    </td>
                    <td className="px-4 py-3 text-center ">Immediate</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">
                      <b>Alternative 3:</b> Sale programs
                    </td>
                    <td className="px-4 py-3 text-center ">Immediate</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-4 py-3 text-left">
                      <b>Alternative 4:</b> Increase the coverage of key product
                      categories
                    </td>
                    <td className="px-4 py-3 text-center ">Immediate</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-4 py-3 text-left">
                      <b>Alternative 5:</b> Launch a new affiliate marketing
                      platform project
                    </td>
                    <td className="px-4 py-3 text-center ">Proposed plan</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
