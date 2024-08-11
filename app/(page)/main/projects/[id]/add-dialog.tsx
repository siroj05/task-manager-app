'use client'
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ButtonAct from "@/components/button-action";
import { createProject } from "@/api/project-api/api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setIsOpen } from "../slice/projectSlice";
import { DialogAdd } from "@/components/dialog/dialog-add";
import { SelectStatus } from "@/components/select-status";


export default function AddDialog() {
  const ref = useRef<HTMLFormElement>(null)
  const [err, setErr] = useState('')
  const dispatch : AppDispatch = useDispatch()
  return (
    <DialogAdd
      title="Add Task"
    >
      <form 
        ref={ref}
        action={
        async (formData) => {
          {
            // const res = await createProject(formData)
            // if(res.error)setErr(res.error)
            // else setErr('')
            dispatch(setIsOpen(false))
            ref.current?.reset() 
          }
        }
      }>
        <div className="flex flex-col gap-1">
          <Label htmlFor="project">Task Name</Label>
          <Input name="task" id="task" placeholder="Write tasks name"/>
          <div>
            <Label className="block my-1">Status</Label>
            <SelectStatus/>
          </div>
          <div className="flex justify-end">
            <ButtonAct
              className="bg-indigo-500 hover:bg-indigo-700 mt-3 text-white rounded-none w-20"
              type="submit"
            >
              Save
            </ButtonAct>
          </div>
        </div>
      </form>
    </DialogAdd>
  );
}
