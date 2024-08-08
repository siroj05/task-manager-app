'use server'

import { url } from "@/utils/utils"
import { cookies } from "next/headers"

export const createProject = async (FormData:FormData) => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value
  const projectTitle = FormData.get('project') as string
  
  const req = {
    title : projectTitle
  }

  const res = await fetch(`${url}/project/addProject`,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
       Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req)
   
  })

  return await res.json()
}