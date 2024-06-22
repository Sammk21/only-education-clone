"use client";
import { deleteFilters } from "@/app/action";
import { Button } from "@/components/ui/button";
import React from "react";

const ResetButton = () => {
  return (
    <form onSubmit={() => deleteFilters} className="">
      <Button
        className="hover:border-red-500 transition-colors hover:bg-light absolute top-0 left-0"
        variant={"outline"}
        type="submit"
      >
        reset
      </Button>
    </form>
  );
};

export default ResetButton;
