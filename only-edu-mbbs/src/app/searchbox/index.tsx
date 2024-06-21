"use client";
import { Input } from "@/components/ui/input";
import { Universitylist } from "@/types/types";
import React, { ChangeEvent, useEffect, useState } from "react";

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
        className="w-full p-2 border rounded-lg focus:ring-1 focus:ring-orange-500 mb-6"
      />
    </>
  );
};

export default SearchBox;
