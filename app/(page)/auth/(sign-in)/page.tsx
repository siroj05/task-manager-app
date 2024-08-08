'use client'
import { signInApi } from "@/api/auth/api";
import FormLogin from "./form";
import CardAuth from "@/components/card-auth";
import Link from "next/link";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isSet, setSet] = useState<any>()
  const route = useRouter()
  return (
    <>
      <CardAuth
        head="Sign In"
      >
        <form 
        className="w-full"
        action={
          async (formData) => {
            const res = await signInApi(formData)
            setSet(res)
            if(res.success){
              route.push('/main')
            }
          }
        }>
          <FormLogin/>
        </form>
        <div className="w-full text-center">
          {
            !isSet?.success &&
            <Label className="text-red-700 text-sm ">
              {isSet?.message}
            </Label>
          }
        </div>
        <div className="text-center text-sm my-5">
          Create an account 
          <Link href={'/auth/sign-up'} className="text-blue-700 font-bold"> here</Link>
        </div>
      </CardAuth>
    </>
  );
}
