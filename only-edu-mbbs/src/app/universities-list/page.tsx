import AllUniversitiesList from "@/modules/all-universities-list";
import { getStrapiData } from "@/utils/utils";

const universityListQuery =
  "/api/universities?populate[universityProfile][populate][backgroundImage][populate][0]=universityProfile.backgroundImage&populate[streams][populate]=true&populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true";

const ownershipQuery = "/api/ownerships?populate=true";
const indianStatesQuery = "/api/indian-states?populate=true";
const examsQuery = "/api/exams?populate=true";
const filterDataQuery =
  "api/universities?populate[indian_state][populate]=true&populate[ownership][populate]=true&populate[exams][populate]=true";

export default async function UniversitiesList() {
  const data = await getStrapiData(universityListQuery);
  const ownership = await getStrapiData(ownershipQuery);
  const indianStates = await getStrapiData(indianStatesQuery);
  const exams = await getStrapiData(examsQuery);
  const filterData = await getStrapiData(filterDataQuery);

  return (
    <div className="bg-white rounded-[30px] my-4">
      <AllUniversitiesList
        exams={exams}
        ownership={ownership}
        indianStates={indianStates}
        data={data}
        filterData={filterData}
      />
    </div>
  );
}
