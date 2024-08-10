'use client'
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil } from "lucide-react";
import { Button } from "./ui/button";
import DialogEditProject from "./dialog/dialog-edit";

interface Props {
  item : ListProject
}

export default function ListAction({item}:Props) {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      <DialogEditProject
        isOpen={isEdit}
        setIsOpen={setIsEdit}
        item={item}
      />
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <button className="w-full" type="button" onClick={() => setIsEdit(true)}>
              <DropdownMenuItem className="hover:bg-slate-100">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
            </button>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
