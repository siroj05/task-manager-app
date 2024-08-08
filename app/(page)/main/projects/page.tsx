"use client";
import HeadTitle from "@/components/typography/head";
import React, { useState } from "react";

import { PopupCreateProject } from "@/components/dialog";
import CreateProjectForm from "./form";
import ListProjects from "./table";

export default function Tasks() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="flex justify-between">
        <HeadTitle>Tasks</HeadTitle>
        <PopupCreateProject
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <CreateProjectForm 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </PopupCreateProject>
      </div>
      <div className="bg-white my-10">
        <ListProjects/>
      </div>
    </>
  );
}
