"use client";
import { colorStatus } from "@/app/custom-hooks/color-status";
import { getPriorityIconWithLabel } from "@/app/custom-hooks/get-priority-icon";
import { getDDMMYYY } from "@/app/custom-hooks/getDDMMYYY";
import { Circle } from "lucide-react";
import React, { useEffect, useState } from "react";
import EditSubtask from "./edit-subtask";

interface Props {
  item: any;
  projectId : string
}

export default function TableSubTasks({ item, projectId }: Props) {
  const [detail, setDetail] = useState<any>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = (event: any) => {
    setIsOpen(!isOpen)
    setDetail(event)
  };

  return (
    <>
      <div className="bg-white p-1 mx-1">
        <table className="w-full ml-2">
          <tr>
            <th className="text-sm text-slate-500 font-normal border-b">
              <div className="text-left">Name</div>
            </th>
            <th className="text-sm text-slate-500 font-normal border-b">
              <div className="text-left">Priority</div>
            </th>
            <th className="text-sm text-slate-500 font-normal border-b">
              <div className="text-left">Created At</div>
            </th>
          </tr>
          {item.subtasks.map((sub: any, i: number) => {
            return (
              <>
                <tr
                  key={i}
                  onClick={() => handleClick(sub)}
                  className="ml-8 text-sm border-b cursor-pointer hover:bg-gray-50"
                >
                  <td className="flex">
                    <Circle
                      className={`text-white rounded-full w-3 h-3 my-auto mr-1 ${colorStatus(
                        sub.subtask_status
                      )}`}
                    />
                    {sub.subtask_name}
                  </td>
                  <td className="">
                    {getPriorityIconWithLabel(sub.subtask_priority)}
                  </td>
                  <td>{getDDMMYYY(sub.subtask_created_at)}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
      {
        isOpen &&  
          <EditSubtask
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            detail={detail}
            projectId={projectId}
          />
      }
    </>
  );
}
