import React from 'react'
import sofa from "../Images/sofa.png"
const CardComponent = ({image}) => {
  return (
    <div className="w-full h-auto p-8 md:w-[400px] lg:h-2/3">
    <img className="object-cover w-full" src={image} alt="" />
    <h1 className="text-4xl pt-4 pb-4">Red Sofa</h1>
    <button type="button" class="pt-text-gray-900 bg-white border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Buy Now
    </button>
</div>
  )
}

export default CardComponent