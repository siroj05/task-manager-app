"use server";
import HeadTitle from "@/components/typography/head";
import ListProjects from "./table";
import { projectApi } from "@/api/project-api/api";
import { cookies } from "next/headers";
import AddDialog from "./add-dialog";

export default async function Tasks() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value

  const list = await projectApi(token!)

  return (
    <>
      <div className="flex justify-between">
        <HeadTitle>Tasks</HeadTitle>
        <AddDialog/>
      </div>
      <div className="bg-white my-10">
        <ListProjects
          list={list}
        />
      </div>
    </>
  );
}
