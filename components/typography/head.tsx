import React, { ReactNode } from 'react'

interface Props {
  children : ReactNode
}

export default function HeadTitle({children}:Props) {
  return (
    <div className='font-bold text-xl my-auto'>{children}</div>
  )
}
