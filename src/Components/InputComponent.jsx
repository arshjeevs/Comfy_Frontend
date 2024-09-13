import React from 'react'

const InputComponent = ({placeholder}) => {
  return (
    <div>
        <input className={`bg-green-600 w-[28rem] py-4 px-6 border-none outline-none cursor text-white font-poppins rounded p-2 placeholder-white placeholder-opacity-60`} type="text" placeholder={placeholder}/>
    </div>
  )
}

export default InputComponent