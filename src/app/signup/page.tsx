"use client"

import { useState } from "react"

export default function Signup() {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: ""
  })

  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-2'>
      <h1>Sign up</h1>
      <hr />
      <label htmlFor='username'>User Name</label>
      <input
        type='text'
        name='username'
        onChange={(e) =>
          setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
        placeholder='username'
      />
    </div>
  )
}
