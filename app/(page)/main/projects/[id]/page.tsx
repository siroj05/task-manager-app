"use server";
import HeadTitle from "@/components/typography/head";
import AddDialog from "./add-dialog";
import TableTasks from "./table-task";
import { listTaskApi } from "@/api/task-api/api";

// const data = [
//   {
//     task_id: 1,
//     task_name: "Design Database Schema",
//     task_description: "Create the initial database schema for the project.",
//     task_status: "In Progress",
//     priority: "High",
//     due_date: "2024-08-15",
//     task_created_by: 2,
//     task_created_at: "2024-08-01T10:00:00Z",
//     subtasks: [
//       {
//         subtask_id: 1,
//         subtask_name: "Identify Entities",
//         subtask_description: "List all the entities needed for the project.",
//         subtask_status: "Done",
//         priority: "High",
//         subtask_created_by: 3,
//         subtask_created_at: "2024-08-01T11:00:00Z",
//       },
//       {
//         subtask_id: 2,
//         subtask_name: "Define Relationships",
//         subtask_description: "Establish relationships between entities.",
//         subtask_status: "In Progress",
//         priority: "Low",
//         subtask_created_by: 2,
//         subtask_created_at: "2024-08-01T12:00:00Z",
//       },
//     ],
//   },
//   {
//     task_id: 2,
//     task_name: "Develop API Endpoints",
//     task_description: "Create the necessary API endpoints for user management.",
//     task_status: "To Do",
//     priority: "Medium",
//     due_date: "2024-08-20",
//     task_created_by: 2,
//     task_created_at: "2024-08-02T10:00:00Z",
//     subtasks: [
//       {
//         subtask_id: 3,
//         subtask_name: "Set Up Express Server",
//         subtask_description: "Initialize the Express server for the API.",
//         subtask_status: "To Do",
//         priority: "Medium",
//         subtask_created_by: 3,
//         subtask_created_at: "2024-08-02T11:00:00Z",
//       },
//     ],
//   },
// ];

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
      />
    </>
  );
}
