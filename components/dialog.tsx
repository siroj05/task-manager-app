'use client'
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  isOpen : boolean
  setIsOpen : (value : boolean) => void
}

export function PopupCreateProject({ 
  children,  
  isOpen = false,
  setIsOpen
}: Props) {

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="bg-indigo-800 hover:bg-indigo-700">
        <Plus className="w-4 h-4" />
        Create Project
      </Button>
      <div
      onClick={e => e.stopPropagation()}
      className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 transition-colors ${isOpen? "visible bg-black/20" : "invisible"}`}>
        <div className={`p-6 bg-white w-[420px] rounded-sm shadow ${isOpen ? "opacity-100 duration-200 ease-out" : ""}`}>
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2">
            <X className="w-4 h-4"/>
          </button>
          <div className="font-semibold">Create Project</div>
          <div className="my-5">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
