import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full focus-visible:outline-none outline-none focus:outline-none">
        <SelectValue
          placeholder="Select Course"
          className="w-full focus-visible:outline-none outline-none focus:outline-none"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="Engineering">Engineering</SelectItem>
          <SelectItem value="Management">Management</SelectItem>
          <SelectItem value="Medical">Medical</SelectItem>
          <SelectItem value="Pharmacy">Pharmacy</SelectItem>
          <SelectItem value="Science">Science</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
