
import { NextSeo } from "next-seo";


export default function Alternatives() {
    return (
        <>
            {/* SEO */}
            <NextSeo
                title="Tran Thanh Binh - Alternatives"
                description="Tran Thanh Binh - Alternatives"
                openGraph={{
                    url: '/',
                    title: 'Tran Thanh Binh - Alternatives',
                    description: '',
                    images: [
                        {
                            url: 'home-page.png',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                            type: 'image/jpeg',
                        },
                        {
                            url: 'home-page.png',
                            width: 1200,
                            height: 800,
                            alt: 'Og Image Alt Second',
                            type: 'image/jpeg',
                        }
                    ],
                    siteName: 'Tran Thanh Binh - Alternatives',
                }}
            />
            {/* Top Body Home Page */}

            Tran Thanh Binh - Alternatives
        </>
    )
}
