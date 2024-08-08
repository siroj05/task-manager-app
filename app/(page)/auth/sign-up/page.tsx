'use client'
import CardAuth from "@/components/card-auth";
import Link from "next/link";
import React from "react";
import FormRegis from "./form";
import { useRouter } from "next/navigation";
import { signUpApi } from "@/api/auth/api";

export default function SignUp() {
  const route = useRouter()
  return (
    <>
      <CardAuth head="Sign Up">
        <form action={
          async (formData) => {
            let res = await signUpApi(formData)
            if(res.success){
              route.push('/auth')
            }
          }
        }>
          <FormRegis />
        </form>
        <div className="text-center text-sm">
          Already have an account? sign in 
          <Link href={"/auth"} className="text-blue-700 font-bold">
            {" "}
            here
          </Link>
        </div>
      </CardAuth>
    </>
  );
}
