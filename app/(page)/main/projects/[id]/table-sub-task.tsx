"use client";
import { colorStatus } from "@/app/custom-hooks/color-status";
import { getPriorityIconWithLabel } from "@/app/custom-hooks/get-priority-icon";
import { Circle } from "lucide-react";
import React from "react";

interface Props {
  item: any;
}

export default function TableSubTasks({ item }: Props) {
  return (
    <div className="bg-white p-1 mx-1">
      <table className="w-full ml-2">
        <tr>
          <th className="text-sm text-slate-500 font-normal border-b">
            <div className="text-left">Name</div>
          </th>
          <th className="text-sm text-slate-500 font-normal border-b">
            <div className="text-left">Priority</div>
          </th>
        </tr>
        {item.subtasks.map((sub: any, i: number) => (
          <>
            <tr key={i} className="ml-8 text-sm border-b">
              <td className="flex">
                <Circle
                  className={`text-white rounded-full w-3 h-3 my-auto mr-1 ${colorStatus(
                    sub.subtask_status
                  )}`}
                />
                {sub.subtask_name}
              </td>
              <td className="">{getPriorityIconWithLabel(sub.priority)}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}
