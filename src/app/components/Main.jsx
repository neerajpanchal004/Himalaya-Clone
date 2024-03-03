import React from 'react'
import Image from 'next/image'

const Main = () => {
    return (
        <>
            <div>
                <Image src="/img/hero-img.png" height={1400} width={2000} />
            </div>
            {/* shop by category */}
            <div className='p-10'>
                <h1 className='text-center text-2xl font-medium'>Shop By Category</h1>

                <div className='grid grid-cols-3 py-10'>
                    <div className='flex flex-col items-center gap-2 justify-center'>
                        <Image src="/img/Ashwagandha.jpg" height={600} width={300} />
                        <h2 className='font-bold'>Suppliments</h2>
                        <p className='hover:border-b-2'>See All Suppliments</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 justify-center'>
                        <Image src="/img/oral care.jpg" height={600} width={300} />
                        <h2 className='font-bold'>Oral Care</h2>
                        <p className='hover:border-b-2'>See All Oral Care</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 justify-center'>
                        <Image src="/img/personal-care.jpg" height={600} width={300} />
                        <h2 className='font-bold'>Personal care</h2>
                        <p className='hover:border-b-2'>See All Personal Care</p>
                    </div>
                </div>
            </div>
            {/* shop by category */}
            <h1 className='text-3xl text-center font-medium my-14'>Best Seller</h1>


            {/* Best Seller */}
            <div>
                <div className='m-8  flex items-center gap-5 bg-slate-100 p-10'>
                    <div>
                        <Image src="/img/StreeCare.jpg" height={30} width={200} />
                    </div>

                    <div>
                        <p className='text-2xl font-bold'>Unlock the Wisdom of Herbs</p>
                        <p className='text-2xl py-2'>with Herbal Supplements, Toothpaste & More!</p>
                        <p>Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.</p>
                    </div>
                </div>


            </div>
            {/* Best Seller */}

            {/* three cards */}
            <div className='grid grid-cols-3 gap-10 m-10'>
                <div className='border-[1px] border-black p-10 rounded-xl'>
                    <div className='w-10 border-teal-600 border-2 rounded-2xl my-2'></div>
                    <p>"Lorem ipsum dolorrporis ex ipsum explicabo corrupti omnis autem, non adipisci maiores quas eveniet tempore, nam cum"</p>
                    <p className='my-5 font-bold'>Lorem ipsum</p>

                </div>

                <div className='border-[1px] border-black p-10 rounded-lg'>
                    <div className='w-10 border-teal-600 border-2 rounded-2xl my-2'></div>
                    <p>"Lorem ipsum dolorrporis ex ipsum explicabo corrupti omnis autem, non adipisci maiores quas eveniet tempore, nam cum"</p>
                    <p className='my-5 font-bold'>Lorem ipsum</p>

                </div>

                <div className='border-[1px] border-black p-10 rounded-lg'>
                    <div className='w-10 border-teal-600 border-2 rounded-2xl my-2'></div>
                    <p>"Lorem ipsum dolorrporis ex ipsum explicabo corrupti omnis autem, non adipisci maiores quas eveniet tempore, nam cum"</p>
                    <p className='my-5 font-bold'>Lorem ipsum</p>

                </div>
            </div>
            {/* three cards */}
            {/* follow us card */}
            <div className='mx-10 my-20'>
                <h1 className='text-3xl  my-10'>Follow us @himalayaus</h1>
                <div className='grid grid-cols-4'>
                    <div>
                        <Image src="/img/card-1.jpg" height={250} width={250} />
                    </div>

                    <div>
                        <Image src="/img/card-2.jpg" height={250} width={250} />
                    </div>

                    <div>
                        <Image src="/img/card-3.jpg" height={250} width={250} />
                    </div>

                    <div>
                        <Image src="/img/card-4.jpg" height={250} width={250} className='transform'/>
                        <button className="transition duration-150 ease-in-out">Button A</button>

                    </div>

                </div>
            </div>
            {/* follow us card */}




        </>
    )
}

export default Main