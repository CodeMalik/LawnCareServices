import React from 'react'
import Image from 'next/image'
import { ArrowBigRight } from 'lucide-react'

const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto py-8'>
            <div className='flex items-center mx-auto justify-between gap-12'>
                <div className="left-content md:w-[60%] max-w-[800px]">
                    {/* logo */}
                    <div className='font-semibold text-green-600'>About Us</div>
                    <h2 className='text-4xl my-3 font-bold'>Best lawn care and landscaping services Company</h2>
                    <p>Since 2007, we've been committed to providing reliable and hassle-free lawn care and landscaping services. Our experienced team specializes in everything from organic treatments to affordable, weekly care packages for residential and commercial properties. We're proud to be the go-to company for families, pet owners, and businesses who want to maintain the beauty of their outdoor spaces without the stress. Trust us to create the lawn you've always dreamed of, backed by our satisfaction guarantee and unbeatable customer support.</p>
                    <button className='bg-[#54b435] mt-8 py-4 px-4 text-white flex items-center gap-4 rounded-md cursor-pointer hover:bg-green-600'>Our Services <span><ArrowBigRight className='text-white w-6 h-6' /></span></button>
                </div>
                <div className="right-image flex-1">
                    <div className='w-[600px]'>
                        <Image
                        className='w-full rounded-md h-[450px] object-cover'
                        src="https://res.cloudinary.com/dfnjpfucl/image/upload/v1757772280/lawn-maintenance-professional-at-work-2025-02-02-13-12-15-utc_zy6ihj.webp" alt='About image' width={1200} height={500}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About