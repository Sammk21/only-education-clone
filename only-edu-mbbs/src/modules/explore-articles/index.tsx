import { ArticleAttributes } from '@/types/types';
import React from 'react'
import { ImageExtended } from '../common/extended-image/extended-image';
import PostList from '../blog-components/postlist';
import { Button } from '@/components/ui/button';
interface BlogPageProps {
    data: {
      data: ArticleAttributes[];
    };
    href: string;
  }
const ExploreArticles = ({ data, href }: BlogPageProps) => {
  return (
    <div className="py-9 border-b bg-orange-50">
    <div className="container">
      <h3 className="capitalize font-semibold mb-4 text-dark md:text-3xl text-2xl pl-2 lg:pl-0">
        Explore Our Articles
     
      </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 py-4 '>
        {data.data.map((item) => (
          <div key={item.id} className="grid grid-cols-3 mb-10  sm:mr-5 ">
            <div className='col-span-2'>
            <h3 className='font-semibold text-dark line-clamp-2'>{item.title}</h3>
            <p className='line-clamp-2 mt-1'>{item.description}</p>
            <p className='mt-1 text-sm text-dark/75'>{item.createdAt ? new Date(item.createdAt)?.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}</p>    
            </div>
            <div className='relative aspect-video ml-1'>
            <ImageExtended src={item.image.url} alt='' className='grid-cols-1 object-cover object-top ' fill={true}  >

            </ImageExtended>
            </div>
                  </div>
        ))}
        </div>
       

        <Button className="bg-orange-400 text-white rounded-sm px-4 py-1 flex m-auto">
        View All
        </Button>
   
    </div>

    
    </div>

    
  )
}

export default ExploreArticles