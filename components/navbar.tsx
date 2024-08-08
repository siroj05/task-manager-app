"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";
import ActionLogout from "./action-logout";
interface Props {
  fullname: string;
}

export default function Navbar({ fullname }: Props) {
  const firstChar = fullname.split("")[0];
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className=" bg-indigo-900 fixed z-50 w-full">
      <div className="flex justify-end text-white p-2 lg:mx-20">
        <div className="flex items-center justify-center gap-2">
          <div className="border-r border-l p-1 mx-1">
            <Bell className="w-5 h-5" />
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="bg-indigo-600 w-8 h-8 text-center rounded-full flex justify-center"
            >
              <div className="my-auto">{firstChar?.toUpperCase()}</div>
            </button>
            {open && (
              <div className="absolute bg-white w-[120px] -right-3 text-black p-2 rounded-sm text-sm">
                <div>
                  <ActionLogout/>
                </div>
              </div>
            )}
          </div>
          <div>{fullname}</div>
        </div>
      </div>
    </div>
  );
}
