"use client";
import React, { ReactNode } from "react";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import ButtonAct from "../button-action";
import { editProject } from "@/api/project-api/api";

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  item: ListProject;
}

export default function DialogEditProject({
  isOpen = false,
  setIsOpen,
  item,
}: Props) {
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
            className="absolute top-2 right-2"
          >
            <X className="w-4 h-4 text-black" />
          </button>
          <div className="text-left">
            <form action={
              async (formData) => {
                const res = await editProject(formData)
                setIsOpen(!res?.success)
              }
            }>
              <input type="hidden" name="id" value={item.project_id} />
              <Label htmlFor="project">Project Title</Label>
              <Input
                name="project"
                id="project"
                placeholder="Write project title"
                defaultValue={item.project_name}
              />
              {/* {err && <Label className="text-xs text-red-700">{err}</Label>} */}
              <div className="flex justify-end">
                <ButtonAct
                  className="bg-indigo-800 hover:bg-indigo-700 mt-3"
                  type="submit"
                >
                  Save
                </ButtonAct>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
