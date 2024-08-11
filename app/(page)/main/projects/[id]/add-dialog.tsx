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
            const res = await createProject(formData)
            if(res.error)setErr(res.error)
            else setErr('')
            dispatch(setIsOpen(!res.success))
            ref.current?.reset() 
          }
        }
      }>
        <Label htmlFor="project">Task Name</Label>
        <Input name="project" id="project" placeholder="Write project title"/>
        {
          err &&
          <Label className="text-xs text-red-700">{err}</Label>
        }
        <div className="flex justify-end">
          <ButtonAct
            className="bg-indigo-500 hover:bg-indigo-700 mt-3 text-white rounded-none w-20"
            type="submit"
          >
            Save
          </ButtonAct>
        </div>
      </form>
    </DialogAdd>
  );
}
