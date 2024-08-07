import React from 'react'
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ImageExtended } from '../common/extended-image/extended-image';
import { ImageAttributes } from '@/types/types';
interface Props{
    searchableImage :ImageAttributes
}
const UpcommingExams = ({searchableImage}:Props) => {
  return (
    <section className='mt-3'>
        <Card>
        <div className='mt-3'>
        <h3 className="font-bold text-xl px-5 mb-2 border-b pb-2">Upcoming exams</h3>
        </div>
        <div className='px-5'>
            <Link href="" className='flex justify-between border-b border-dashed pb-3'>
            <div>
            <h4 className='font-semibold text-base uppercase'>gucet</h4>
            <p className='pl-3 text-sm font-semibold text-green-600'>May 5, 2025</p>
            </div>
            <div className="h-12 relative border-2 w-12 bg-light dark:bg-dark  rounded-full overflow-hidden justify-center flex">
                    <ImageExtended
                      src={searchableImage.url}
                      alt="hi"
                     fill={true}
                      className="object-center object-contain "
                    />
                  </div>
            </Link>
        </div>
        </Card>
    </section>
  )
}

export default UpcommingExams