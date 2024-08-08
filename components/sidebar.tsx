'use client'
import { LayoutDashboard,ChevronDown ,Logs } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
export default function Sidebar() {

  const current = usePathname()
  

  return (
    <div className="w-[250px] h-screen sticky top-0 z-40 bg-white text-black p-4">
      <div className="flex flex-col mt-[60px] gap-4 overflow-y-auto">
          <Link href={"/main"} className={`hover:bg-indigo-900 text-black hover:text-white rounded-xl p-1 transition-all duration-300 ${
            current == '/main'? 'bg-indigo-900 text-white' : ''
          }`}>
            <div className=" flex  p-1  rounded-md">
              <LayoutDashboard />
              <div className="my-auto mx-3">Dashboard</div>
            </div>
          </Link>
          <Link href={"/main/projects"} className={`hover:bg-indigo-900 text-black hover:text-white rounded-xl p-1 transition-all duration-300 ${
            current == '/main/projects'? 'bg-indigo-900 text-white' : ''
          }`}>
            <div className="flex justify-between  p-1  rounded-md">
              <div className="flex">
                <Logs /><div className="my-auto mx-3">Projects</div>
              </div>
              <div>
                <ChevronDown/>
              </div>
            </div>
          </Link>
      </div>
    </div>
  );
}
