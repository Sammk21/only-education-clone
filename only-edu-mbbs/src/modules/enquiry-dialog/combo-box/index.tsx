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

export function SelectSpecialization() {
  return (
    <Select>
      <SelectTrigger className="w-full focus-visible:outline-none outline-none focus:outline-none">
        <SelectValue
          placeholder="Select Specialization"
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

export function Selectlevel() {
  return (
    <Select>
      <SelectTrigger className="w-full focus-visible:outline-none outline-none focus:outline-none">
        <SelectValue
          placeholder="Select Level"
          className="w-full focus-visible:outline-none outline-none focus:outline-none"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="UG">UG</SelectItem>
          <SelectItem value="PG">PG</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
