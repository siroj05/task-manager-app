import React, { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { cookies } from "next/headers";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const cookiesStore = cookies()
  const fullname = cookiesStore.get('fullname')?.value
  return (
    <>
      <Navbar fullname={fullname!}/>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 mt-10 p-10">{children}</div>
      </div>
    </>
  );
}
