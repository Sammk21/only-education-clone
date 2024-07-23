import { Button } from '@/components/ui/button';
import { getStrapiData } from '@/utils/utils';
import React from 'react'
import { rankingFilter} from "@/types/types";

interface ranking{
ranking:rankingFilter
}

const RankingFilter = ({ranking}:ranking) => {
   
  return (
    
<section className='my-3 p-4  w-full border shadow-sm rounded-xl '>
  <p className='text-dark'>Choose rank publishers  </p>
  <div className='flex gap-2 overflow-x-auto'>
  {ranking.data.map((item) => (
  <Button className='my-1 border border-orange-500 bg-white hover:bg-white text-dark' key={item.id}>
    {item.publisherName}
  </Button>
))}
</div>
</section>
  )
  
}

export default RankingFilter