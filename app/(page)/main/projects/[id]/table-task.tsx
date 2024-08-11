'use client'
import { colorStatus } from '@/app/custom-hooks/color-status';
import { getPriorityIconWithLabel, PriorityIcon } from '@/app/custom-hooks/get-priority-icon';
import { ChevronDown, ChevronUp, Circle, Plus } from 'lucide-react';
import React, { useState } from 'react'
import TableSubTasks from './table-sub-task';

interface Props{
  data : any
}

export default function TableTasks(
  {data}:Props
) {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const toggle = (itemId: number) => {
    setIsOpen((prev) => (prev === itemId ? null : itemId));
  };
  return (
    <div>
      {data.length > 0 ? (
        data.map((item: any, i: number) => (
          <div key={i}>
            <div className="bg-white border w-full text-slate-500 text-sm p-1 flex">
              <button
                onClick={() => toggle(item.task_id)}
                className="hover:bg-slate-200 rounded-sm"
              >
                {isOpen === item.task_id ? (
                  <ChevronDown className="my-auto w-4 h-4" />
                ) : (
                  <ChevronUp className="my-auto w-4 h-4" />
                )}
              </button>
              <div className="mx-1">
                <div className="flex gap-1">
                  <button
                    className={`${colorStatus(
                      item.task_status
                    )} text-white rounded-sm px-2 flex`}
                  >
                    <Circle className="w-3 h-3 my-auto mr-1" />
                    {item.task_status}
                  </button>
                  {getPriorityIconWithLabel(item.priority)}
                  <button className="flex hover:bg-slate-200 px-1 rounded-sm">
                    <Plus className="w-4 h-4 my-auto" />
                    Add..
                  </button>
                </div>
                <div className="text-black font-semibold">{item.task_name}</div>
              </div>
            </div>
            {/* subtasks */}
            {
              isOpen === item.task_id && 
              <TableSubTasks
                item={item}
              />
            }
          </div>
        ))
      ) : (
        <div className="w-full border-dashed text-center p-4 border-2 border-slate-500">
          No Tasks
        </div>
      )}
    </div>
  )
}
