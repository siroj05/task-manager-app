"use server";

import { url } from "@/utils/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createProject = async (FormData: FormData) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const projectTitle = FormData.get("project") as string;

  const req = {
    title: projectTitle,
  };

  const res = await fetch(`${url}/project/addProject`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
  if (res.status === 200) {
    revalidatePath("/main/projects");
    return data;
  }
  else{
    return data;
  }
};

export const projectApi = async (token: string) => {
  const res = await fetch(`${url}/project/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (res.status == 200) return data;
};

export const editProject = async (FormData: FormData) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const title = FormData.get("project") as string;
  const id = FormData.get("id") as string;
  const req = { title: title };
  const res = await fetch(`${url}/project/editProject/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(req),
  });
  const data = await res.json();
  revalidatePath("/main/projects");
  return data;
};
