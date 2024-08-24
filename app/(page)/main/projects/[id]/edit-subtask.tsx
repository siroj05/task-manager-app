"use client";
import ButtonAct from "@/components/button-action";
import { DialogEditAddSubtask } from "@/components/dialog/dialog-edit-subtask";
import { SelectPriority } from "@/components/dropdown/select-priority";
import { SelectStatus } from "@/components/dropdown/select-status";
import { selectPriority, selectStatus } from "@/components/dropdown/slice/dropdownSlice";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  detail : any
  isOpen : boolean
  setIsOpen : (value : boolean) => void
}

export default function EditSubtask({ detail, isOpen, setIsOpen }: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const dispatch : AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(selectPriority(detail?.subtask_priority))
    dispatch(selectStatus(detail?.subtask_status))
  },[detail])

  return (
    <>
      <DialogEditAddSubtask
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Edit Subtask"
      >
        <form>
          <div className="flex flex-col gap-1">
            <Label htmlFor="subtask">Subtask Name</Label>
            <Input
              name="subtask"
              id="subtask"
              placeholder="Write subtask name"
              defaultValue={detail?.subtask_name}
            />
            <div className="flex justify-center gap-1">
              <div>
                <Label className="block my-1">Status</Label>
                <SelectStatus />
              </div>
              <div>
                <Label className="block my-1">Priority</Label>
                <SelectPriority />
              </div>
            </div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="Type yout description here.."
              defaultValue={detail?.subtask_description}
            />
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
      </DialogEditAddSubtask>
    </>
  );
}
