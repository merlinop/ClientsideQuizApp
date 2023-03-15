"use client"
import {useState, useContext} from 'react'
import Questions from '@/data/questions'
import { NavigationProvider } from '@/context/NavigationContext'

const QuestionsComponent = () => {

    // Context 
   const { numb,onSelected,val,isClicked, handleNext,handleSelected} = useContext(NavigationProvider)


     console.log(isClicked)

  return (
    <div className='w-full h-full flex  justify-end px-5'>
        <div className='flex flex-col gap-3 shadow-lg shadow-black w-[70%] h-[350px] rounded-xl darkcolor p-4'>
                {/* Questions */}
                <section className='max-w-md'>
                    <h1 className='text-[#e8f1fc]'>{Questions[numb].question}</h1>
                    <h1 className='w-[250px] text-[#939596] text-sm leading-8'>{Questions[numb].questionbody} </h1>
                </section>

                {/* Answers */}
                <section className="w-full px-6 grid grid-cols-2 grid-rows-2 gap-4">

                        {/* OPTION A */}
                        <div className={`border-[2px] flex items-center justify-start gap-2 px-2 py-2 text-xs text-[#abb4be]  rounded-lg  bg-slate-700 cursor-pointer  group ${onSelected && val === "A" ? "border-[#13d1eb]" : "border-transparent"} `} onClick={() => handleSelected("A")} >
                            <p className={`text-xs px-2 py-1 rounded-[100%] darkcolor ${onSelected && val === "A" ? "bg-[#13d1eb] text-gray-800" : "null"} `}>A</p>
                            {Questions[numb].answerA}

                            {/* OPTION B */}
                             </div>
                        <div className={`border-[2px] group flex items-center justify-start gap-2 px-2 py-2 text-xs text-[#abb4be] rounded-lg  bg-slate-700 cursor-pointer  ${onSelected && val === "B" ? "border-[#13d1eb]" : "border-transparent"}`} onClick={() => handleSelected("B")}>
                            <p className={`text-xs px-2 py-1 rounded-full darkcolor ${onSelected && val === "B" ? "bg-[#13d1eb] text-gray-800" : "null"}  `}>B</p>
                            {Questions[numb].answerB}
                            </div>

                            {/* OPTION C */}
                        <div className={`border-[2px] group flex items-center justify-start gap-2 px-2 py-2 text-xs text-[#abb4be] rounded-lg  bg-slate-700 cursor-pointer ${onSelected && val === "C" ? "border-[#13d1eb]" : "border-transparent"}`} onClick={() => handleSelected("C")}>
                            <p className={`text-xs px-2 py-1 rounded-full darkcolor ${onSelected && val === "C" ? "bg-[#13d1eb] text-gray-800" : "null"}  `}>C</p>
                            {Questions[numb].answerC}</div>

                            {/* OPTION D */}
                        <div className={`border-[2px] group flex items-center justify-start gap-2 px-2 py-2 text-xs text-[#abb4be] rounded-lg  bg-slate-700 cursor-pointer  ${onSelected && val === "D" ? "border-[#13d1eb]" : "border-transparent"}`} onClick={() => handleSelected("D")}>
                            <p className={`text-xs px-2 py-1 rounded-full darkcolor ${onSelected && val === "D" ? "bg-[#13d1eb] text-gray-800" : "null"} `}>D</p>
                            {Questions[numb].answerD}</div>
                </section>
        </div>
  

    </div>
  )
}

export default QuestionsComponent
