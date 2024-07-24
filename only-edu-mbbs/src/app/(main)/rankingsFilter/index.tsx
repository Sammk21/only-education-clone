


import { Button } from '@/components/ui/button';
import { getStrapiData } from '@/utils/utils';
import React, { useState } from 'react';
import { rankingFilter } from "@/types/types";
import { updatedFilters, updatedRankingFilter } from '@/app/action';
import { Label } from '@/components/ui/label';

interface RankingFilterProps {
  ranking: rankingFilter;
  filterParams: FilterParams;
  context:string
  // rankings?:{
  //   publisherName:string
  // }
}

interface FilterParams {
  locationsParam?: string;
  examsParam?: string;
  ownershipsParam?: string;
  streamsParam?: string;
  modesParam?: string;
  durationParam?: string;
  courseParam?: string;
  rankingParam?: string;
}

const RankingFilter: React.FC<RankingFilterProps> = ({ ranking, filterParams,context }) => {
  const [selectedRanking, setSelectedRanking] = useState<string | undefined>(undefined);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Selected Ranking Publisher:", selectedRanking);

    const context ="universities"

    if(selectedRanking){
      await updatedRankingFilter(selectedRanking, context) 
    }

  };

  return (
    <section className='my-3 p-4 w-full border shadow-sm rounded-xl'>
      <p className='text-dark mb-2'>Choose rank publishers</p>
      <form className="flex gap-2 overflow-x-auto" onSubmit={handleSubmit}>
        {ranking.data.map((item) => (
          <label
            key={item.id}
            className={`relative inline-flex items-center px-4 py-2 border border-orange-500 bg-white text-dark cursor-pointer ${
              selectedRanking === item.publisherName ? 'bg-orange-500 text-white' : ''
            }`}
          >
            <input
              type="radio"
              value={item.publisherName}
              className="hidden"
              name={"Ranking"}
              checked={selectedRanking === item.publisherName}
              onChange={() => setSelectedRanking(item.publisherName)}
            />
            {item.publisherName}
          </label>
        ))}
        <Button type='submit' className="px-4 py-2 bg-orange-500 text-white border border-orange-500 hover:bg-orange-600">
          Apply
        </Button>
      </form>
    </section>
  );
};

export default RankingFilter;


