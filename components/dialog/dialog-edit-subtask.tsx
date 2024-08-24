"use client";
import { Plus, X } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { AppDispatch } from "@/store/store";
import { reset as resetDropdown } from "../dropdown/slice/dropdownSlice";
import { useDispatch } from "react-redux";

interface Props {
  children: ReactNode;
  title: string;
  isOpen : boolean
  setIsOpen : (value : boolean) => void
}

export function DialogEditAddSubtask(
  { 
    children, 
    title,
    isOpen = false,
    setIsOpen 
  }: Props) {
  const dispatch : AppDispatch = useDispatch()
  useEffect(() => {
    !isOpen && dispatch(resetDropdown());
  }, [isOpen]);

  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 transition-colors ${
          isOpen ? "visible bg-black/20" : "invisible"
        }`}
      >
        <div
          className={`p-6 bg-white w-[420px] rounded-sm shadow relative ${
            isOpen ? "opacity-100 duration-200 ease-out" : ""
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 "
          >
            <X className="w-4 h-4 text-black" />
          </button>
          <div className="font-semibold">{title}</div>
          <div className="my-5">{children}</div>
        </div>
      </div>
    </>
  );
}
