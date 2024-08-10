import React, { ReactNode } from 'react'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { LoaderCircle } from "lucide-react";

interface Props{
  className:string
  children: ReactNode
  type: 'submit' | 'reset' | 'button'
}

export default function ButtonAct({
  className,
  children,
  type
}:Props) {

  const { pending } = useFormStatus()

  return (
    <div>
      <Button type={type} className={className}>
        {
          pending? 
          <>{children}<LoaderCircle className="ml-1 w-4 h-4 animate-spin" /></>
          :
          <>{children}</>
        }
      </Button>
    </div>
  )
}
