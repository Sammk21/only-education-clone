import { getStrapiData } from "@/utils/utils";
import { ImageExtended } from "../common/extended-image/extended-image";
import { MedalIcon, TrophyIcon } from "lucide-react";
import { ImageAttributes } from "@/types/types";

interface Ranking {
  id: number;
  rankingYear: Date;
  description: string;
  rankingNumber: number;
  course?: {
    id: number;
    title: string;
    slug: string;
    courseFullForm: string;
  };
  rankingPublisher: {
    id: 16;
    publisherName: string;
    slug: string;
    description?: string;
    publisherImage: ImageAttributes;
  };
  stream?: {
    id: number;
    title: string;
  };
}

interface Institution {
  id: number;
  title: string;
  rankingCourses: Ranking[];
}

interface streamInstitution {
  id: number;
  title: string;
  rankingStreams: Ranking[];
}
interface Data {
  data: Institution[];
}

interface StreamData {
  data: streamInstitution[];
}

const RankingUniversityPage = async ({ slug }: { slug: string }) => {
  const streamData: StreamData = await getStrapiData(
    `/api/universities?filters[slug][$eq]=${slug}&fields[0]=title&populate[rankingStreams][populate][rankingPublisher][populate][publisherImage][populate]=true&populate[rankingStreams][populate][stream][fields][0]=title`
  );

  return (
    <>
      <div className="mt-4 bg-white flex flex-col gap-6">
        <div className=" border rounded-md p-4">
          <h3 className="text-xl font-semibold">Ranking by stream</h3>
          <div className="relative overflow-x-auto shadow-sm sm:rounded-md mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Publisher
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stream
                  </th>
                  <th scope="col" className="px-6 py-3">
                    description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PublisherLogo
                  </th>
                </tr>
              </thead>
              <tbody>
                {streamData.data[0].rankingStreams.map((item) => (
                  <tr key={item.id} className="bg-white border-b">
                    <td
                      scope="row"
                      className="px-6 py-4 hover:text-orange-500 cursor-pointer underline font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.rankingPublisher.publisherName}
                    </td>
                    <td className="px-6 py-4">
                      <strong>{item.stream?.title}</strong>
                    </td>
                    <td className="px-6 py-4">
                      <strong>{item.description}</strong>
                    </td>
                    <td className="px-6 py-4">
                      <td className="px-6 py-4">
                        <strong>{item.rankingNumber}</strong>
                      </td>
                    </td>
                    <td className="px-6 py-4">
                      <ImageExtended
                        alt="The Week"
                        height={90}
                        width={180}
                        src={item.rankingPublisher.publisherImage.url}
                        className=" rounded-lg  border ml-4 flex-shrink-0  lazyloaded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="">
        <div className="accuracy flex items-center mt-6 mb-2 rounded-sm  ">
          <p className="text-sm font-normal mb-0 text-gray-500">
            Do you think the Rankings are wrong ?&nbsp; Report Here
          </p>
          <button
            type="button"
            className=" bg-white p-2 rounded-sm border border-grey-5 text-sm font-normal text-black ml-3"
          >
            Yes
          </button>
          <button
            type="button"
            className=" bg-white p-2 rounded-sm border border-grey-5 text-sm font-normal text-black ml-3"
          >
            No
          </button>
        </div>
      </div>
    </>
  );
};

export default RankingUniversityPage;
