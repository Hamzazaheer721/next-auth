"use client"

import Link from "next/link"
import { ChangeEvent, MouseEvent, useState } from "react"

export default function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {}

  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-2'>
      <h1>Sign up</h1>
      <br />
      <label htmlFor='username'>User Name</label>
      <input
        className='p-2 border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600'
        id='username'
        type='text'
        name='username'
        onChange={handleChange}
        placeholder='username'
      />
      <br />
      <label htmlFor='email'>Email</label>
      <input
        className='p-2 border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600'
        id='email'
        type='text'
        name='email'
        onChange={handleChange}
        placeholder='email'
      />
      <br />
      <label htmlFor='password'>Password</label>
      <input
        className='p-2 border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600'
        id='Password'
        type='text'
        name='password'
        onChange={handleChange}
        placeholder='password'
      />
      <br />
      <button
        className='p-2 border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600 bg-red-500'
        onClick={handleClick}
      >
        Signup
      </button>
      <br />
      <Link href='/login'> Visit Login Page</Link>
    </div>
  )
}
