/*
"use client"
import Link from 'next/link'
import React from 'react'
interface Props{
    data:{
        id:number
        header:string
    }
}


const TableOfConten = ({data}:Props) => {
    const headers = Object.values(data).map(section => section.header); 

console.log(data);
   
    
  return (
    <section className='rounded-lg border bg-[#eee] text-card-foreground shadow-sm'>
    <div className='pb-2 mb-4 px-6 space-y-1.5 p-2 sm:px-6 '>
        <h4 className='font-semibold'>Table of Content</h4>
        
        <Link href={`#${data.id.toString()}`} >{data.header}</Link>
        </div>
        </section>
  )
}

export default TableOfConten

*/

"use client"
import Link from 'next/link'
import React from 'react'

interface Props {
    data: {
        [key: number]: {
            id: number;
            header: string;
        };
    };
}

const TableOfConten = ({ data }: Props) => {
    // Extract the headers and ids from the object
    const sections = Object.values(data).filter(section => section.header && section.id);


    return (
        <section className='rounded-lg border bg-gray-100 text-card-foreground shadow-sm my-3'>
            <div className='pb-2  px-6  p-2 sm:px-6 '>
                <h4 className='font-semibold'>Table of Contents:</h4>
                <ol className='my-2 pl-7 '>
                    {sections.map(section => (
                        <li className='list-decimal text-[16px]' key={section.id}>
                            <Link href={`#${section.id}`} className='text-blue-500 '>
                                {section.header}
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default TableOfConten;
