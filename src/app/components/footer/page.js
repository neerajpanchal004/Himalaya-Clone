import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className='p-10 bg-slate-400'>
        <div className='grid grid-cols-4'>
          <div className='font-light gap-2 flex flex-col'>
            <h1 className='font-bold'>INFO</h1>
            <h1>Contact Us</h1>
            <h1>FAQ</h1>
            <h1>BLOG</h1>
            <h1>STORE LOCATOR</h1>
          </div>

          <div className='font-light flex flex-col gap-2'>
            <h1 className='font-bold'>Policies</h1>
            <h1>Shipping & Returns</h1>
            <h1>Terms & Conditions</h1>
            <h1>Privacy</h1>
            <h1>CCPA</h1>
          </div>


          <div className='font-light'>
            <h1 className='font-bold'>Contact Us</h1>
            <h1>Email:<p className='text-green-300 font-bold'>writetous@himalayausa.com</p></h1>
            <h1>Phone:<p className='text-green-300 font-bold'>1-800-869-4640</p><p>Mon-Fri, 8am-5pm CT</p></h1>
            <h1>Mail:<p>Himalaya Wellness</p><p className='text-green-300 font-bold'>1101 Gillingham Lane</p><p className='text-green-300 font-bold'>Sugar Land, TX 77478​</p></h1>
          </div>

          <div className='font-light flex flex-col gap-2'>
            <h1 className='font-bold'>Subscribe to Our Newsletter!</h1>
            <input placeholder='Enter your e-mail' type='email' />
            <p>By entering your email,
              you agree to our
              Terms & Conditions
              and Privacy Policy.</p>
            <div className='flex items-center gap-2'>
              <h1>Follow Us:</h1>
              <FaFacebookSquare size={25} />
              <FaTwitter size={25} />
              <FaInstagram size={25} />
              <FaWhatsapp size={25} />
            </div>


          </div>

        </div>
        <p className='my-5'>© 2022 Himalaya Wellness. All rights reserved.</p>

        <p className='p-2 border-2 text-xs border-black'>*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.

        </p>
      </div>
    </>)
}

export default Footer