"use client"
import {useContext} from 'react'
import { NavigationProvider } from '@/context/NavigationContext'
const Page = () => {
    const {isClicked, numb} = useContext(NavigationProvider)

  return (
    <div className='w-full min-h-screen text-xl text-white p-5'>
        <h1>Questions Answered: {numb + 1}</h1>
        <h1>Result: {"{Still writing logic....}"} </h1>
    </div>
  )
}

export default Page
