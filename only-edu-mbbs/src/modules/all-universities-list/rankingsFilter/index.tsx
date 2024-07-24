


import { Button } from '@/components/ui/button';
import { getStrapiData } from '@/utils/utils';
import React, { useState } from 'react';
import { rankingFilter } from "@/types/types";
import { updatedFilters } from '@/app/action';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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

const RankingFilter: React.FC<RankingFilterProps> = ({ ranking, filterParams}) => {
  const [selectedRanking, setSelectedRanking] = useState<string | undefined>(undefined);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const context = "universities"
    const formData = new FormData(event.currentTarget);
    await updatedFilters(formData, context) 
  };

  return (
    <section className='my-3 p-4 w-full border shadow-sm rounded-xl'>
      <p className='text-dark mb-2'>Choose rank publishers</p>
      <form className="flex gap-2 overflow-x-auto" onSubmit={handleSubmit}>
        {ranking.data.map((item) => (
          <label
            key={item.id}
            className={`relative inline-flex items-center px-2 py-1 border rounded-lg text-xs hover:bg-orange-500 border-orange-500 bg-white text-dark cursor-pointer ${
              selectedRanking === item.slug ? 'bg-orange-400 text-white' : ''
            }`}
          >
            <Input
              type="radio"
              value={item.slug}
              className="hidden"
              name={"Ranking"}
              checked={selectedRanking === item.slug}
              onChange={() => setSelectedRanking(item.slug)}
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


