"use server";
import HeadTitle from "@/components/typography/head";
import AddDialog from "./add-task";
import TableTasks from "./table-task";
import { listTaskApi } from "@/api/task-api/api";

export default async function Detail({ params }: { params: { id: string } }) {
  const id = params.id;

  const data = await listTaskApi(id)
  return (
    <>
      <div className="flex justify-between">
        <HeadTitle>Tasks</HeadTitle>
      </div>
      <div className="flex justify-end my-3  border-t border-solid border-slate-400 p-1">
        <AddDialog 
          projectId={id}
        />
      </div>
      <TableTasks
        data={data}
        projectId={id}
      />
    </>
  );
}
