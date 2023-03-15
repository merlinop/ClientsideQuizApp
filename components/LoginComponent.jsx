"use client"
import {useState} from 'react'
import Link from 'next/link'

const LoginComponent = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const HandleChange = (e) => {
        e.preventDefault()
        setFormData({...formData, [e.target.name]: e.target.value})
    }

  return (
    <div className='w-[70%] h-[70%] bg-[#031224] mx-auto mb-[80px] rounded-2xl flex flex-col items-center justify-center gap-2'>
    <h1 className='text-3xl font-semibold text-white mb-2'>Login</h1>
    <form className='flex flex-col items-center justify-between space-y-6 w-full'>
      

          {/*Email  Address */}
          <input 
            type="email"
            name='email'
            value={formData.email}
            onChange={HandleChange}
            placeholder="Email"
            className='placeholder:text-sm placeholder:p-2 rounded-lg w-2/5 bg-slate-600 text-white focus:border-gray-800 focus:border-[1px] text-sm px-2 py-1'
            required
            />

        {/* Password */}
       
        <input 
            type="password"
            name='password'
            value={formData.password}
            onChange={HandleChange}
            placeholder="Password"
            className='placeholder:text-sm placeholder:p-2 rounded-lg w-2/5 bg-slate-600 text-white focus:border-gray-800 focus:border-[1px] text-sm px-2 py-1 '
            required
            
            />
            
            {/* button */}
            <button className='rounded-xl py-2 px-4 bg-white text-green-900 text-sm font-semibold hover:bg-green-900 transition-all hover:text-white duration-300 ease-in-out'>Login</button>

            <p className='text-white text-sm &'>Don&apos;t have an account? &nbsp; 
                <Link href="/signup" className='text-red-600 cursor-pointer hover:opacity-50'>
                    signup
                </Link>
            </p>
    </form>
</div>
  )
}

export default LoginComponent
