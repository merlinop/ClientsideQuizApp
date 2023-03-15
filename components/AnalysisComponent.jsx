"use client"
import {useContext} from 'react'
import { NavigationProvider } from '@/context/NavigationContext'

const AnalysisComponent = () => {
      const {isClicked, numb} = useContext(NavigationProvider)

  return (
    <div className='w-full p-4 flex items-center justify-between gap-8 text-[#cfd8e3] text-sm'>
        <section>
            <h1>Stanford University, Stanford.</h1>
        </section>

        <section className='flex justify-between items-center flex-1' >
            <p>Questions: {isClicked.length + 1}</p>
            <p>Answered: {numb}</p>
            <p>Marked for review: 0</p>
            <p>skipped: 0</p>
            
            <button className='py-1 px-2 rounded-lg border border-transparent bg-pink-600 hover:bg-pink-900 duration-150 ease-in-out  hover:text-gray-500'>
                Finish
            </button>
        </section>
    </div>
  )
}

export default AnalysisComponent
