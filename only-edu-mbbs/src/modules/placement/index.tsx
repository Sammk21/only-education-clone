import React from "react";

interface Listprops {
  id: number;
  list: string;
}

interface Props {
  data: {
    id: number;
    list: Listprops[];
    placementTable: Listprops[];
  };
}
const PlacementInfo = ({ data }: Props) => {
  return (
    <section className="container">
      <h2 className="text-4xl font-medium  mb-6 text-dark">
        Placement Facility
      </h2>
      <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {data.list.map((item) => (
          <li key={item.id} className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            {item.list}
          </li>
        ))}
      </ul>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th>Particulars</th>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Number of Students Eligible for Placements</td>
              <td>{data.placementTable[0].list}</td>
            </tr>
            <tr>
              <td>Total Students Placed</td>
              <td>{data.placementTable[1].list}</td>
            </tr>
            <tr>
              <td>Total Students Placed</td>
              <td>{data.placementTable[2].list}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PlacementInfo;
