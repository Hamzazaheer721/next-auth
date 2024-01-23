import { FC } from "react"

const UserProfile: FC<any> = ({ params }) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <br />
      <p className='text-2xl'> Profile Page</p>
      <span className='p-2 orange bg-orange-500 text-black'>{params.id}</span>
    </div>
  )
}

export default UserProfile
