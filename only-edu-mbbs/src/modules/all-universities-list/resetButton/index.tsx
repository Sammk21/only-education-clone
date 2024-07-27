"use client";
import { deleteFilters } from "@/app/action";
import { Button } from "@/components/ui/button";
import React from "react";

const ResetButton = () => {

  const handleReset = () =>{
    deleteFilters();
  }

  return (
    <div  className="relative">
      <Button
      onClick={handleReset}
        className="hover:border-red-500 transition-colors hover:bg-light absolute top-0 left-0 "
        variant={"outline"}
        type="submit"
      >
        reset
      </Button>
    </div>
  );
};

export default ResetButton;
