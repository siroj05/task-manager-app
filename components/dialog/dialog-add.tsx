'use client'
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { AppDispatch } from "@/store/store";
import { setIsOpen, reset } from "@/app/(page)/main/projects/slice/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  children: ReactNode;
  title : string
}

export function DialogAdd({ 
  children,  
  title
}: Props) {

  const dispatch : AppDispatch = useDispatch()
  const isOpen = useSelector((state : RootState) => state.open.isOpen)

  useEffect(() => {
    dispatch(reset())
  },[])

  return (
    <>
      <Button size={'sm'} onClick={() => dispatch(setIsOpen(true))} className="bg-indigo-500 hover:bg-indigo-700 p-2 rounded-none">
        <Plus className="w-4 h-4 text-xs" />
        {title}
      </Button>
      <div
      onClick={e => e.stopPropagation()}
      className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 transition-colors ${isOpen? "visible bg-black/20" : "invisible"}`}>
        <div className={`p-6 bg-white w-[420px] rounded-sm shadow relative ${isOpen ? "opacity-100 duration-200 ease-out" : ""}`}>
          <button onClick={() => dispatch(setIsOpen(false))} className="absolute top-2 right-2 ">
            <X className="w-4 h-4 text-black"/>
          </button>
          <div className="font-semibold">{title}</div>
          <div className="my-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
