"use client";
import { Input } from "@/components/ui/input";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import React, { ChangeEvent } from "react";

interface SearchBoxProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBox = ({ query, setQuery }: SearchBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const placeholders = [
    "Search for your favourite university",
    "IIT madras?",
    "Mumbai university?",
    "Kalinga university?",
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <PlaceholdersAndVanishInput
        onChange={handleChange}
        onSubmit={onSubmit}
        placeholders={placeholders}
      />
    </>
  );
};

export default SearchBox;
