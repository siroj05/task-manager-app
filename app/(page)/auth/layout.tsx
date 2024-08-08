import React, { ReactNode } from 'react'

interface Props {
  children : ReactNode
}

export default function Layout({children} : Props) {
  return (
    <div className='min-h-dvh flex items-center justify-center'>
      {children}
    </div>
  )
}
