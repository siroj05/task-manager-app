import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ButtonAct from "@/components/button-action";
import { createProject } from "@/api/project-api/api";

interface Props {
  setIsOpen: (value : boolean) => void
  isOpen : boolean
}

export default function CreateProjectForm(
  {
    setIsOpen,
    isOpen
  } : Props
) {
  const ref = useRef<HTMLFormElement>(null)
  const [err, setErr] = useState('')
  return (
    <form 
      ref={ref}
      action={
      async (formData) => {
        {
          const res = await createProject(formData)
          if(res.error)setErr(res.error)
          else setErr('')
          setIsOpen(!res.success)
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
  );
}
