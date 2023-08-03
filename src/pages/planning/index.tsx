import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh | Planning"
        description=""
        openGraph={{
          url: "/planning",
          title: "Tran Thanh Binh | Planning",
          description: "",
          images: [
            {
              url: "/image/planning-page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/planning-page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Tran Thanh Binh | Planning",
        }}
      />
      {/* Top Body Home Page */}

      <div className="container p-4 mx-auto">
        <section className="py-4">
          <p className="py-2 text-justify">
            Alternatives 1-4 are of short-term nature (within the 2nd half of
            2023), easy to implement and does not require investment cost, they
            can be started at any time as soon as the Company works out a more
            detailed plan for execution.
          </p>
          <p className="py-2 text-justify">
            Alternative 5 of developing an affiliate marketing platform would
            take longer time to prepare resources and execution with proposed
            phases below:
          </p>
          <div className="py-2">
            <img
              className="w-full px-12 py-2 mx-auto"
              src="image/planning-image001.png"
              alt="Literature review"
            />
          </div>
          <p className="py-2 text-justify">
            The project might face some following risks:
          </p>
          <h2 className="font-medium">Risk map</h2>
          <div className="py-2">
            <img
              className="w-full px-12 py-2 mx-auto"
              src="image/planning-image002.png"
              alt="Literature review"
            />
          </div>
          <h2 className="pt-4 font-medium">Risk mitigation</h2>
          <div
           className="w-full py-2 max-[400px]:text-[0.55rem] text-base md:px-2"
          >
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-1/5 px-1 py-1 font-semibold text-center uppercase md:px-4 md:py-3">
                      Code
                    </th>
                    <th className="px-1 py-1 font-semibold text-center uppercase md:px-4 md:py-3">
                      Risk description
                    </th>
                    <th className="px-1 py-1 font-semibold text-center uppercase md:px-4 md:py-3">
                      Measures
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="px-4 py-3 text-center">
                      <div className="w-8 h-8 bg-[#549E39] rounded-full"></div>
                    </td>
                    <td className="px-4 py-3 text-left">Lack of financing</td>
                    <td className="px-4 py-3 text-left ">
                      <p>
                        - To find investors who are experienced in this field
                        (preferred).
                      </p>
                      <p>
                        - To work with bank for financings (now it is easier to
                        get a loan thanks to the credit pushing policy from
                        banks)
                      </p>
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="px-4 py-3 text-center">
                      <div className="w-8 h-8 bg-[#FFC000] rounded-full"></div>
                    </td>
                    <td className="px-4 py-3 text-left">Progress delays </td>
                    <td className="px-4 py-3 text-left">
                      <p>
                        - To make a detailed progress schedule with close
                        follow-up
                      </p>
                      <p>
                        - Clear and regular communication with the teams for
                        identifying challenges possibly causing delays
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-center">
                      <div className="w-8 h-8 bg-[#FFFF00] rounded-full"></div>
                    </td>
                    <td className="px-4 py-3 text-left">
                      Development cost overrun
                    </td>
                    <td className="px-4 py-3 text-left ">
                      <p>
                        - To make a detailed CAPEX plan with commitments from
                        suppliers
                      </p>
                      <p>- To communicate the plan clearly to all parties</p>
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="justify-center px-4 py-3 ">
                      <div className=" flex text-center align-middle w-8 h-8 bg-[#FF0000] rounded-full"></div>
                    </td>
                    <td className="px-4 py-3 text-left">
                      Conversion rate lower than planned
                    </td>
                    <td className="px-4 py-3 text-left">
                      <p>
                        - To regularly revisit and analyze this data to react by
                        designing and launching more relevant marketing programs
                      </p>
                      <p>
                        - To make the platform convenient, attractive and easy
                        for users.
                      </p>
                      <p>
                        - To work with financial institutions to offer workable
                        financing programs for the buyers
                      </p>
                    </td>
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
