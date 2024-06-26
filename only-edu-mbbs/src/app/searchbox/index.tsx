"use client";
import { Input } from "@/components/ui/input";
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
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for universities..."
        className="w-full p-2 border rounded-lg   mb-6 outline-none focus:outline-none "
      />
    </>
  );
};

export default SearchBox;
