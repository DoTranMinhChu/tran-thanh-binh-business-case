import { IProps } from "@/interfaces/iProps.interface";

import React, { ReactNode } from "react";
import DefaultNavbar from "../navbars/defaultNavbar";
import DefaultFooter from "../footers";




export default function DefaultLayout({ children, ...props }: IProps) {
    return (
        <div className="text-black bg-gray-200">
            <DefaultNavbar />
            <main className="container min-h-screen m-auto">
                <section className="min-h-screen p-20 mx-auto my-12 tracking-wider bg-gray-100">

                    {children}
                </section>
            </main>
            <DefaultFooter />
        </div>
    )
}