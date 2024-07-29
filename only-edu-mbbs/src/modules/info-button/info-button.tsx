

import Link from 'next/link';
import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';


interface infoButton {
    id:number
    title:string
    slug:string
}

 interface Props {
    data: infoButton[];
    href:string
    title:string
  }
const InfoButton = ({data, href, title}:Props) => {


   

  return (
    <section className='pb-3 pt-6 mt-6   px-6 bg-orange-50 '>
    <div  className='container'>
        <h4 className='font-semibold mb-4 text-dark  dark:text-light text-3xl'>{title}
        </h4>
        <div className='flex  flex-wrap gap-3'>
                    {data.map((item) => (
                        <div key={item.id} className='mb-1 border py-2 px-3 rounded-full bg-white cursor-pointer hover:bg-gray-50'>
                            <Link href={`${href}${item.slug}`} className='flex gap-3'>
                            <p className=' text-dark'>{item.title}</p>
                            <FaRegArrowAltCircleRight />

                            </Link>
                        </div>
                    ))}
                </div>
    </div>
    </section>
  )
}

export default InfoButton