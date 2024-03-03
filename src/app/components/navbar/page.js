import React from 'react'
import Image from 'next/image'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import Link from 'next/link';




const Navbar = () => {
    return (
        <>
            {/* navbar */}
            <div>
                <div className='flex p-3 bg-orange-700 justify-center text-xl'>
                    <h1><b>FREE SHIPPING</b> ON ALL ORDERS OVER $35!</h1>
                </div>

                <div className='px-10 py-5 flex justify-between items-center bg-slate-50 text-slate-900'>
                    <div className='flex items-center gap-5'>
                        {/* logo */}
                        <div>
                            <Image src="/img/logo.jpg" width={150} height={150} />
                        </div>
                        {/* logo */}

                        {/* routes */}
                        <div className='flex text-xl font-light gap-5'>
                            <Link href="/">
                                <h1>Shop</h1>

                  
                            </Link>
                            <Link href="/about">
                                <h1>About</h1>

                            </Link>
                            <Link href="#">
                                <h1>Store Location</h1>

                            </Link>


                        </div>
                        {/* routes */}
                    </div>
                    <div className='flex gap-5'>

                        <div className='p-2 rounded-full hover:bg-slate-200'><IoSearchOutline size={30} /></div>
                        <div className='p-2 rounded-full hover:bg-slate-200'><IoMdContact size={30}/></div>
                        <div className='p-2 rounded-full hover:bg-slate-200'><GiShoppingBag size={30} /></div>
                    </div>


                </div>

            </div>

        </>

    )
}

export default Navbar