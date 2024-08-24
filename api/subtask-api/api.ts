'use server'

import { url } from "@/utils/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const saveSubtask = async (FormData : FormData) => {
  const subtask = FormData.get('subtask') as string
  const status = FormData.get('status') as string
  const priority = FormData.get('priority') as string
  const description = FormData.get('description') as string
  const taskId = FormData.get('taskId') as string
  const projectId = FormData.get('projectId') as string
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const req = {
    taskId : taskId,
    subtaskName : subtask,
    description : description,
    status : status,
    priority : priority
  }
  const res = await fetch(`${url}/subtask/save`, {
    method : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req)
  })
  const data = await res.json()
  if(res.status === 200){
    revalidatePath(`main/projects/${projectId}`)
    return data
  }
  return data
}

export const editSubtask = async (FormData:FormData) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const subtask = FormData.get('subtask') as string
  const status = FormData.get('status') as string
  const priority = FormData.get('priority') as string
  const description = FormData.get('description') as string
  const taskId = FormData.get('taskId') as string
  const subtaskId = FormData.get('subtaskId') as string
  const projectId = FormData.get('projectId') as string

  const req =  {
    taskId : taskId,
    description : description,
    status : status,
    priority : priority,
    subtaskName : subtask
  }
  
  const res = await fetch(`${url}/subtask/edit/${subtaskId}`,{
    method : "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req)
  })

  const data = await res.json()
  revalidatePath(`main/projects/${projectId}`)

  return data
}