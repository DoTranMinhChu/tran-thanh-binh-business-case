import { IProps } from "@/interfaces/iProps.interface";

import React, { ReactNode } from "react";
import DefaultNavbar from "../navbars/defaultNavbar";
import DefaultFooter from "../footers";

export default function DefaultLayout({ children, ...props }: IProps) {
  return (
    <div className="text-black bg-gray-200">
      <DefaultNavbar />
      <main className="container min-h-screen m-auto">
        <section className="min-h-screen text-sm mx-auto p-4 sm:p-12 md:p-20 sm:my-12 tracking-wider bg-gray-100 max-w-[884px]">
          {children}
        </section>
      </main>
      <DefaultFooter />
    </div>
  );
}
