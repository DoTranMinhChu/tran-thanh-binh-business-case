import ItemMenuButton from "@/components/buttons/itemMenuButton.component";
import { menuNavbarList } from "@/data/menuNavbarLists";
import { IItemNavbar } from "@/interfaces/iItemNavbar.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"


export default function DefaultNavbar() {
    const router = useRouter()
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const handleToggleOpenMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }
    return (
        <>
            <nav className="relative shadow-md shadow-gray-400 ">
                <div className="relative z-50 px-2 mx-auto bg-gray-300 sm:px-6 lg:px-8">
                    <div className="relative flex items-center h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">

                            <button type="button" onClick={handleToggleOpenMobileMenu} className="inline-flex items-center p-2 text-black border-2 border-black rounded-md hover:bg-gray-900 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg className="hidden w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center flex-1 xl:items-stretch xl:justify-between ">
                            <div className="flex items-center flex-shrink-0">
                                <Link href="/" className="px-1 py-2 text-lg font-medium ">Business Case</Link>

                            </div>
                            <div className="hidden sm:ml-6 xl:block">
                                <div className="flex space-x-4">
                                    {
                                        menuNavbarList.map((item: IItemNavbar) => {

                                            return (
                                                <ItemMenuButton href={item.slug} className="px-3 py-2 text-lg font-medium" active={router.asPath == item.slug} key={item.name}>{item.title}</ItemMenuButton>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className={`duration-500 ease-in-out bg-gray-200 top-full left-0 right-0 h-fit overflow-hidden z-0  ${openMobileMenu ? "xl:!-top-96" : "!-top-96"} absolute shadow-md shadow-gray-400`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3">
                        {
                            menuNavbarList.map((item: IItemNavbar) => {

                                return (
                                    <ItemMenuButton href={item.slug} className="block px-3 py-2 text-xl font-medium" active={router.asPath == item.slug} key={item.name}>{item.title}</ItemMenuButton>
                                )
                            })
                        }
                    </div>
                </div>
            </nav >

        </>
    )
}