"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { SearchIcon } from "lucide-react";
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
      <form>
        <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg">
          <div className="flex-[1_0_0%]">
            <Label htmlFor="article" className="sr-only">
              Search article
            </Label>
            <Input
              onChange={handleChange}
              name="text"
              type="text"
              className="h-full"
              id="university"
              placeholder="Search colleges"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBox;
