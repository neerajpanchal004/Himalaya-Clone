import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar/page'
import Footer from '../components/footer/page'


const About = () => {
    return (
        <>
        <Navbar />
            <div>
                <div>
                    <Image src="/img/our-story.png" width={2000} height={1500} />
                </div>
                <div className='border-[1px] mx-10 my-20 border-red-500'></div>


                <div className='grid grid-cols-2 mx-14'>
                    <div>
                        <Image src="/img/about-download.jpg" width={500} height={2000} />
                    </div>

                    <div className='flex flex-col text-xl gap-5'>
                        <p className='text-3xl text-green-900 font-bold'>From Humble Beginnings</p>

                        <p>While riding through the forests of Burma, our founder, Mr. M. Manal, saw a villager pacify a restless elephant by feeding it the root of the plant Rauwolfia serpentina.</p>
                        <p>
                            Fascinated by the plant's effect on the elephant, he returned home to India to seek scientific evidence for why this particular plant would have such a beneficial, calming effect. Young Manal's mother gave him her bangles to sell so he could pursue his work, and Himalaya was born.
                        </p>

                        <p>Once he fully understood the science behind this special botanical, Mr. Manal bought a hand-operated, tablet-compressing machine and began his work. At night, his shoulders would ache from producing a few hundred tablets, one small tablet at a time. But his hard work paid off. This remarkable plant would later become Serpina, the world’s first anti-hypertensive drug in 1934.

                        </p>

                        <p>We remain in awe of the man who began our company, and the grandfather of our current CEO, Nabeel Manal. Himalaya’s legacy has always been one of researching nature and using the tools of modern science to develop and produce Ayurveda-based, pharmaceutical-grade herbal medicine products. And today, that legacy continues.</p>

                        <p>Mr. Manal had a vision of helping people be well. Today, Himalaya Herbal Healthcare has turned a time-honored herbal tradition into a complete range of contemporary, proprietary formulas and single herbs products.

                        </p>
                    </div>

                </div>

                <div className='grid grid-cols-2 mx-14 my-20 gap-10'>
                    <div className='flex flex-col gap-5'>
                        <p className='text-3xl text-green-900 font-bold'>The Himalaya Legacy Now Spans Over 90 Years</p>

                        <p>Founded in 1930, the Himalaya legacy now spans over 90 years, stretching from one man, to his son, to his grandson. From our humble beginnings in India, our products are now offered in over 100 countries, yet we’re still family owned</p>
                        <p>Himalaya offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products. Integrating the principles of traditional medicine with modern science, Himalaya is a worldwide pioneer in the field of scientifically validated herbal healthcare.</p>
                        <p>Himalaya's North American LEED® Gold-Certified eco-friendly corporate office and warehouse facility are located in Sugar Land, Texas, a community neighboring Houston.</p>
                    </div>
                    <div>
                        <Image src="/img/himaliya-legecy.jpg" width={1000} height={500} />
                    </div>
                </div>


            </div>

            <Footer />
        </>
    )
}

export default About