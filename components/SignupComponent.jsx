"use client"
import {useState} from 'react'
import {handleSignup} from "@/firebase"


const SignupComponent = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {username, email, password, confirmPassword} = formData

    const HandleChange = (e) => {
        e.preventDefault()
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      // if(!username || !email || !password || !confirmPassword) return
      // if (password !== confirmPassword) return
      const response =  handleSignup(email, password)
      console.log(response)
        // try {
        //   console.log(formData.email, formData.password)
        //     const response =  handleSignup(formData.email, formData.password)
        //     console.log(response?.user)
        // } catch (error) {
        //   console.log(error.status)
        // }
    }

  return (
    <div className='w-[70%] h-[70%] bg-[#031224] mx-auto mb-[80px] rounded-2xl flex flex-col items-center justify-center gap-2'>
                    <h1 className='text-3xl font-semibold text-white mb-2'>Signup</h1>
                    <form className='flex flex-col items-center justify-between space-y-6 w-full' onSubmit={handleSubmit}>
                           {/* Username */}
                        <input 
                            type="text"
                            name='username'
                            value={formData.username}
                            onChange={HandleChange}
                            placeholder="Username"
                            className='placeholder:text-sm placeholder:p-2 rounded-lg w-2/5 bg-slate-600 text-white focus:border-gray-800 focus:border-[1px] text-sm px-2 py-1'
                            required
                            />

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
                            
                       

                        {/* Confirm Password */}

                        <input 
                            type="password"
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={HandleChange}
                            placeholder="Confirm Password"
                            className='placeholder:text-sm placeholder:p-2 rounded-lg w-2/5 bg-slate-600 text-white focus:border-gray-800 focus:border-[1px] text-sm px-2 py-1'
                            required
                            />

                            {/* button */}
                            <button type='submit' className='rounded-xl py-2 px-4 bg-white text-green-900 text-sm font-semibold hover:bg-green-900 transition-all hover:text-white duration-300 ease-in-out'>Signup</button>
                    </form>
    </div>
  )
}

export default SignupComponent
