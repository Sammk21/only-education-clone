import { HiRefresh } from "react-icons/hi";

export const navbarLinks = {
  navbar: [
    {
      id: 10,
      title: "Home",
      href: "/",
    },
    {
      id: 1,
      title: "Mba",
      href: "mba",
      submenu: [
        {
          id: 11,
          title: "EXAMS",
          href: "exams",
          submenu: [
            { id: 1, title: "CMAT", href: "/study/exam/cmat" },
            { id: 2, title: "CAT", href: "/study/exam/cat" },
            { id: 3, title: "SNAP", href: "/study/exam/snap" },
            { id: 4, title: "XAT", href: "/study/exam/xat" },
            { id: 5, title: "MAT", href: "/study/exam/mat" },
            { id: 6, title: "ATMA", href: "/study/exam/atma" },
            {
              id: 7,
              title: "NMAT by GMAC",
              href: "/study/exam/nmat-gmac",
            },
            { id: 8, title: "IBSAT", href: "ibsat" },
            {
              id: 9,
              title: "KIITEE Management",
              href: "/study/exam/kiitee",
            },
            { id: 10, title: "UPCET", href: "/study/exam/upcet" },
          ],
        },
        {
          id: 12,
          title: "Popular Courses",
          href: "popularCourses",
          submenu: [
            {
              id: 1,
              href: "/course-list?courseParam=distance-mba",
              title: "Distance MBA",
            },
            {
              id: 2,
              href: "/course-list?courseParam=online-mba",
              title: "Online MBA",
            },
            {
              id: 3,
              href: "/course-list?courseParam=parttime-mba",
              title: "Part-Time MBA",
            },
          ],
        },
        {
          id: 13,
          title: "Colleges by Location",
          href: "collegesBYLOcation",
          submenu: [
            {
              id: 1,
              href: "/universities-list?locationsParam=maharashtra&courseParam=mba",
              title: "MBA Colleges in Maharashtra",
            },
            {
              id: 2,
              href: "/universities-list?locationsParam=tamil-nadu&courseParam=mba",
              title: "MBA Colleges in Tamil Nadu",
            },
            {
              id: 3,
              href: "/universities-list?locationsParam=jharkhand&courseParam=mba",
              title: "MBA Colleges in Jharkhand",
            },
            {
              id: 4,
              href: "/universities-list?locationsParam=delhi-ncr&courseParam=mba",
              title: "MBA Colleges in Delhi-NCR",
            },
            {
              id: 5,
              href: "/universities-list?locationsParam=uttar-pradesh&courseParam=mba",
              title: "MBA Colleges in Uttar Pradesh",
            },
            {
              id: 6,
              href: "/universities-list?locationsParam=rajasthan&courseParam=mba",
              title: "MBA Colleges in Rajasthan",
            },
            {
              id: 7,
              href: "/universities-list?locationsParam=andhra-pradesh&courseParam=mba",
              title: "MBA Colleges in Andhra Pradesh",
            },
            {
              id: 8,
              href: "/universities-list?locationsParam=karnataka&courseParam=mba",
              title: "MBA Colleges in Karnataka",
            },
          ],
        },
        {
          id: 14,
          title: "Top Ranked Colleges",
          href: "topRankedColleges",
          submenu: [
            {
              id: 1,
              href: "universities-list?streamsParam=management&rankingParam=nirf",
              title: "Top MBA Colleges in India",
            },
            {
              id: 2,
              href: "ownershipParam=private&courseParam=mba",
              title: "Top Private MBA Colleges in India",
            },
            {
              id: 3,
              href: "cityParam=bangalore&courseParam=mba",
              title: "Top MBA Colleges in Bangalore",
            },
            {
              id: 4,
              href: "cityParam=mumbai&courseParam=mba",
              title: "Top MBA Colleges in Mumbai",
            },
            {
              id: 5,
              href: "cityParam=pune&courseParam=mba",
              title: "Top MBA Colleges in Pune",
            },
            {
              id: 6,
              href: "cityParam=hyderabad&courseParam=mba",
              title: "Top MBA Colleges in Hyderabad",
            },
            {
              id: 7,
              href: "cityParam=chennai&courseParam=mba",
              title: "Top MBA Colleges in Chennai",
            },
            {
              id: 8,
              href: "cityParam=kolkata&courseParam=mba",
              title: "Top MBA Colleges in Kolkata",
            },
            {
              id: 9,
              href: "cityParam=delhi&courseParam=mba",
              title: "Top MBA Colleges in Delhi",
            },
            {
              id: 10,
              href: "cityParam=kerala&courseParam=mba",
              title: "Top MBA Colleges in Kerala",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Design",
      href: "design",
      submenu: [
        {
          id: 21,
          title: "EXAMS",
          href: "exams",
          submenu: [
            {
              id: 211,
              title: "WUD Aptitude Test",
              href: "/study/exam/wud-aptitude-test",
            },
            {
              id: 212,
              title: "Pearl Academy Entrance Exam",
              href: "/study/exam/pearl-academy-entrance-exam",
            },
            { id: 213, title: "CEED", href: "/study/exam/ceed" },
            {
              id: 214,
              title: "NID Entrance Exam",
              href: "/study/exam/nid-entrance-exam",
            },
            {
              id: 215,
              title: "NIFT Entrance Exam",
              href: "/study/exam/nift-entrance-exam",
            },
            { id: 216, title: "UCEED", href: "/study/exam/uceed" },
          ],
        },
        {
          id: 22,
          title: "Popular courses",
          href: "popular-courses",
          submenu: [
            { id: 221, href: "/course-list?courseParam=bdes", title: "B.Des" },
            { id: 222, href: "/course-list?courseParam=mdes", title: "M.Des" },
            {
              id: 223,
              href: "/course-list?courseParam=bdes-fashion-design",
              title: "B.Des in Fashion Design",
            },
            {
              id: 224,
              href: "/course-list?courseParam=bdes-interior-design",
              title: "B.Des in Interior Design",
            },
            {
              id: 225,
              href: "/course-list?courseParam=bsc-fashion-design",
              title: "B.Sc in Fashion Design",
            },
            {
              id: 226,
              href: "/course-list?courseParam=bsc-interior-design",
              title: "B.Sc in Interior Design",
            },
          ],
        },
        {
          id: 23,
          title: "Colleges by States",
          href: "colleges-by-states",
          submenu: [
            {
              id: 231,
              title: "Design Colleges in Maharashtra",
              href: "/universities-list?locationsParam=maharashtra&courseParam=design",
            },
            {
              id: 232,
              title: "Design Colleges in Tamil Nadu",
              href: "/universities-list?locationsParam=tamil-nadu&courseParam=design",
            },
            {
              id: 233,
              title: "Design Colleges in Jharkhand",
              href: "/universities-list?locationsParam=jharkhand&courseParam=design",
            },
            {
              id: 234,
              title: "Design Colleges in Delhi-NCR",
              href: "/universities-list?locationsParam=delhi-ncr&courseParam=design",
            },
            {
              id: 235,
              title: "Design Colleges in Uttar Pradesh",
              href: "/universities-list?locationsParam=uttar-pradesh&courseParam=design",
            },
            {
              id: 236,
              title: "Design Colleges in Rajasthan",
              href: "/universities-list?locationsParam=rajasthan&courseParam=design",
            },
            {
              id: 237,
              title: "Design Colleges in Andhra Pradesh",
              href: "/universities-list?locationsParam=andhra-pradesh&courseParam=design",
            },
            {
              id: 238,
              title: "Design Colleges in Karnataka",
              href: "/universities-list?locationsParam=karnataka&courseParam=design",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Medical",
      href: "medical",
      submenu: [
        {
          id: 31,
          title: "EXAMS",
          href: "exams",
          submenu: [
            {
              id: 311,
              title: "NEET PG",
              href: "/study/exam/neet-pg",
            },
            {
              id: 312,
              title: "INI CET",
              href: "/study/exam/ini-cet",
            },
            {
              id: 313,
              title: "NEET UG",
              href: "/study/exam/neet-ug",
            },
            {
              id: 314,
              title: "AIIMS PG",
              href: "/study/exam/aiims-pg",
            },
            {
              id: 315,
              title: "PGIMER",
              href: "/study/exam/pgimer",
            },
            {
              id: 316,
              title: "JIPMER PG",
              href: "/study/exam/jipmer-pg",
            },
          ],
        },
        {
          id: 32,
          title: "Popular Courses",
          href: "popular-courses",
          submenu: [
            { id: 321, title: "MBBS", href: "/course-list?courseParam=mbbs" },
            { id: 322, title: "MD", href: "/course-list?courseParam=md" },
            { id: 323, title: "BDS", href: "/course-list?courseParam=bds" },
            { id: 324, title: "MDS", href: "/course-list?courseParam=mds" },
            { id: 325, title: "BAMS", href: "/course-list?courseParam=bams" },
            { id: 326, title: "BHMS", href: "/course-list?courseParam=bhms" },
          ],
        },
        {
          id: 33,
          title: "Top ranked colleges",
          href: "top-ranked-colleges",
          submenu: [
            {
              id: 331,
              title: "Top Medical Colleges in India",
              href: "courseParam=medical",
            },
            {
              id: 332,
              title: "Top Private Medical Colleges in India",
              href: "ownershipParam=private&courseParam=medical",
            },
            {
              id: 333,
              title: "Top Medical Colleges in Bangalore",
              href: "cityParam=bangalore&courseParam=medical",
            },
            {
              id: 334,
              title: "Top Medical Colleges in Mumbai",
              href: "cityParam=mumbai&courseParam=medical",
            },
            {
              id: 335,
              title: "Top Medical Colleges in Pune",
              href: "cityParam=pune&courseParam=medical",
            },
            {
              id: 336,
              title: "Top Medical Colleges in Hyderabad",
              href: "cityParam=hyderabad&courseParam=medical",
            },
            {
              id: 337,
              title: "Top Medical Colleges in Chennai",
              href: "cityParam=chennai&courseParam=medical",
            },
            {
              id: 338,
              title: "Top Medical Colleges in Kolkata",
              href: "cityParam=kolkata&courseParam=medical",
            },
            {
              id: 339,
              title: "Top Medical Colleges in Delhi",
              href: "cityParam=delhi&courseParam=medical",
            },
            {
              id: 3310,
              title: "Top Medical Colleges in Kerala",
              href: "cityParam=kerala&courseParam=medical",
            },
          ],
        },
        {
          id: 34,
          title: "Colleges by states",
          href: "colleges-by-state",
          submenu: [
            {
              id: 341,
              title: "Medical Colleges in Maharashtra",
              href: "/universities-list?locationsParam=maharashtra&courseParam=medical",
            },
            {
              id: 342,
              title: "Medical Colleges in Tamil Nadu",
              href: "/universities-list?locationsParam=tamil-nadu&courseParam=medical",
            },
            {
              id: 343,
              title: "Medical Colleges in Jharkhand",
              href: "/universities-list?locationsParam=jharkhand&courseParam=medical",
            },
            {
              id: 344,
              title: "Medical Colleges in Delhi-NCR",
              href: "/universities-list?locationsParam=delhi-ncr&courseParam=medical",
            },
            {
              id: 345,
              title: "Medical Colleges in Uttar Pradesh",
              href: "/universities-list?locationsParam=uttar-pradesh&courseParam=medical",
            },
            {
              id: 346,
              title: "Medical Colleges in Rajasthan",
              href: "/universities-list?locationsParam=rajasthan&courseParam=medical",
            },
            {
              id: 347,
              title: "Medical Colleges in Andhra Pradesh",
              href: "/universities-list?locationsParam=andhra-pradesh&courseParam=medical",
            },
            {
              id: 348,
              title: "Medical Colleges in Karnataka",
              href: "/universities-list?locationsParam=karnataka&courseParam=medical",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Engneering",
      href: "engineering",
      submenu: [
        {
          id: 41,
          title: "EXAMS",
          href: "exams",
          submenu: [
            {
              id: 411,
              title: "JEE Main",
              href: "/study/exam/jee-main",
            },
            {
              id: 412,
              title: "JEE Advanced",
              href: "/study/exam/jee-advanced",
            },
            { id: 413, title: "GATE", href: "/study/exam/gate" },
            {
              id: 414,
              title: "BITSAT",
              href: "/study/exam/bitsat",
            },
            {
              id: 415,
              title: "VITEEE",
              href: "/study/exam/viteee",
            },
            {
              id: 416,
              title: "SRMJEEE",
              href: "/study/exam/srmjeee",
            },
            {
              id: 417,
              title: "KIITEE",
              href: "/study/exam/kiitee",
            },
            { id: 418, title: "WBJEE", href: "/study/exam/wbjee" },
          ],
        },
        {
          id: 42,
          title: "Popular Courses",
          href: "popular-courses",
          submenu: [
            {
              id: 421,
              title: "B.Tech",
              href: "/course-list?courseParam=btech",
            },
            {
              id: 422,
              title: "M.Tech",
              href: "/course-list?courseParam=mtech",
            },
            {
              id: 423,
              title: "B.Arch",
              href: "/course-list?courseParam=barch",
            },
            {
              id: 424,
              title: "Diploma in Engineering",
              href: "/course-list?courseParam=diploma-in-engineering",
            },
          ],
        },
        // {
        //   id: 43,
        //   title: "Popular Specialization",
        //   href: "popular-specialization",
        //   submenu: [
        //     { id: 431, title: "Computer Science Engineering", href: "computer-science-engineering" },
        //     { id: 432, title: "Mechanical Engineering", href: "mechanical-engineering" },
        //     { id: 433, title: "Civil Engineering", href: "civil-engineering" },
        //     { id: 434, title: "Electrical Engineering", href: "electrical-engineering" },
        //     { id: 435, title: "Electronics and Communication Engineering", href: "electronics-and-communication-engineering" },
        //     { id: 436, title: "Aeronautical Engineering", href: "aeronautical-engineering" },
        //     { id: 437, title: "Biotechnology Engineering", href: "biotechnology-engineering" },
        //     { id: 438, title: "Automobile Engineering", href: "automobile-engineering" },
        //     { id: 439, title: "Chemical Engineering", href: "chemical-engineering" },
        //     { id: 4310, title: "Petroleum Engineering", href: "petroleum-engineering" },
        //     { id: 4311, title: "Software Engineering", href: "software-engineering" },
        //     { id: 4312, title: "Environmental Engineering", href: "environmental-engineering" },
        //     { id: 4313, title: "Marine Engineering", href: "marine-engineering" },
        //     { id: 4314, title: "Industrial Engineering", href: "industrial-engineering" },
        //     { id: 4315, title: "Agricultural Engineering", href: "agricultural-engineering" },
        //     { id: 4316, title: "All Engineering Specializations", href: "all-engineering-specializations" }
        //   ]
        // },
        {
          id: 44,
          title: "Top Ranked Colleges",
          href: "top-ranked-colleges",
          submenu: [
            {
              id: 441,
              title: "Top Engineering Colleges in India",
              href: "courseParam=engineering",
            },
            {
              id: 442,
              title: "Top Private Engineering Colleges in India",
              href: "ownershipParam=private&courseParam=engineering",
            },
            {
              id: 443,
              title: "Top Engineering Colleges in Bangalore",
              href: "cityParam=bangalore&courseParam=engineering",
            },
            {
              id: 444,
              title: "Top Engineering Colleges in Mumbai",
              href: "cityParam=mumbai&courseParam=engineering",
            },
            {
              id: 445,
              title: "Top Engineering Colleges in Pune",
              href: "cityParam=pune&courseParam=engineering",
            },
            {
              id: 446,
              title: "Top Engineering Colleges in Hyderabad",
              href: "cityParam=hyderabad&courseParam=engineering",
            },
            {
              id: 447,
              title: "Top Engineering Colleges in Chennai",
              href: "cityParam=chennai&courseParam=engineering",
            },
            {
              id: 448,
              title: "Top Engineering Colleges in Kolkata",
              href: "cityParam=kolkata&courseParam=engineering",
            },
            {
              id: 449,
              title: "Top Engineering Colleges in Delhi",
              href: "cityParam=delhi&courseParam=engineering",
            },
            {
              id: 4410,
              title: "Top Engineering Colleges in Kerala",
              href: "cityParam=kerala&courseParam=engineering",
            },
          ],
        },
        {
          id: 45,
          title: "Colleges by States",
          href: "colleges-by-state",
          submenu: [
            {
              id: 451,
              title: "Engineering Colleges in Maharashtra",
              href: "/universities-list?locationsParam=maharashtra&courseParam=engineering",
            },
            {
              id: 452,
              title: "Engineering Colleges in Tamil Nadu",
              href: "/universities-list?locationsParam=tamil-nadu&courseParam=engineering",
            },
            {
              id: 453,
              title: "Engineering Colleges in Jharkhand",
              href: "/universities-list?locationsParam=jharkhand&courseParam=engineering",
            },
            {
              id: 454,
              title: "Engineering Colleges in Delhi-NCR",
              href: "/universities-list?locationsParam=delhi-ncr&courseParam=engineering",
            },
            {
              id: 455,
              title: "Engineering Colleges in Uttar Pradesh",
              href: "/universities-list?locationsParam=uttar-pradesh&courseParam=engineering",
            },
            {
              id: 456,
              title: "Engineering Colleges in Rajasthan",
              href: "/universities-list?locationsParam=rajasthan&courseParam=engineering",
            },
            {
              id: 457,
              title: "Engineering Colleges in Andhra Pradesh",
              href: "/universities-list?locationsParam=andhra-pradesh&courseParam=engineering",
            },
            {
              id: 458,
              title: "Engineering Colleges in Karnataka",
              href: "/universities-list?locationsParam=karnataka&courseParam=engineering",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Entrance exams",
      href: "universities-list",
    },
    {
      id: 6,
      title: "More",
      href: "universities-list",
      submenu: [
        {
          id: 81,
          title: "More",
          href: "more",
          submenu: [
            { id: 811, title: "News", href: "/news" },
            { id: 812, title: "Articles", href: "/articles" },
          ],
        },
      ],
    },
  ],
};
// sidebarOptions.ts
