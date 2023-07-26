
import { NextSeo } from "next-seo";


export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Do Tran Minh Chu"
        description="Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,...."
        openGraph={{
          url: '/',
          title: 'Do Tran Minh Chu Portfolio',
          description: 'Do Tran Minh Chu Portfolio, introduce about projects, experiences, education,....',
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
      <section className="mx-auto tracking-wider">
        <div className="grid grid-cols-1 gap-12 p-4 py-12 sm:gap-40 sm:p-8 md:p-40 xl:px-48 sm:py-18 md:py-24 md:grid-cols-1 lg:grid-cols-2">
          Hello
        </div>
      </section>


    </>
  )
}
