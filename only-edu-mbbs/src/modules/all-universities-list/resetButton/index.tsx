"use client";
import { deleteFilters } from "@/app/action";
import { Button } from "@/components/ui/button";
import React from "react";

const ResetButton = async() => {

  const handleReset = async () =>{
  await deleteFilters();
  }

  return (
    <div  className="relative">
      <form>
      <Button
        onClick={handleReset}
        className="hover:border-red-500 transition-colors hover:bg-light absolute top-0 left-0 "
        variant={"outline"}
        type="submit"
      >
        reset
      </Button>
      </form>
    </div>
  );
};

export default ResetButton;
