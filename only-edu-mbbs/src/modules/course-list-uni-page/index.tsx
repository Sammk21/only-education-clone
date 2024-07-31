"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CourseDataResponse } from "@/app/(main)/study/uni/[slug]/page";

interface Props {
  data: CourseDataResponse;
}

export const CourseListUniversity = ({ data }: Props) => {
  const { title, slug } = data.data[0];
  const [showSpecializations, setShowSpecializations] = useState<{
    [key: number]: boolean;
  }>({});

  const handleToggleSpecializations = (courseId: number) => {
    setShowSpecializations((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  return (
    <div>
      <section className="flex flex-col border mt-2 bg-white rounded-md p-6">
        <h2 className="mb-1 text-lg font-semibold text-black">
          Courses Offered By {title} 2024
        </h2>
        <p className="font-medium text-md text-black/60 mb-4">
          Select Degree and Streams to See Course Fees and Admission Details.
        </p>
        <section>
          <div className="mt-4 space-y-4">
            {data.data[0].collegeCourseManager.map((item) => (
              <div key={item.id} className="border rounded-md p-4 bg-white">
                <div className="px-4 pt-2 pb-1">
                  <div className="course-detail flex justify-between">
                    <Link
                      className="text-lg font-medium text-black underline"
                      href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-computer-science-and-engineering-2049"
                    >
                      {item.course.courseFullForm} [{item.course.title}]
                    </Link>
                    <div className="text-end ml-4 whitespace-nowrap">
                      <span className="text-sm text-black/70">
                        1st Yr Fees:
                      </span>
                      <span className="text-lg font-semibold text-green-500 ml-1">
                        ₹{item.fees}
                      </span>
                    </div>
                  </div>
                  <div className="rating-fees text-md font-medium flex justify-between mt-1">
                    <div className="text-black/80 flex items-center">
                      <span className="mr-2 flex items-center">
                        <span className="font-weight-medium text-primary-black">
                          4.5
                        </span>
                        <span className="clg-sprite star-yellow-20 icon-20 star-icon"></span>
                        <Link
                          className="text-gray-500"
                          href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/reviews?courseTag=18&amp;course=2049"
                        >
                          (26 Reviews)
                        </Link>
                      </span>
                      <span className="course-separater pl-3 ml-2 position-relative">
                        Year: {item.course.durationYear}
                      </span>
                      <span className="course-separater pl-3 ml-2 position-relative">
                        Full Time
                      </span>
                    </div>
                    <Button
                      type="button"
                      className="text-sm border-none flex items-center bg-white p-0 font-medium text-blue-500"
                    >
                      Check Detailed Fees
                      <span className="clg-sprite arrow-r-blue-20 icon-20 arrow-icon"></span>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center gap-4 mt-4">
                    <div className="eligibility-section">
                      <p className="eligibility mb-0 text-sm font-medium text-black/80">
                        Eligibility:
                      </p>
                      <div className="text-md font-weight-semi mt-2 text-black">
                        {item.eligibility}
                      </div>
                    </div>
                    <div className="application-section">
                      <p className="mb-0 text-sm font-medium text-black/80">
                        Application Date:
                      </p>
                      <div className="text-sm font-semibold mt-2 text-green-500">
                        {item.applicationDate?.startDate} -{" "}
                        {item.applicationDate?.endDate}
                      </div>
                    </div>
                    <div className="flex gap-x-2 justify-end">
                      <Button type="button" className="">
                        Brochure
                        <span className="jsx-3949341611 icon clg-sprite download-btn ml-1"></span>
                      </Button>
                      <Button className="border-orange-500 border bg-transparent text-black">
                        Apply Now
                        <span className="jsx-3949341611 icon clg-sprite apply-btn ml-1"></span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="text-blue-500 text-sm font-medium py-1 bg-accent/30 rounded-md px-3 cursor-pointer mt-4"
                  onClick={() => handleToggleSpecializations(item.id)}
                >
                  {showSpecializations[item.id] ? "Hide" : "View"} all
                  specializations ({item.spzm.length})
                </div>
                {showSpecializations[item.id] && (
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            {item.course.title} Specialisations
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Fees
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Cut off
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.spzm.map((spec) => (
                          <tr key={spec.id} className="bg-white border-b">
                            <th
                              scope="row"
                              className="px-6 py-4 hover:text-orange-500 cursor-pointer underline font-medium text-gray-900 whitespace-nowrap"
                            >
                              {spec.specialization.title}
                            </th>
                            <td className="px-6 py-4">{spec.fees}</td>
                            <td className="px-6 py-4">
                              {spec.entrance_exam.title} {spec.cutoff}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

{
  /* <div
className="bodyslot-new bodyslot-dynamic clearfix live-form-slot body-adslot-india-dynamic "
id="bodyslot_2"
>
<div className="live-form-container-new clearfix">
  <h4 className="font-medium text-md text-black/60 mb-4">
    <span>
      <span className="live-form-heading--icon"></span> Colleges
      Application Forms 2024{" "}
    </span>
  </h4>
  <div className="">
    <div
      className="h-72 w-64 border rounded-sm "
      data-ads-id="103817"
      data-template-type="28"
    >
      <Link
        className="ads_live_form_desktop_tnew liveform-similar-colleges h-full"
        href="https://admissions.mitwpu.edu.in/?utm_source=collegedunia&amp;utm_medium=liveform&amp;utm_campaign=online"
        target="_blank"
        rel="nofollow"
        id="ads_viewport_103817"
        data-id="103817"
      >
        <div className="grid grid-rows-5 h-full">
          <div className="top-section h-full row-span-2">
            <div className="banner-container h-full relative">
              <Image
                className="banner object-center object-cover"
                fill={true}
                src="https://admin.onlyeducation.co.in/uploads/images_2bb66342df.jpg"
                alt="MIT World Peace University - [MIT-WPU]"
              />
              <Image
                width={32}
                height={32}
                className="logo absolute left-2 bottom-2 bg-white rounded-sm"
                src="https://admin.onlyeducation.co.in/uploads/iit_logo_427caff69e.png"
                alt="MIT World Peace University - [MIT-WPU]"
              />
              <span className="inline-flex items-center justify-center ">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5013 8.81086L3.11068 10.6348C3.01623 10.7175 2.90998 10.7559 2.79193 10.7503C2.67387 10.7441 2.57352 10.7116 2.49088 10.6525C2.39644 10.5935 2.32561 10.508 2.27838 10.3961C2.23116 10.2837 2.22526 10.1685 2.26068 10.0504L3.18151 7.05773L0.879426 5.41086C0.773176 5.34002 0.705412 5.24865 0.676134 5.13673C0.646384 5.02434 0.649217 4.91502 0.684634 4.80877C0.720051 4.70252 0.782148 4.61398 0.870926 4.54315C0.959231 4.47231 1.06831 4.4369 1.19818 4.4369H4.06693L4.98776 1.35565C5.03498 1.23759 5.10581 1.14315 5.20026 1.07231C5.2947 1.00148 5.39505 0.966064 5.5013 0.966064C5.60755 0.966064 5.7079 1.00148 5.80234 1.07231C5.89679 1.14315 5.96762 1.23759 6.01484 1.35565L6.93568 4.4369H9.80443C9.93429 4.4369 10.0436 4.47231 10.1324 4.54315C10.2207 4.61398 10.2826 4.70252 10.318 4.80877C10.3534 4.91502 10.3562 5.02434 10.3265 5.13673C10.2972 5.24865 10.2294 5.34002 10.1232 5.41086L7.82109 7.05773L8.74193 10.0504C8.77734 10.1685 8.77144 10.2837 8.72422 10.3961C8.677 10.508 8.60616 10.5935 8.51172 10.6525C8.42908 10.7116 8.32873 10.7441 8.21068 10.7503C8.09262 10.7559 7.98637 10.7175 7.89193 10.6348L5.5013 8.81086Z"
                    fill="#FFC400"
                  ></path>
                </svg>
                <span className="ml-1 font-weight-medium text-md">
                  6.2
                </span>
              </span>
            </div>
          </div>
          <div className="h-full flex flex-col p-1 row-span-3">
            <span className="tagline font-medium bg-green-500/50 text-green-700 border text-xs px-1 ">
              Best in Infrastructure
            </span>
            <div>
              <p className="line-clamp-2 text-md font-semibold underline text-black">
                MIT World Peace University - [MIT-WPU]
              </p>
              <p className="location text-xs text-black">
                Pune, Maharashtra
              </p>

              <p className="fees d-flex scroller nowrap text-green-600">
                100% Placement Assistance
              </p>
            </div>

            <p className="flex mb-1 scroller nowrap text-black text-lg">
              51.36 LPA Highest CTC
            </p>
            <div className="apply-btn  ">
              <div className="apply flex  items-center font-medium text-orange-500 gap-x-2">
                <span className="aply-now">Apply Now</span>
                <span className="svg icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.41683 13.0833C6.26405 12.9306 6.18405 12.7361 6.17683 12.5C6.17016 12.2639 6.24322 12.0694 6.396 11.9167L10.4793 7.83333H1.16683C0.930718 7.83333 0.732663 7.75333 0.572663 7.59333C0.413218 7.43389 0.333496 7.23611 0.333496 7C0.333496 6.76389 0.413218 6.56583 0.572663 6.40583C0.732663 6.24639 0.930718 6.16667 1.16683 6.16667H10.4793L6.396 2.08333C6.24322 1.93056 6.17016 1.73611 6.17683 1.5C6.18405 1.26389 6.26405 1.06944 6.41683 0.916666C6.56961 0.763889 6.76405 0.6875 7.00016 0.6875C7.23627 0.6875 7.43072 0.763889 7.5835 0.916666L13.0835 6.41667C13.1668 6.48611 13.226 6.57278 13.261 6.67667C13.2954 6.78111 13.3127 6.88889 13.3127 7C13.3127 7.11111 13.2954 7.21528 13.261 7.3125C13.226 7.40972 13.1668 7.5 13.0835 7.58333L7.5835 13.0833C7.43072 13.2361 7.23627 13.3125 7.00016 13.3125C6.76405 13.3125 6.56961 13.2361 6.41683 13.0833Z"
                      fill="#FF7900"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ads_bottom_border"></div>
      </Link>
    </div>
  </div>
</div>
</div>

<div className="banner-ad-slot-india no-zoom" id="bodyslot_4">
<div
  data-ads-id="79104"
  data-ads-type="ad_code"
  data-page-type="global"
  data-script="true"
  className="ads_body_ad_code_container clearfix"
></div>
<div id="ads_viewport_79104" data-id="79104">
  <center></center>
</div>
</div> */
}
