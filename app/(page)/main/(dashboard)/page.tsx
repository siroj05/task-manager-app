'use client'
import TotalTask from '@/components/total-task'
import HeadTitle from '@/components/typography/head';
import { ClipboardList, Check, ListTodo, ListChecks } from 'lucide-react';
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <HeadTitle>Dashboard</HeadTitle>
      <div className='my-5 
      lg:grid lg:grid-cols-4 lg:gap-5
      sm:grid sm:grid-cols-2 sm:gap-5
      min-[320px]:flex min-[320px]:flex-col
      '>
        <TotalTask
          title='Total task'
          total={9}
          Icon={ClipboardList}
          color='bg-yellow-300'
        />
        <TotalTask
          title='COMPLETED TASK'
          total={9}
          Icon={Check}
          color='bg-green-400'
        />
        <TotalTask
          title='TASK IN PROGRESS'
          total={9}
          Icon={ListTodo}
          color='bg-blue-500'
        />
        <TotalTask
          title='TODOS'
          total={9}
          Icon={ListChecks}
          color='bg-red-800'
        />
      </div>
    </div>
  )
}
