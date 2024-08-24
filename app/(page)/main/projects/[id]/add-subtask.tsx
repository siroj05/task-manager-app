"use client"
import { saveSubtask } from '@/api/subtask-api/api'
import ButtonAct from '@/components/button-action'
import { DialogAddSubtask } from '@/components/dialog/dialog-add-subtask'
import { SelectPriority } from '@/components/dropdown/select-priority'
import { SelectStatus } from '@/components/dropdown/select-status'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RootState } from '@/store/store'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  taskId : number
  projectId : string
}

export default function AddSubtask(
  {
    taskId,
    projectId
  } : Props
) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLFormElement>(null)
  const status = useSelector((state : RootState) => state.dropdown.status)
  const priority = useSelector((state : RootState) => state.dropdown.priority)
  
  return (
    <>
      <DialogAddSubtask
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title='Add Subtask'
      >
        <form
          ref={ref}
          action={
            async (formData) => {
              const res = await saveSubtask(formData)
              if(res.success){
                ref.current?.reset()
                setIsOpen(!res.success)
              }
            }
          }
        >
        <input type="hidden" name="status" value={status} />
        <input type="hidden" name="priority" value={priority} />
        <input type="hidden" name="taskId" value={taskId} />
        <input type="hidden" name="projectId" value={projectId} />
        <div className="flex flex-col gap-1">
          <Label htmlFor="subtask">Subtask Name</Label>
          <Input name="subtask" id="subtask" placeholder="Write subtask name"/>
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
          <Label htmlFor='description'>Description</Label>
          <Textarea name='description' id='description' placeholder='Type yout description here..'/>
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
      </DialogAddSubtask>
    </>
  )
}
