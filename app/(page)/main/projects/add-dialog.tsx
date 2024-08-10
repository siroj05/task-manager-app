'use client'
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ButtonAct from "@/components/button-action";
import { createProject } from "@/api/project-api/api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { setIsOpen } from "./slice/projectSlice";
import { DialogAddProject } from "@/components/dialog/dialog-add";


export default function AddDialog() {
  const ref = useRef<HTMLFormElement>(null)
  const [err, setErr] = useState('')
  const dispatch : AppDispatch = useDispatch()
  return (
    <DialogAddProject>
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
        <Label htmlFor="project">Project Title</Label>
        <Input name="project" id="project" placeholder="Write project title"/>
        {
          err &&
          <Label className="text-xs text-red-700">{err}</Label>
        }
        <div className="flex justify-end">
          <ButtonAct
            className="bg-indigo-800 hover:bg-indigo-700 mt-3"
            type="submit"
          >
            Save
          </ButtonAct>
        </div>
      </form>
    </DialogAddProject>
  );
}
