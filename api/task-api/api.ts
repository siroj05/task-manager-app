'use server'

import { url } from "@/utils/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const addTaskApi = async (FormData:FormData) => {
  const task = FormData.get('task') as string
  const status = FormData.get('status') as string
  const priority = FormData.get('priority') as string
  const projectId = FormData.get('projectId') as string
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const req = {
    projectId : projectId,
    taskName : task,
    status : status,
    priority : priority,
  }
  const res = await fetch(`${url}/task/addTask`, {
    method : 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req),
  })
  const data = await res.json()
  if(res.status == 200){
    revalidatePath(`/main/projects/${projectId}`);
    return data
  }
  else{
    return data
  }
}

export const listTaskApi = async (projectId : string) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const res = await fetch(`${url}/task/tasks/${projectId}`,{
    method : 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  return data
}