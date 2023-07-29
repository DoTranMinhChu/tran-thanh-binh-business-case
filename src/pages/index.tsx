
import { NextSeo } from "next-seo";


export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Tran Thanh Binh"
        description=""
        openGraph={{
          url: '/',
          title: 'Tran Thanh Binh',
          description: '',
          images: [
            {
              url: '/image/home_page.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: '/image/home_page.png',
              width: 1200,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            }
          ],
          siteName: 'Tran Thanh Binh',
        }}
      />
      {/* Top Body Home Page */}


      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure a quaerat ut sapiente impedit eos deserunt ipsam. Nobis minus voluptate earum accusamus similique officiis ullam iusto consequuntur, aperiam voluptas.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium doloribus asperiores possimus suscipit, praesentium, expedita quidem, corporis consectetur doloremque molestiae. Sed natus voluptates qui iure impedit eos, a earum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis natus nesciunt cumque ex voluptatibus! Unde consequuntur, aperiam ipsum sequi commodi voluptas animi reiciendis exercitationem, rerum in est blanditiis minima!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi praesentium velit tenetur fugit soluta at, eveniet adipisci provident totam! Repellat temporibus eum quas at vero omnis illo ut quod pariatur.</p>


        <img src="https://vrdc2017.files.wordpress.com/2017/12/project-charter.png?w=720" alt="Project Charter" srcSet="https://vrdc2017.files.wordpress.com/2017/12/project-charter.png?w=720 720w, https://vrdc2017.files.wordpress.com/2017/12/project-charter.png?w=150 150w, https://vrdc2017.files.wordpress.com/2017/12/project-charter.png?w=300 300w, https://vrdc2017.files.wordpress.com/2017/12/project-charter.png?w=768 768w, https://vrdc2017.files.wordpress.com/2017/12/project-charter.png?w=1024 1024w, https://vrdc2017.files.wordpress.com/2017/12/project-charter.png 1265w" sizes="(max-width: 720px) 100vw, 720px" />

        <div className="w-full p-4 my-6 rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr>
                <th className="font-bold text-center">Value Proposition</th>
                <th className="font-bold text-center">Target Market</th>
                <th className="font-bold text-center">Customer Acquisition Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="block">

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugiat commodi recusandae officia architecto, quaerat modi veniam corporis labore hic autem eum inventore sint quod quae nemo dolore ad.

                </td>
                <td>

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugiat commodi recusandae officia architecto, quaerat modi veniam corporis labore hic autem eum inventore sint quod quae nemo dolore ad.

                  <table>
                    <thead>
                      <tr>
                        <th className="font-bold text-center"> Key Resources</th>

                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td className="block" colSpan={3}>

                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugiat commodi recusandae officia architecto, quaerat modi veniam corporis labore hic autem eum inventore sint quod quae nemo dolore ad.

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="block">

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugiat commodi recusandae officia architecto, quaerat modi veniam corporis labore hic autem eum inventore sint quod quae nemo dolore ad.

                </td>
              </tr>


              <tr>
                <td className="block" colSpan={3}></td>
              </tr>
              <tr>
                <td className="font-bold text-center">Key Activities:</td>
                <td className="font-bold text-center">Target Market</td>
                <td className="font-bold text-center">Key Partnerships</td>
              </tr>
              <tr>
                <td >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugiat commodi recusandae officia architecto, quaerat modi veniam corporis labore hic autem eum inventore sint quod quae nemo dolore ad.

                </td>
                <td >

                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugiat commodi recusandae officia architecto, quaerat modi veniam corporis labore hic autem eum inventore sint quod quae nemo dolore ad.

                </td>
                <td >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ullam fugiat commodi recusandae officia architecto, quaerat modi veniam corporis labore hic autem eum inventore sint quod quae nemo dolore ad.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <em>Figure 1: Business interaction among VRDC and its partners</em>
        <p>From the above figure, the waste is collected by trucks which are owned by VRDC meanwhile the barge service belongs to Thong Nhat Company that provides the service to Insee Hon Chong and has been so far the dominant service supplier in the field of river transportation. VRDC has its trucks collect the waste from the shoe manufacturers and issues the monthly bills to them. Insee has Thong Nhat send the barges to collect non-recyclable waste from VRDC and issues the monthly bills to VRDC. In general, VRDC&rsquo;s business model can be referred to the below table.</p>
        <em>Table 1: VRDC business model</em>

        <h3><strong>Study Motivation</strong></h3>
        <ul>
          <li><u>Current state acknowledgment</u>: the main goal of this step was to acquire the general awareness about which issue has been happening with how different related stakeholders perceive it. Two interviews were scheduled at VRDC and the review of historical records was conducted to understand how the issue first started and how different stakeholders who were impacted reacted to determine if the issue was really something that needed to study further and a business case study could be planned.</li>
          <li><u><a href="https://vrdc2017.wordpress.com/literature-review/" target="_blank" rel="noopener">Literature review</a></u>: as the outcomes from the current state analysis were more about operations management, especially about supply chain and warehouse management, the team decided to review further literature about how this types of operation have been applied and implemented in order to visualize how a good operation system looks like.</li>
          <li><u><a href="https://vrdc2017.wordpress.com/problem-refinement/">Problem refinement</a></u>: the operation process is mapped out and benchmarked with the good practices acquired from the stage of the literature review. Systemic deficiencies were then identified and solutions were developed to fix them.</li>
          <li><u><a href="https://vrdc2017.wordpress.com/alternatives/">Development of alternatives</a></u>: the main goal of this step is an effort to attack the problem via the multiple corners of the business.</li>
          <li><u><a href="https://vrdc2017.wordpress.com/solution-recommendations/">Solution recommendation</a></u>: under the context of the business, one alternative is selected and executed. Action plan is recommended together with the risk mitigation plan</li>
        </ul>

      </div >
    </>
  )
}
