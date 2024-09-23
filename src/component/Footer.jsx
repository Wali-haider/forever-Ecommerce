import React from 'react'
import { assets } from '../forever-assets/assets/frontend_assets/assets'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-1'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm px-5 sm:px-20'>
        <div>
          <img src={assets.logo} className='mb-5 w-32 bg-white' alt="" />
          <p className='w-full md:w-2/3 text-white'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sequi, earum laborum alias fuga repellendus.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-white'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-white'>
            <li>+92-3206943-440</li>
            <li>walihaiderjalali1407@gmail.com</li>
          </ul>

          {/* Social Media Icons */}
          <div className='flex gap-4 mt-5'>
            <FaFacebookF className='cursor-pointer hover:text-blue-500 h-6 w-6' />
            <FaTwitter className='cursor-pointer hover:text-blue-400 h-6 w-6' />
            <FaInstagram className='cursor-pointer hover:text-pink-500 h-6 w-6' />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='bg-gray-800 py-5 px-5 sm:px-20'>
        <p className='text-center text-white mb-3'>Subscribe to our newsletter</p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
          <input 
            type='text' 
            placeholder='Enter your email' 
            className='px-4 py-2 rounded-md focus:outline-none w-full sm:w-2/3 text-black' 
          />
          <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr className='border-white' />
        <p className='py-5 text-sm text-center text-white'>
        © 2024 - All Rights Reserved - Designed by Wali Haider jalali
        </p>
      </div>
    </div>
  )
}

export default Footer
