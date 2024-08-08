'use server'

import { url } from "@/utils/utils"
import { cookies } from "next/headers"

// ////////////////////////////SIGNUP////////////////////////////////
export const signUpApi = async (FormData:FormData) => {
  const fullname = FormData.get('fullname') as string
  const username = FormData.get('username') as string
  const email = FormData.get('email') as string
  const password = FormData.get('password') as string

  let users = {
    fullname : fullname,
    username : username,
    email: email,
    password:password
  }

  const res = await fetch(`${url}/auth/signup`,{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(users)
  })
  const data = await res.json()
  if(res.status == 201){
    return data
  }
  else{
    return data
  }
}


/////////////////////////SIGNIN/////////////////////////////////
export const signInApi = async (FormData:FormData) => {

  const username = FormData.get('username') as string
  const password = FormData.get('password') as string

  const users = {
    username : username,
    password : password
  }

  const res = await fetch(`${url}/auth/signin`,{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(users)
  })

  const data = await res.json()
  const maxAge = 60*60*1000
  if(data.success){
    cookies().set('token', data.token, {expires: Date.now() + maxAge})
    cookies().set('fullname', data.fullname, {expires: Date.now() + maxAge})
    cookies().set('userId', data.userId, {expires: Date.now() + maxAge})
    return data
  }

  return data

}