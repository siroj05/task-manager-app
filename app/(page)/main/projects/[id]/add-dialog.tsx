'use client'
import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ButtonAct from "@/components/button-action";
import { createProject } from "@/api/project-api/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setIsOpen } from "../slice/projectSlice";
import { DialogAdd } from "@/components/dialog/dialog-add";
import { SelectStatus } from "@/components/dropdown/select-status";
import { SelectPriority } from "@/components/dropdown/select-priority";
import { addTaskApi } from "@/api/task-api/api";

interface Props {
  projectId : string
}

export default function AddDialog(
  {
    projectId
  }:Props
) {
  const ref = useRef<HTMLFormElement>(null)
  const [err, setErr] = useState('')
  const dispatch : AppDispatch = useDispatch()
  const status = useSelector((state : RootState) => state.dropdown.status)
  const priority = useSelector((state : RootState) => state.dropdown.priority)

  return (
    <DialogAdd
      title="Add Task"
    >
      <form 
        ref={ref}
        action={
        async (formData) => {
          {
            const res = await addTaskApi(formData)
            if(res?.success){
              dispatch(setIsOpen(false))
              ref.current?.reset() 
            }else{
              setErr(res?.message)
            }
          }
        }
      }>
        <input type="hidden" name="status" value={status} />
        <input type="hidden" name="priority" value={priority} />
        <input type="hidden" name="projectId" value={projectId} />
        <div className="flex flex-col gap-1">
          <Label htmlFor="project">Task Name</Label>
          <Input name="task" id="task" placeholder="Write tasks name"/>
          <div className="flex justify-center gap-1">
            <div>
              <Label className="block my-1">Status</Label>
              <SelectStatus/>
            </div>
            <div>
              <Label className="block my-1">Priority</Label>
              <SelectPriority/>
            </div>
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
