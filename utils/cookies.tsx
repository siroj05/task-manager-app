'use server'
import { cookies } from 'next/headers'

async function deleteCookies() {
  cookies().delete('token')
  cookies().delete('fullname')
  cookies().delete('userId')
}

export default deleteCookies