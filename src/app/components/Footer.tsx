import React from 'react'
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#111111]">
    <div className="container px-6 py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
                <div className="text-xs font-medium text-white uppercase">
                Find A Store
                </div>

                <a href="#" className="block mt-5 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                BECOME A MEMBER
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                SIGN UP FOR EMAIL
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Send Us Feedback
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-white duration-700 dark:text-white hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                STUDENT DICOUNTS
                </a>
               
            </div>

            <div>
                <div className="text-xs font-medium text-white uppercase">
                    Get Help
                </div>

                <a href="#" className="block mt-5 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Order Status
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Delivery
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Returns
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Payment Options
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Contact Us On Nike.com Inquiries
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Contact Us On All Other Inquiries
                </a>
               
            </div>

            <div>
                <div className="text-xs font-medium text-white uppercase">
                   ABOUT NIKE
                </div>

                <a href="#" className="block mt-5 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                   News
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Careers
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Investors
                </a>
                <a href="#" className="block mt-3 text-sm font-medium text-[#7E7E7E] duration-700 dark:text-[#7E7E7E] hover:text-gray-400 dark:hover:text-gray-200 hover:underline">
                Sustainability
                </a>
             
            </div>

          
            <div className="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="twitter">
                    <FaTwitter className='w-5 h-5 '/>
                    
                </a>

                <a href="#" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                <FaFacebookF className='w-5 h-5'/>
                </a>

                <a href="#" className="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                <TfiYoutube className='w-5 h-5'/>
                </a>

               
            </div>
        <div className="sm:flex sm:items-center sm:justify-evenly">
        <IoLocationSharp className='text-white'/>
        <h3 className="my-10 ">India </h3>
            <p className="text-[#7E7E7E]">© 2023 Nike, Inc. All Rights Reserved</p>
            
        </div>
            <div className='sm:flex sm:justify-between sm:items-center gap-10 ml-32 lg:ml-64'>

                <p className='text-[#7E7E7E] '>Guides</p>
                <p className='text-[#7E7E7E] '>Terms of Sale</p>
                <p className='text-[#7E7E7E] '>Terms of Use</p>
                <p className='text-[#7E7E7E] '>Nike Privacy Policy</p>
            </div>
    </div>
    </div>
</footer>
  )
}
