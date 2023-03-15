import React from 'react'
import { GiFlyingTarget } from "react-icons/gi"
import Link from 'next/link'

const NavbarComponent = () => {

    const timex = new Date()
    const filteredHour = timex.getHours()
    const filteredMin = timex.getMinutes()
  return (
    <div className='w-full h-[55px] p-10 darkcolor border-b-2 border-[#8fbef7] flex items-center justify-between'>
        <div className='flex items-center gap-2 group'>
            <GiFlyingTarget color='red'size={40} className="animate-bounce"/>
            <Link className='text-white text-2xl py-2 tracking-wider cursor-pointer group-hover:border-b-[1px] group-hover:border-red-500 duration-200 ease-in-out  group-active:text-red-600' href={"/"}>
            RAPIDHUNT
            </Link>
        </div>

            {/* Time */}
            <h1 className='text-green-600 text-xl'>{`${Array.from(filteredHour).length === 1 ? "0" + filteredHour : filteredHour}:${Array.from(filteredMin).length === 1 ? "0" + filteredMin : filteredMin}`} </h1>

            <h1 className='text-gray-500 text-lg font-semibold'>Welcome Guest</h1>
    </div>
  )
}

export default NavbarComponent
