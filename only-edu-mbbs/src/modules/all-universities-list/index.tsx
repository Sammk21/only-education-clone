// "use client";

// import React, { useState } from "react";
// import CollegeFilter from "./college-filter";
// import { UniversitiesData } from "@/types/types";
// import CollegeList from "./college-list";

// interface Option {
//   id: number;
//   title: string;
//   slug: string;
// }

// interface Props {
//   ownership: {
//     data: Option[];
//   };
//   indianStates: {
//     data: Option[];
//   };
//   exams: {
//     data: Option[];
//   };
//   data: UniversitiesData;
// }

// const AllUniversitiesFilter = ({
//   exams,
//   ownership,
//   indianStates,
//   data,
// }: Props) => {
//   const [filteredData, setFilteredData] = useState<UniversitiesData | null>(
//     null
//   );

//   const onFilterDataReceived = (newData: UniversitiesData | null) => {
//     setFilteredData(newData);
//   };

//   return (
//     <div className="bg-white rounded-[30px] my-4">
//       <div className="flex flex-col sm:flex-row justify-center">
//         <CollegeFilter
//           exams={exams}
//           ownership={ownership}
//           indianStates={indianStates}
//           onFilterDataReceived={onFilterDataReceived} // Pass callback
//         />
//         {/* Pass both data and filteredData to CollegeList */}
//         <CollegeList data={data} filteredData={filteredData} />
//       </div>
//     </div>
//   );
// };

// export default AllUniversitiesFilter;
