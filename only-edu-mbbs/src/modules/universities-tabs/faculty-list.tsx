import Image from "next/image";
import React from "react";

interface facultyFields {
  id: number;
  designation: string;
  email: string;
  professorName: string;
  number: string;
}

interface facultyProps {
  data: {
    facInfo: facultyFields[];
  };
}

const FacultyList = ({ data }: facultyProps) => {
  //   console.dir(data.facInfo[0].number);
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.facInfo.map((item) => (
        <h2>{item.professorName}</h2>
      ))}
    </div>
  );
};

export default FacultyList;
