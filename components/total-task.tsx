'use client'
import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  title : string
  total : number
  Icon : LucideIcon
  color : string
}

export default function TotalTask(
  {
    title,
    total,
    Icon,
    color
  }:Props
) {
  return (
    <div className="inline-block rounded-sm text-sm xl:w-[380px] lg:w-[170px]  bg-white shadow-md">
      <div className="p-4 mx-2 flex justify-between">
        <div className="flex flex-col gap-1">
          <div>{title}</div>
          <div className="font-semibold lg:text-xs">{total}</div>
        </div>
        <div className={`my-auto ${color} p-2 rounded-full lg:text-xs`}>
          <Icon className="text-white lg:w-4 lg:h-4"/>
        </div>
      </div>
    </div>
  );
}
