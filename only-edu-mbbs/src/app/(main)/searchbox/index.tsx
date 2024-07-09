"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { ChangeEvent } from "react";

interface SearchBoxProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBox = ({ query, setQuery }: SearchBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="relative z-10 flex space-x-3  border mb-3 bg-background rounded-lg  text-dark">
        <div className="flex-[1_0_0%]">
          <Label htmlFor="article" className="sr-only">
            Search Universities
          </Label>
          <Input
            onChange={handleChange}
            name="text"
            type="text"
            className="h-full"
            id="university"
            placeholder="Search Universities"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
