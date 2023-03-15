"use client"
import {useContext} from 'react'
import { NavigationProvider } from '@/context/NavigationContext'

const NavigatorComponent = () => {
    const {handleNext, numb, val} = useContext(NavigationProvider)

  return (
    <div className='mt-[20px] w-full flex justify-end px-8'>
        <button className='border-[2px] border-[#13d1eb] px-6 py-2 rounded-2xl darkcolor text-[#abb4be]' onClick={() => handleNext(numb, val) }>
            Next
        </button>
    </div>
  )
}

export default NavigatorComponent
