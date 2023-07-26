import { IProps } from "@/interfaces/iProps.interface";

import React, { ReactNode } from "react";
import DefaultNavbar from "../navbars/defaultNavbar";
import DefaultFooter from "../footers";




export default function DefaultLayout({ children, ...props }: IProps) {
    return (
        <div className="bg-gray-300 text-black">
            <DefaultNavbar />
            <main className="min-h-screen">{children}</main>
            <DefaultFooter/>
        </div>
    )
}