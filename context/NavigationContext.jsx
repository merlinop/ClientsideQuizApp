"use client"
import {createContext, useState} from 'react'
import { useRouter } from 'next/navigation';


export const NavigationProvider = createContext()

const NavigationContext = ({children}) => {
  const router = useRouter()
  const [onSelected, setOnSelected] = useState(false)
  const [val, setVal] = useState(0)
  const [isClicked, setIsClicked] = useState([])
  const [numb, setNumb] = useState(0)

// functions
const handleSelected = (answ) => {
  setOnSelected(true)
  setVal(answ)
}

const handleNext = (num, option) => {
  // If no option is clicked
  if(option === 0) {
      return alert("Select an Option")
  }

  else if(option !== 0 && num === 9) {
    setOnSelected(false)
    setIsClicked((prev) => {
      return [...prev, {number: num, choice: option}]
    }) 
    setVal(0)
    router.push("/result")
  }


  // Option selected and saved and Move to the next question
  else if(option !== 0) {
    setOnSelected(false)
  setIsClicked((prev) => {
      return [...prev, {number: num, choice: option}]
    }) 
    setNumb((prev) => prev + 1)
    setVal(0)
   return
  }

  
  
  console.log(num,option)
}



    const value = {numb,onSelected, setOnSelected, val, setVal, isClicked, setIsClicked, setNumb, handleSelected, handleNext}

  return (
    <NavigationProvider.Provider  value={value}>
      {children}
    </NavigationProvider.Provider>
  )
}

export default NavigationContext
