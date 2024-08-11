"use server";
import { url } from "@/utils/utils";
import { cookies } from "next/headers";
export const dropdownStatus = async () => { 
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const res = await fetch(`${url}/dropdown/status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await res.json()

  return data
}
