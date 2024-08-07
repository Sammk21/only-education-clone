import { getStrapiData } from "@/utils/utils";
import React from "react";
import { ImageExtended } from "../common/extended-image/extended-image";

interface Publisher {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publisherName: string;
  slug: string;
  description: string | null;
}

interface Course {
  id: number;
  title: string;
  slug: string;
  courseFullForm: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  durationYear: number;
  authorName: string | null;
}

interface Stream {
  id: number;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface RankingCourse {
  id: number;
  rankingYear: string;
  description: string;
  rankingNumber: number;
  rankingPublisher: Publisher;
  pdfData: {
    url: string;
  };
  course: Course;
  stream: Stream;
}

interface College {
  id: number;
  title: string;
  slug: string;
  noOfStudentsStudying: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  authorName: string;
  rankingCourses: RankingCourse[];
}

interface CollegesData {
  data: College[];
}

const CourseRankingUniversityPage = async ({ slug }: { slug: string }) => {
  const data: CollegesData = await getStrapiData(
    `/api/universities?[filters][slug]=${slug}&populate[rankingCourses][populate][rankingPublisher][populate]=true&populate[rankingCourses][populate][pdfData][fields][0]=url&populate[rankingCourses][populate][course][populate]=true&populate[rankingCourses][populate][stream][populate]=true`
  );

  return (
    <div className="mt-4 bg-white flex flex-col gap-6">
      <div className=" border rounded-md p-4">
        <h3 className="text-xl font-semibold text-black">
          Ranking by Course for {data.data[0].title}
        </h3>
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
                  Course
                </th>
                <th scope="col" className="px-6 py-3">
                  description
                </th>
                <th scope="col" className="px-6 py-3">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data[0].rankingCourses.map((item) => (
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
                    <strong>{item.course.title}</strong>
                  </td>
                  <td className="px-6 py-4">
                    <strong>{item.description}</strong>
                  </td>
                  <td className="px-6 py-4">
                    <td className="px-6 py-4">
                      <strong>{item.rankingNumber}</strong>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CourseRankingUniversityPage;
