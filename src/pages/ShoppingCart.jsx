import React from 'react'
import { Link } from 'react-router-dom'
import { leftArrow } from '../assets/Images'
import foodItems from '../data/foodData'
import FoodCard from '../components/Core/ShoppingCart/FoodCard'
import CustomButton from '../components/common/CustomButton'

const ShoppingCart = () => {
  return (
    <div className='bg-[#090D14] w-[393px] text-white flex flex-col '>
       {/* Back Button */}
      <Link to="/verify-phone" className="self-start">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>
      {/* Header Section */}
      <div className="self-start text-start mt-[36px] mb-[24px] px-4">
        <h1 className="text-[30px] font-[700] leading-[40px] text-white">
          Shopping Cart
        </h1>
      </div>

      <div className="self-start text-start mt-[36px] mb-[24px] px-4 w-full ">
        <div className='flex items-center  bg-[#1c1c1c]  z-30 rounded-2xl border-[1px] border-[#E19C34] px-3 py-2 '>
           <div className='flex items-center gap-2'>
                <div className='bg-[#E19C34] rounded-full p-1 h-[20px] w-[20px] flex items-center justify-center'>
                    <p className='text-xs text-black'>i</p>
                </div>
                <div className='text-sm text-[#E19C34]'>Product more than 2 days are automatically lost</div>
           </div>
        </div>
      </div>
      <div className='self-start text-start  w-full'>
            <div className="flex flex-col items-center w-full ">
                {foodItems.map((item) => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
        </div>

        <div className="self-start text-start px-4">
            <h1 className="text-[20px] font-[700] leading-[40px] text-white">
                Order Summary
            </h1>
        </div>

        {/* Apply promos before you order */}

        <div className="self-start text-start px-4 w-full">
           <div className='flex justify-between w-full'>
            <div className='text-gray-400 font-medium text-sm'>items</div>
            <div className='text-gray-400 font-medium text-sm'>$218</div>
           </div>
        </div>

        <CustomButton
            text="Proceed To Pay"
            buttonStyle="w-[353px] h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[24px] font-[600] mt-6"
            type="submit"
          />
    </div>
  )
}

export default ShoppingCart