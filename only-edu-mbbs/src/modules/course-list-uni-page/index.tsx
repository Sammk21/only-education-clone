import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CourseListUniversity = () => {
  return (
    <div>
      <section className=" flex flex-col border mt-2 bg-white rounded-md p-6">
        <h2 className=" mb-1 fs-18 font-semibold text-black">
          Courses Offered By IIT Madras 2024
        </h2>
        <p className=" fs-12 font-weight-medium text-black/60 mb-4">
          Select Degree and Streams to See Course Fees and Admission Details.
        </p>
        <section>
          <div className="course-card border border-gray-5 rounded-md p-4 mt-4">
            <div className="course-detail flex justify-between">
              <Link
                className=" text-lg font-medium text-black underline"
                href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-computer-science-and-engineering-2049"
              >
                Bachelor of Technology [B.Tech] (Computer Science and
                Engineering)&nbsp;
              </Link>
              <div className=" text-end ml-4 whitespace-nowrap">
                <span className=" text-sm   text-black/70">1st Yr Fees:</span>
                <span className=" text-lg font-semibold text-green-500 ml-1">
                  ₹242,000
                </span>
              </div>
            </div>
            <div className="rating-fees text-md font-medium flex justify-between mt-1">
              <div className=" text-black/80 flex items-center">
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
                <span className=" course-separater pl-3 ml-2 position-relative">
                  4 Years{" "}
                </span>
                <span className=" course-separater pl-3 ml-2 position-relative">
                  Full Time
                </span>
              </div>
              <Button
                type="button"
                className="text-sm border-none flex items-center bg-white  p-0 font-medium text-blue-500"
              >
                Check Detailed Fees
                <span className="clg-sprite arrow-r-blue-20 icon-20 arrow-icon"></span>
              </Button>
            </div>
            <div className=" flex justify-between items-center gap-4">
              <div className="eligibility-section">
                <p className="eligibility mb-0 text-sm font-medium text-black/80">
                  Eligibility:
                </p>
                <div className="text-md font-weight-semi margint-2 text-black">
                  10+2 with 75% + JEE Advanced
                </div>
              </div>
              <div className="application-section">
                <p className="mb-0 text-sm font-medium text-black/80">
                  Application Date:
                </p>
                <div className="text-sm font-semibold margint-2 text-green-500">
                  27 Apr - 18 Jun 2024
                </div>
              </div>
              <div className="flex  gap-x-2 justify-end">
                <Button type="button" className="">
                  Brochure
                  <span className="jsx-3949341611 icon clg-sprite download-btn  ml-1  "></span>
                </Button>
                <Button className="border-orange-500 border bg-transparent text-black">
                  Apply Now
                  <span className="jsx-3949341611 icon clg-sprite apply-btn  ml-1  "></span>
                </Button>
              </div>
            </div>
          </div>
          <div className="course-card border border-gray-5 rounded-md p-4 mt-4">
            <div className="course-detail flex justify-between">
              <Link
                className=" text-lg font-medium text-black underline"
                href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-computer-science-and-engineering-2049"
              >
                Bachelor of Technology [B.Tech] (Computer Science and
                Engineering)&nbsp;
              </Link>
              <div className=" text-end ml-4 whitespace-nowrap">
                <span className=" text-sm   text-black/70">1st Yr Fees:</span>
                <span className=" text-lg font-semibold text-green-500 ml-1">
                  ₹242,000
                </span>
              </div>
            </div>
            <div className="rating-fees text-md font-medium flex justify-between mt-1">
              <div className=" text-black/80 flex items-center">
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
                <span className=" course-separater pl-3 ml-2 position-relative">
                  4 Years{" "}
                </span>
                <span className=" course-separater pl-3 ml-2 position-relative">
                  Full Time
                </span>
              </div>
              <Button
                type="button"
                className="text-sm border-none flex items-center bg-white  p-0 font-medium text-blue-500"
              >
                Check Detailed Fees
                <span className="clg-sprite arrow-r-blue-20 icon-20 arrow-icon"></span>
              </Button>
            </div>
            <div className=" flex justify-between items-center gap-4">
              <div className="eligibility-section">
                <p className="eligibility mb-0 text-sm font-medium text-black/80">
                  Eligibility:
                </p>
                <div className="text-md font-weight-semi margint-2 text-black">
                  10+2 with 75% + JEE Advanced
                </div>
              </div>
              <div className="application-section">
                <p className="mb-0 text-sm font-medium text-black/80">
                  Application Date:
                </p>
                <div className="text-sm font-semibold margint-2 text-green-500">
                  27 Apr - 18 Jun 2024
                </div>
              </div>
              <div className="flex  gap-x-2 justify-end">
                <Button type="button" className="">
                  Brochure
                  <span className="jsx-3949341611 icon clg-sprite download-btn  ml-1  "></span>
                </Button>
                <Button className="border-orange-500 border bg-transparent text-black">
                  Apply Now
                  <span className="jsx-3949341611 icon clg-sprite apply-btn  ml-1  "></span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className="bodyslot-new bodyslot-dynamic clearfix live-form-slot body-adslot-india-dynamic "
            id="bodyslot_2"
          >
            <div className="live-form-container-new clearfix">
              <h4>
                <span>
                  <span className="live-form-heading--icon"></span> Colleges
                  Application Forms 2024{" "}
                </span>
              </h4>
              <div className="live-form-body-row">
                <div
                  className="ads_body_live_form_container clearfix "
                  data-ads-id="103817"
                  data-template-type="28"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="https://admissions.mitwpu.edu.in/?utm_source=collegedunia&amp;utm_medium=liveform&amp;utm_campaign=online"
                    target="_blank"
                    rel="nofollow"
                    id="ads_viewport_103817"
                    data-id="103817"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/1518500807mitbuilding6.jpg?tr=h-90,w-185,c-force"
                            alt="MIT World Peace University - [MIT-WPU]"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1705479788MITWPUshortformlogoredandblue1.png?tr=h-40,w-40,c-force"
                            alt="MIT World Peace University - [MIT-WPU]"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating ">
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
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Infrastructure
                        </span>
                        <span
                          className="college_name"
                          title="MIT World Peace University - [MIT-WPU]"
                        >
                          MIT World Peace University - [MIT-WPU]
                        </span>
                        <span className="location text-sm">
                          Pune, Maharashtra
                        </span>
                        <div className="fees-container mt-auto">
                          <span className="fees d-flex scroller nowrap">
                            100% Placement Assistance
                          </span>
                        </div>
                        <span
                          title="51.36 LPA Highest CTC"
                          className="d-flex mb-1 scroller nowrap"
                        >
                          51.36 LPA Highest CTC
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix "
                  data-ads-id="111435"
                  data-template-type="28"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="https://registration.srmeaswari.ac.in/?utm_source=collegedunia&amp;utm_medium=liveform&amp;utm_campaign=online"
                    target="_blank"
                    rel="nofollow"
                    id="ads_viewport_111435"
                    data-id="111435"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/13432_eas cover1.jpg?tr=h-90,w-185,c-force"
                            alt="Easwari Engineering College - [EEC]"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1588765489ApprovedEECLogo.jpg?tr=h-40,w-40,c-force"
                            alt="Easwari Engineering College - [EEC]"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating ">
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
                              6.1
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Academics
                        </span>
                        <span
                          className="college_name"
                          title="Easwari Engineering College - [EEC]"
                        >
                          Easwari Engineering College - [EEC]
                        </span>
                        <span className="location text-sm">
                          Chennai, Tamil Nadu
                        </span>
                        <div className="fees-container mt-auto">
                          <span className="fees d-flex scroller nowrap">
                            100% Placement Assistance
                          </span>
                        </div>
                        <span
                          title="44 LPA Highest Package"
                          className="d-flex mb-1 scroller nowrap"
                        >
                          44 LPA Highest Package
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix "
                  data-ads-id="111361"
                  data-template-type="28"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="https://apply.trp.srmtrichy.edu.in/?utm_source=collegedunia&amp;utm_medium=liveform&amp;utm_campaign=online"
                    target="_blank"
                    rel="nofollow"
                    id="ads_viewport_111361"
                    data-id="111361"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/1624860576collegebuilding1.jpeg?tr=h-90,w-185,c-force"
                            alt="SRM TRP Engineering College"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1601801525Logo.jpg?tr=h-40,w-40,c-force"
                            alt="SRM TRP Engineering College"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating ">
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
                              4.6
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Academics
                        </span>
                        <span
                          className="college_name"
                          title="SRM TRP Engineering College"
                        >
                          SRM TRP Engineering College
                        </span>
                        <span className="location text-sm">
                          Tiruchirappalli, Tamil Nadu
                        </span>
                        <div className="fees-container mt-auto">
                          <span className="fees d-flex scroller nowrap">
                            100% Placement Assistance
                          </span>
                        </div>
                        <span
                          title="35 LPA Highest Salary"
                          className="d-flex mb-1 scroller nowrap"
                        >
                          35 LPA Highest Salary
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix "
                  data-ads-id="111449"
                  data-template-type="28"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="https://registration.srmtrichy.edu.in/?utm_source=collegedunia&amp;utm_medium=liveform&amp;utm_campaign=online"
                    target="_blank"
                    rel="nofollow"
                    id="ads_viewport_111449"
                    data-id="111449"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/1624342343cover1.jpeg?tr=h-90,w-185,c-force"
                            alt="SRM Institute of Science and Technology - [SRM IST]"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1624342343srm.jpeg?tr=h-40,w-40,c-force"
                            alt="SRM Institute of Science and Technology - [SRM IST]"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating d-none">
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
                              0
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium"></span>
                        <span
                          className="college_name"
                          title="SRM Institute of Science and Technology - [SRM IST]"
                        >
                          SRM Institute of Science and Technology - [SRM IST]
                        </span>
                        <span className="location text-sm">
                          Tiruchirappalli, Tamil Nadu
                        </span>
                        <div className="fees-container mt-auto">
                          <span className="fees d-flex scroller nowrap">
                            100% Placement Assistance
                          </span>
                        </div>
                        <span
                          title="1.1 Crore Highest Salary"
                          className="d-flex mb-1 scroller nowrap"
                        >
                          1.1 Crore Highest Salary
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="similar_college_liveform"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="/university/25895-sastra-university-thanjavur?utm_source=similar-college-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/1507785384cover.jpg?h=90&amp;w=185&amp;mode=stretch"
                            alt="SASTRA University"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1507785384logo.png?h=40&amp;w=40&amp;mode=stretch"
                            alt="SASTRA University"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating">
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
                              3.8
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Placements
                        </span>
                        <span
                          className="college_name"
                          title="SASTRA University"
                        >
                          SASTRA University
                        </span>
                        <span className="location text-sm">
                          Thanjavur, Tamil Nadu
                        </span>

                        <div className="fees-container mt-auto course-name">
                          <span className="fees">₹1.67 L </span>
                          <span className="live-form-fees">1st Year Fees</span>
                        </div>

                        <span
                          title="BE/B.Tech"
                          className="course-name d-block "
                        >
                          BE/B.Tech
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="default_review_banner"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew"
                    href="https://collegedunia.com/write-review?utm_source=review-form-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                    id="ads_viewport_88068"
                    data-id="88068"
                  ></a>
                  <div className="liveform-default-banner-container">
                    <a
                      className="ads_live_form_desktop_tnew"
                      href="https://collegedunia.com/write-review?utm_source=review-form-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                      target="_blank"
                      rel="nofollow"
                      id="ads_viewport_88068"
                      data-id="88068"
                    >
                      <div className="liveform-default-banner-info">
                        Write a Review and Earn Upto ₹500/-
                      </div>

                      <div className="liveform-default-banner-apply">
                        <span className="icon svg">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00433 10.6709C5.87447 10.541 5.80647 10.3757 5.80033 10.175C5.79466 9.97433 5.85676 9.80905 5.98662 9.67919L9.45745 6.20836H1.54183C1.34114 6.20836 1.17279 6.14036 1.03679 6.00436C0.90126 5.86883 0.833496 5.70072 0.833496 5.50002C0.833496 5.29933 0.90126 5.13098 1.03679 4.99498C1.17279 4.85946 1.34114 4.79169 1.54183 4.79169H9.45745L5.98662 1.32086C5.85676 1.191 5.79466 1.02572 5.80033 0.825024C5.80647 0.62433 5.87447 0.459052 6.00433 0.329191C6.13419 0.19933 6.29947 0.134399 6.50016 0.134399C6.70086 0.134399 6.86614 0.19933 6.996 0.329191L11.671 5.00419C11.7418 5.06322 11.7921 5.13689 11.8219 5.22519C11.8511 5.31397 11.8658 5.40558 11.8658 5.50002C11.8658 5.59447 11.8511 5.68301 11.8219 5.76565C11.7921 5.84829 11.7418 5.92502 11.671 5.99586L6.996 10.6709C6.86614 10.8007 6.70086 10.8657 6.50016 10.8657C6.29947 10.8657 6.13419 10.8007 6.00433 10.6709Z"
                              fill="#FF7900"
                            ></path>
                          </svg>
                        </span>
                        <span>Start Writing</span>
                      </div>

                      <div className="liveform-default-banner-image image-review float-right"></div>
                    </a>
                  </div>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="similar_college_liveform"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="/college/28261-college-of-engineering-anna-university-ceg-chennai?utm_source=similar-college-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/28261_COEANNA_APP.jpg?h=90&amp;w=185&amp;mode=stretch"
                            alt="College of Engineering, Anna University - [CEG]"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/13941065084.png?h=40&amp;w=40&amp;mode=stretch"
                            alt="College of Engineering, Anna University - [CEG]"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating">
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
                              4.2
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Academics
                        </span>
                        <span
                          className="college_name"
                          title="College of Engineering, Anna University - [CEG]"
                        >
                          College of Engineering, Anna University - [CEG]
                        </span>
                        <span className="location text-sm">
                          Chennai, Tamil Nadu
                        </span>

                        <div className="fees-container mt-auto course-name">
                          <span className="fees">₹47.20 K </span>
                          <span className="live-form-fees">1st Year Fees</span>
                        </div>

                        <span
                          title="BE/B.Tech"
                          className="course-name d-block "
                        >
                          BE/B.Tech
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="default_review_banner"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew"
                    href="https://collegedunia.com/college-predictor?utm_source=liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                    id="ads_viewport_88068"
                    data-id="88068"
                  ></a>
                  <div className="liveform-default-banner-container">
                    <a
                      className="ads_live_form_desktop_tnew"
                      href="https://collegedunia.com/college-predictor?utm_source=liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                      target="_blank"
                      rel="nofollow"
                      id="ads_viewport_88068"
                      data-id="88068"
                    >
                      <div className="liveform-default-banner-info">
                        Know Your Chances of Admission
                      </div>

                      <div className="liveform-default-banner-apply">
                        <span className="icon svg">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00433 10.6709C5.87447 10.541 5.80647 10.3757 5.80033 10.175C5.79466 9.97433 5.85676 9.80905 5.98662 9.67919L9.45745 6.20836H1.54183C1.34114 6.20836 1.17279 6.14036 1.03679 6.00436C0.90126 5.86883 0.833496 5.70072 0.833496 5.50002C0.833496 5.29933 0.90126 5.13098 1.03679 4.99498C1.17279 4.85946 1.34114 4.79169 1.54183 4.79169H9.45745L5.98662 1.32086C5.85676 1.191 5.79466 1.02572 5.80033 0.825024C5.80647 0.62433 5.87447 0.459052 6.00433 0.329191C6.13419 0.19933 6.29947 0.134399 6.50016 0.134399C6.70086 0.134399 6.86614 0.19933 6.996 0.329191L11.671 5.00419C11.7418 5.06322 11.7921 5.13689 11.8219 5.22519C11.8511 5.31397 11.8658 5.40558 11.8658 5.50002C11.8658 5.59447 11.8511 5.68301 11.8219 5.76565C11.7921 5.84829 11.7418 5.92502 11.671 5.99586L6.996 10.6709C6.86614 10.8007 6.70086 10.8657 6.50016 10.8657C6.29947 10.8657 6.13419 10.8007 6.00433 10.6709Z"
                              fill="#FF7900"
                            ></path>
                          </svg>
                        </span>
                        <span>Predict Now</span>
                      </div>

                      <div className="liveform-default-banner-image image-predict m-auto"></div>
                    </a>
                  </div>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="similar_college_liveform"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="/college/15475-thiagarajar-college-of-engineering-tce-madurai?utm_source=similar-college-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/15475_TCE_New.jpg?h=90&amp;w=185&amp;mode=stretch"
                            alt="Thiagarajar College of Engineering - [TCE]"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1407307643lgo.jpg?h=40&amp;w=40&amp;mode=stretch"
                            alt="Thiagarajar College of Engineering - [TCE]"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating">
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
                              4.3
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Placements
                        </span>
                        <span
                          className="college_name"
                          title="Thiagarajar College of Engineering - [TCE]"
                        >
                          Thiagarajar College of Engineering - [TCE]
                        </span>
                        <span className="location text-sm">
                          Madurai, Tamil Nadu
                        </span>

                        <div className="fees-container mt-auto course-name">
                          <span className="fees">₹82 K </span>
                          <span className="live-form-fees">1st Year Fees</span>
                        </div>

                        <span
                          title="BE/B.Tech"
                          className="course-name d-block "
                        >
                          BE/B.Tech
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="default_review_banner"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew"
                    href="https://collegedunia.com/course-finder?utm_source=liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                    id="ads_viewport_88068"
                    data-id="88068"
                  ></a>
                  <div className="liveform-default-banner-container">
                    <a
                      className="ads_live_form_desktop_tnew"
                      href="https://collegedunia.com/course-finder?utm_source=liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                      target="_blank"
                      rel="nofollow"
                      id="ads_viewport_88068"
                      data-id="88068"
                    >
                      <div className="liveform-default-banner-info">
                        Find Courses with Help of AI Based Course Finder
                      </div>

                      <div className="liveform-default-banner-apply">
                        <span className="icon svg">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 12 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.00433 10.6709C5.87447 10.541 5.80647 10.3757 5.80033 10.175C5.79466 9.97433 5.85676 9.80905 5.98662 9.67919L9.45745 6.20836H1.54183C1.34114 6.20836 1.17279 6.14036 1.03679 6.00436C0.90126 5.86883 0.833496 5.70072 0.833496 5.50002C0.833496 5.29933 0.90126 5.13098 1.03679 4.99498C1.17279 4.85946 1.34114 4.79169 1.54183 4.79169H9.45745L5.98662 1.32086C5.85676 1.191 5.79466 1.02572 5.80033 0.825024C5.80647 0.62433 5.87447 0.459052 6.00433 0.329191C6.13419 0.19933 6.29947 0.134399 6.50016 0.134399C6.70086 0.134399 6.86614 0.19933 6.996 0.329191L11.671 5.00419C11.7418 5.06322 11.7921 5.13689 11.8219 5.22519C11.8511 5.31397 11.8658 5.40558 11.8658 5.50002C11.8658 5.59447 11.8511 5.68301 11.8219 5.76565C11.7921 5.84829 11.7418 5.92502 11.671 5.99586L6.996 10.6709C6.86614 10.8007 6.70086 10.8657 6.50016 10.8657C6.29947 10.8657 6.13419 10.8007 6.00433 10.6709Z"
                              fill="#FF7900"
                            ></path>
                          </svg>
                        </span>
                        <span>Start Now</span>
                      </div>

                      <div className="liveform-default-banner-image image-course-finder m-auto"></div>
                    </a>
                  </div>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="similar_college_liveform"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="/college/28254-srm-engineering-college-kanchipuram?utm_source=similar-college-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/28254_cover1.jpg?h=90&amp;w=185&amp;mode=stretch"
                            alt="SRM Engineering College"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/15807276491569304335phpHattQO.png?h=40&amp;w=40&amp;mode=stretch"
                            alt="SRM Engineering College"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating">
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
                              3.7
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Social Life
                        </span>
                        <span
                          className="college_name"
                          title="SRM Engineering College"
                        >
                          SRM Engineering College
                        </span>
                        <span className="location text-sm">
                          Kanchipuram, Tamil Nadu
                        </span>

                        <div className="fees-container mt-auto course-name">
                          <span className="fees">₹2.75 L </span>
                          <span className="live-form-fees">1st Year Fees</span>
                        </div>

                        <span
                          title="BE/B.Tech"
                          className="course-name d-block "
                        >
                          BE/B.Tech
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="similar_college_liveform"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="/university/25889-nit-trichy-tiruchirappalli?utm_source=similar-college-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/1575529948nitt.jpeg?h=90&amp;w=185&amp;mode=stretch"
                            alt="NIT Trichy"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1593757072download.png?h=40&amp;w=40&amp;mode=stretch"
                            alt="NIT Trichy"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating">
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
                              4.2
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Social Life
                        </span>
                        <span className="college_name" title="NIT Trichy">
                          NIT Trichy
                        </span>
                        <span className="location text-sm">
                          Tiruchirappalli, Tamil Nadu
                        </span>

                        <div className="fees-container mt-auto course-name">
                          <span className="fees">₹1.80 L </span>
                          <span className="live-form-fees">1st Year Fees</span>
                        </div>

                        <span
                          title="BE/B.Tech"
                          className="course-name d-block "
                        >
                          BE/B.Tech
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
                <div
                  className="ads_body_live_form_container clearfix"
                  data-rank="2"
                  data-category="similar_college_liveform"
                  data-label=""
                  data-non-interaction="true"
                >
                  <a
                    className="ads_live_form_desktop_tnew liveform-similar-colleges"
                    href="/college/24312-psg-college-of-technology-psgct-coimbatore?utm_source=similar-college-ad-liveform&amp;utm_medium=Body&amp;utm_campaign=desktop"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div className="d-flex flex-column h-100">
                      <div className="top-section">
                        <div className="banner-container">
                          <img
                            className="banner"
                            src="https://images.collegedunia.com/public/college_data/images/appImage/1507718984cvr.png?h=90&amp;w=185&amp;mode=stretch"
                            alt="P.S.G College of Technology - [PSGCT]"
                          />
                          <img
                            className="logo"
                            src="https://images.collegedunia.com/public/college_data/images/logos/1536904390Logo.jpg?h=40&amp;w=40&amp;mode=stretch"
                            alt="P.S.G College of Technology - [PSGCT]"
                          />
                          <span className="d-inline-flex align-items-center justify-content-center rating">
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
                              4.4
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="info-section d-flex flex-column flex-fill py-2 px-3">
                        <span className="tagline font-weight-medium">
                          Best in Placements
                        </span>
                        <span
                          className="college_name"
                          title="P.S.G College of Technology - [PSGCT]"
                        >
                          P.S.G College of Technology - [PSGCT]
                        </span>
                        <span className="location text-sm">
                          Coimbatore, Tamil Nadu
                        </span>

                        <div className="fees-container mt-auto course-name">
                          <span className="fees">₹55 K </span>
                          <span className="live-form-fees">1st Year Fees</span>
                        </div>

                        <span
                          title="BE/B.Tech"
                          className="course-name d-block "
                        >
                          BE/B.Tech
                        </span>
                        <div className="apply-btn ">
                          <div className="apply">
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
                            <span className="aply-now">Apply Now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ads_bottom_border"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="course-card border border-gray-5 rounded-8 p-4 mt-4">
            <div className="course-detail d-flex justify-content-between">
              <a
                data-csm-title="Bachelor of Technology [B.Tech] (Mechanical Engineering)"
                data-csm-track="true"
                data-event-type="course_section"
                data-ga-href="university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-mechanical-engineering-2094"
                data-ga-module="college_detail"
                data-ga-section="Courses Offered By IIT Madras 2024"
                data-ga-title="Bachelor of Technology [B.Tech] (Mechanical Engineering)"
                data-ga-track="true"
                className="fs-18 font-weight-semi text-primary-black text-underline"
                href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-mechanical-engineering-2094"
              >
                Bachelor of Technology [B.Tech] (Mechanical Engineering)&nbsp;
              </a>
              <div className="text-end ml-4 white-space-nowrap">
                <span className="fs-14 font-weight-normal text-dark-grey">
                  1st Yr Fees:
                </span>
                <span className="fs-18 font-weight-semi text-primary-green ml-1">
                  ₹242,000
                </span>
              </div>
            </div>
            <div className="rating-fees d-flex justify-content-between mt-1">
              <div className="fs-14 font-weight-normal text-dark-grey d-flex">
                <span className="mr-2 d-flex align-items-center">
                  <span className="font-weight-medium text-primary-black">
                    4.1
                  </span>
                  <span className="clg-sprite star-yellow-20 icon-20 star-icon"></span>
                  <a
                    data-csm-title="32 Reviews"
                    data-csm-track="true"
                    data-event-type="course_section"
                    data-ga-href="university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/reviews"
                    data-ga-module="college_detail"
                    data-ga-section="Courses Offered By IIT Madras 2024"
                    data-ga-title="32 Reviews"
                    data-ga-track="true"
                    className="text-gray-10"
                    href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/reviews?courseTag=18&amp;course=2094"
                  >
                    (32 Reviews)
                  </a>
                </span>
                <span className=" course-separater pl-3 ml-2 position-relative">
                  4 Years{" "}
                </span>
                <span className=" course-separater pl-3 ml-2 position-relative">
                  Full Time
                </span>
              </div>
              <button
                data-course-tag="18"
                data-ga-module="college_detail"
                data-ga-section="Courses Offered By IIT Madras 2024"
                data-ga-title="Check Detailed Fees"
                data-ga-track="true"
                type="button"
                className="btn-text border-none d-flex align-items-center bg-white fs-14 p-0 font-weight-medium text-primary-blue"
              >
                Check Detailed Fees
                <span className="clg-sprite arrow-r-blue-20 icon-20 arrow-icon"></span>
              </button>
            </div>
            <div className="ele-date-cta-section d-flex justify-content-between align-items-center gap-14">
              <div className="eligibility-section">
                <p className="eligibility mb-0 fs-12 font-weight-medium text-dark-grey">
                  Eligibility:
                </p>
                <div className="fs-14 font-weight-semi margint-2 text-primary-black">
                  10+2 with 75% + JEE Advanced
                </div>
              </div>
              <div className="application-section">
                <p className="mb-0 fs-12 font-weight-medium text-dark-grey">
                  Application Date:
                </p>
                <div className="fs-14 font-weight-semi margint-2 text-primary-green">
                  27 Apr - 18 Jun 2024
                </div>
              </div>
              <div className="d-flex  justify-content-end">
                <button
                  type="button"
                  data-course-tag="18"
                  data-ga-module="college_detail"
                  data-ga-section="Courses Offered By IIT Madras 2024"
                  data-ga-title="Download Brochure"
                  data-ga-track="true"
                  className="jsx-3949341611 cta-btn d-flex align-items-center justify-content-center font-weight-medium rounded-100 btn-blue-border w-165 fs-16"
                >
                  Brochure
                  <span className="jsx-3949341611 icon clg-sprite download-btn  ml-1  "></span>
                </button>
                <button
                  type="button"
                  data-course-tag="18"
                  data-ga-module="college_detail"
                  data-ga-section="Courses Offered By IIT Madras 2024"
                  data-ga-title="Apply Now"
                  data-ga-track="true"
                  className="jsx-3949341611 cta-btn d-flex align-items-center justify-content-center font-weight-medium rounded-100 btn-orange-border w-165 ml-4 fs-16"
                >
                  Apply Now
                  <span className="jsx-3949341611 icon clg-sprite apply-btn  ml-1  "></span>
                </button>
              </div>
            </div>
          </div>
          <div className="seperator h-8"></div>
          <div className="course-card border border-gray-5 rounded-8 p-4 mt-4">
            <div className="course-detail d-flex justify-content-between">
              <a
                data-csm-title="Bachelor of Technology [B.Tech] (Naval architecture &amp; Ocean Engineering)"
                data-csm-track="true"
                data-event-type="course_section"
                data-ga-href="university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-naval-architecture-and-ocean-engineering-2103"
                data-ga-module="college_detail"
                data-ga-section="Courses Offered By IIT Madras 2024"
                data-ga-title="Bachelor of Technology [B.Tech] (Naval architecture &amp; Ocean Engineering)"
                data-ga-track="true"
                className="fs-18 font-weight-semi text-primary-black text-underline"
                href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-naval-architecture-and-ocean-engineering-2103"
              >
                Bachelor of Technology [B.Tech] (Naval architecture &amp; Ocean
                Engineering)&nbsp;
              </a>
              <div className="text-end ml-4 white-space-nowrap">
                <span className="fs-14 font-weight-normal text-dark-grey">
                  1st Yr Fees:
                </span>
                <span className="fs-18 font-weight-semi text-primary-green ml-1">
                  ₹242,000
                </span>
              </div>
            </div>
            <div className="rating-fees d-flex justify-content-between mt-1">
              <div className="fs-14 font-weight-normal text-dark-grey d-flex">
                <span className="mr-2 d-flex align-items-center">
                  <span className="font-weight-medium text-primary-black">
                    4.0
                  </span>
                  <span className="clg-sprite star-yellow-20 icon-20 star-icon"></span>
                  <a
                    data-csm-title="12 Reviews"
                    data-csm-track="true"
                    data-event-type="course_section"
                    data-ga-href="university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/reviews"
                    data-ga-module="college_detail"
                    data-ga-section="Courses Offered By IIT Madras 2024"
                    data-ga-title="12 Reviews"
                    data-ga-track="true"
                    className="text-gray-10"
                    href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/reviews?courseTag=18&amp;course=2103"
                  >
                    (12 Reviews)
                  </a>
                </span>
                <span className=" course-separater pl-3 ml-2 position-relative">
                  4 Years{" "}
                </span>
                <span className=" course-separater pl-3 ml-2 position-relative">
                  Full Time
                </span>
              </div>
              <button
                data-course-tag="18"
                data-ga-module="college_detail"
                data-ga-section="Courses Offered By IIT Madras 2024"
                data-ga-title="Check Detailed Fees"
                data-ga-track="true"
                type="button"
                className="btn-text border-none d-flex align-items-center bg-white fs-14 p-0 font-weight-medium text-primary-blue"
              >
                Check Detailed Fees
                <span className="clg-sprite arrow-r-blue-20 icon-20 arrow-icon"></span>
              </button>
            </div>
            <div className="ele-date-cta-section d-flex justify-content-between align-items-center gap-14">
              <div className="eligibility-section">
                <p className="eligibility mb-0 fs-12 font-weight-medium text-dark-grey">
                  Eligibility:
                </p>
                <div className="fs-14 font-weight-semi margint-2 text-primary-black">
                  10+2 with 75% + JEE Advanced
                </div>
              </div>
              <div className="application-section">
                <p className="mb-0 fs-12 font-weight-medium text-dark-grey">
                  Application Date:
                </p>
                <div className="fs-14 font-weight-semi margint-2 text-primary-green">
                  27 Apr - 18 Jun 2024
                </div>
              </div>
              <div className="d-flex  justify-content-end">
                <button
                  type="button"
                  data-course-tag="18"
                  data-ga-module="college_detail"
                  data-ga-section="Courses Offered By IIT Madras 2024"
                  data-ga-title="Download Brochure"
                  data-ga-track="true"
                  className="jsx-3949341611 cta-btn d-flex align-items-center justify-content-center font-weight-medium rounded-100 btn-blue-border w-165 fs-16"
                >
                  Brochure
                  <span className="jsx-3949341611 icon clg-sprite download-btn  ml-1  "></span>
                </button>
                <button
                  type="button"
                  data-course-tag="18"
                  data-ga-module="college_detail"
                  data-ga-section="Courses Offered By IIT Madras 2024"
                  data-ga-title="Apply Now"
                  data-ga-track="true"
                  className="jsx-3949341611 cta-btn d-flex align-items-center justify-content-center font-weight-medium rounded-100 btn-orange-border w-165 ml-4 fs-16"
                >
                  Apply Now
                  <span className="jsx-3949341611 icon clg-sprite apply-btn  ml-1  "></span>
                </button>
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
          </div>
        </section>
      </section>
    </div>
  );
};
