import FormLogin from '@/app/(page)/auth/(sign-in)/form'
import React, { ReactNode } from 'react'

interface Props{
  head : string
  children : ReactNode
}

export default function CardAuth(
  {
    head,
    children,
  }:Props
) {
  return (
    <>
      <div className="border p-10 shadow-md rounded-sm bg-white w-[400px]">
        <div className="text-3xl font-bold my-3">
          {head}
        </div>
        {children}
      </div>
    </>
  )
}
