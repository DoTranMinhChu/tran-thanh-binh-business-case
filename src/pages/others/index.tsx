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
          
        </section>
      </div>
    </>
  );
}
