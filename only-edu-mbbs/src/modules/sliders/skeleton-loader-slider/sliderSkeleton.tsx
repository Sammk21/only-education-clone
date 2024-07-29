import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

interface SkeletonCardProps {
  count: number;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ count }) => {
  const skeletons = Array.from({ length: count }).map((_, index) => (
    <div key={index} className="flex flex-col space-y-3">
      <Skeleton className=" h-48 w-48 sm:h-64 sm:w-64 " />
      <div className="space-y-2">
        <Skeleton className="sm:h-5 h-3 w-[200px]" />
        <Skeleton className="sm:h-3 h-2 w-[15r0px]" />
        <Skeleton className="sm:h-3 h-2 w-[200px]" />
      </div>
    </div>
  ));

  return <>{skeletons}</>;
};