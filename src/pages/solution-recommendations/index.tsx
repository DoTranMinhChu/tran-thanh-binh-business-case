import { NextSeo } from "next-seo";
import ReactTooltip from "react-tooltip";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh | Solution Recommendations"
        description=""
        openGraph={{
          url: "/solution-recommendations",
          title: "Tran Thanh Binh | Solution Recommendations",
          description: "",
          images: [
            {
              url: "/image/solution-recommendations-page.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "/image/solution-recommendations-page.png",
              width: 1200,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
          ],
          siteName: "Tran Thanh Binh | Solution Recommendations",
        }}
      />
      {/* Top Body Home Page */}

      <div className="container p-4 mx-auto">
        <section className="py-4">
          <p className="py-2 text-justify">
            Force field analysis is the decision-making tool used to evaluate
            the feasibility of the <span className="text-red-700"> five</span>{" "}
            alternatives. The weight of each proposal is calculated by taking
            the difference between the total scores of the forces supporting the
            proposal and the total scores of the forces against the proposal:
          </p>
          <p className="py-2 text-justify">
            <i>Table 9:</i> Force field analysis of the five alternatives
          </p>
          <div
            className="w-full py-2 md:text-base md:px-2"
            style={{
              fontSize: "0.5rem",
              lineHeight: "0.75rem",
            }}
          >
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white ">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-[40%] md:px-4 px-1 md:py-3 py-1  font-semibold text-left uppercase">
                      Driving forces
                    </th>
                    <th className="px-1 py-1 font-semibold text-center uppercase md:py-3 md:px-4">
                      Driving Score
                    </th>
                    <th className="px-1 py-1 font-semibold text-center uppercase md:py-3 md:px-4">
                      Restraint Score
                    </th>
                    <th className="w-[40%] md:px-4 px-1 md:py-3 py-1  font-semibold text-center uppercase ">
                      Restraint forces
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td
                      colSpan={4}
                      className="w-full px-1 py-1 text-center md:py-3 md:px-4"
                    >
                      Alternative 1: Organization restructure (Weight: 3)
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Low investment cost
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left ">
                      Possibly lack of sale staff at some certain periods
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Operational expense savings and less cashflow spending
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left ">
                      Not a long-term solution
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Easy to implement
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">2</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr>
                    <td
                      colSpan={4}
                      className="w-full px-1 py-1 text-center md:py-3 md:px-4"
                    >
                      Alternative 2: Optimization of high-low margin products
                      (Weight: 5)
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Reductions in cost spending and cash outflow of reduced
                      products
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">2</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left ">
                      Losing the current commercial position of reduced products
                      in the market that might cost the company more to re-build
                      up in the future if Company decides to add them back to
                      the basket.
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Move resources from the reduced products to boost sales of
                      the prioritized ones
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">2</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Reduce stock level (of slow-moving items) and reserve
                      space for other products
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Easy to implement
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>

                  <tr className="text-white bg-[#2C404E]">
                    <td
                      colSpan={4}
                      className="w-full px-1 py-1 text-center md:py-3 md:px-4"
                    >
                      Alternative 3: Sale programs (Weight: 3)
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Reduce stocks and especially slow-moving items which can
                      become out of fashion in future.
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Increase cash inflow
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Easy to implement
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td
                      colSpan={4}
                      className="w-full px-1 py-1 text-center md:py-3 md:px-4"
                    >
                      Alternative 4: Increase the coverage of key product
                      categories (Weight: 4)
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Increase more sales from key products{" "}
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">2</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left ">
                      Pay additional commission to MT
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Increase cash inflow
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">2</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Easy to implement
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4"></td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left "></td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td
                      colSpan={4}
                      className="w-full px-1 py-1 text-center md:py-3 md:px-4"
                    >
                      Alternative 5: Launch a new affiliate marketing platform
                      project (Weight: 7)
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      New business strategy with tremendous possibility to scale
                      up sales{" "}
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">5</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">1</td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left ">
                      Relatively high investment cost
                    </td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left">
                      Relatively fast pay back and profitability
                    </td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">5</td>
                    <td className="px-1 py-1 text-center md:py-3 md:px-4">2</td>
                    <td className="w-[40%] md:px-4 px-1 md:py-3 py-1 text-left ">
                      Quite complicated for operations
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="py-2 pt-6 text-justify">
            <i>Table 10:</i> Alternatives ranking
          </p>
          <div
            className="w-full py-2 md:text-base md:px-2"
            style={{
              fontSize: "0.5rem",
              lineHeight: "0.75rem",
            }}
          >
            <div className="overflow-hidden border-b border-gray-200 rounded shadow">
              <table className="min-w-full bg-white">
                <thead className="text-white bg-[#4C90CA]">
                  <tr>
                    <th className="w-2/3 px-1 py-1 font-semibold text-left uppercase md:px-4 md:py-3">
                      Alternatives
                    </th>
                    <th className="px-1 py-1 font-semibold text-center uppercase md:px-4 md:py-3">
                      Weight
                    </th>
                    <th className="px-1 py-1 font-semibold text-center uppercase md:px-4 md:py-3">
                      Rank
                    </th>
                  </tr>
                </thead>
                <tbody className="text-white bg-[#33576F]">
                  <tr>
                    <td className="w-1/3 px-1 py-1 text-left md:px-4 md:py-3">
                      Alternative 1: Organization restructure
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3 ">
                      3
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3">4</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-1 py-1 text-left md:px-4 md:py-3">
                      Alternative 2: Optimization of high-low margin products
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3 ">
                      5
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3">2</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-1 py-1 text-left md:px-4 md:py-3">
                      Alternative 3: Sale programs
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3 ">
                      3
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3">4</td>
                  </tr>
                  <tr className="text-white bg-[#2C404E]">
                    <td className="w-1/3 px-1 py-1 text-left md:px-4 md:py-3">
                      Alternative 4: Increase the coverage of key product
                      categories
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3 ">
                      4
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3">3</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 px-1 py-1 text-left md:px-4 md:py-3">
                      Alternative 5: Launch a new affiliate marketing platform
                      project
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3 ">
                      7
                    </td>
                    <td className="px-1 py-1 text-center md:px-4 md:py-3">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="py-2 text-justify">
            The force field analysis indicates that all alternatives are worth
            for execution. Next chapter will work out the execution plan.
          </p>
        </section>
      </div>
    </>
  );
}
