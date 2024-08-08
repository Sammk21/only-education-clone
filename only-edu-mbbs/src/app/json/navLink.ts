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
      title: "Management",
      href: "/universities-list/management",
      submenu: [
        {
          id: 11,
          title: "EXAMS",
          href: "exams",
          submenu: [
            { id: 2, title: "CAT", href: "/study/exam/cat" },
            { id: 4, title: "XAT", href: "/study/exam/xat" },
            { id: 5, title: "MAT", href: "/study/exam/mat" },
          ],
        },
        {
          id: 12,
          title: "Popular Courses",
          href: "#",
          submenu: [
            {
              id: 1,
              href: "/universities-list/management?courseParam=mba",
              title: "MBA [Masters of buissness administration]",
            },
            {
              id: 2,
              href: "/universities-list/management?courseParam=bms",
              title: "BMS [Bachelors of management studies]",
            },
            {
              id: 3,
              href: "/universities-list/management?courseParam=bba",
              title: "BBA [Bachelors of buisness administration]",
            },
            {
              id: 3,
              href: "/universities-list/management?courseParam=mha",
              title: "MHA [Masters of Hospital administration]",
            },
            {
              id: 3,
              href: "/universities-list/management?courseParam=mms",
              title: "MMS [Masters of management studies]",
            },
          ],
        },
        {
          id: 13,
          title: "Mba Colleges by Location",
          href: "collegesBYLOcation",
          submenu: [
            {
              id: 1,
              href: "/universities-list/management?locationsParam=maharashtra&courseParam=mba",
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
              href: "universities-list/management",
              title: "Top Management Colleges in India",
            },
            {
              id: 2,
              href: "universities-list/management?ownershipParam=private",
              title: "Top Private Management Colleges in India",
            },
            {
              id: 3,
              href: "universities-list/management?ownershipParam=goverment",
              title: "Top Goverment Management Colleges in India",
            },
            {
              id: 4,
              href: "universities-list/management?cityParam=mumbai",
              title: "Top Management Colleges in Mumbai",
            },
            {
              id: 5,
              href: "universities-list/management?cityParam=pune",
              title: "Top Management Colleges in Pune",
            },
            {
              id: 6,
              href: "universities-list/management?cityParam=hyderabad",
              title: "Top Management Colleges in Hyderabad",
            },
            {
              id: 7,
              href: "universities-list/management?cityParam=chennai",
              title: "Top Management Colleges in Chennai",
            },
            {
              id: 8,
              href: "universities-list/management?cityParam=kolkata",
              title: "Top Management Colleges in Kolkata",
            },
            {
              id: 9,
              href: "universities-list/management?cityParam=delhi",
              title: "Top Management Colleges in Delhi",
            },
            {
              id: 10,
              href: "universities-list/management?cityParam=kerala",
              title: "Top Management Colleges in Kerala",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Design",
      href: "#",
      submenu: [
        {
          id: 21,
          title: "EXAMS",
          href: "#",
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
              href: "/study/exam/nift",
            },
            { id: 216, title: "UCEED", href: "/study/exam/uceed" },
          ],
        },
        {
          id: 22,
          title: "Popular courses",
          href: "popular-courses",
          submenu: [
            {
              id: 221,
              href: "/study/course/b-des",
              title: "Bachelor of Design (B.Des)",
            },
            {
              id: 222,
              href: "/study/course/m-des",
              title: "Master of Design (M.Des)",
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
              href: "/universities-list/design?locationParam=maharashtra",
            },
            {
              id: 232,
              title: "Design Colleges in Tamil Nadu",
              href: "/universities-list/design?locationParam=tamil-nadu",
            },
            {
              id: 233,
              title: "Design Colleges in Jharkhand",
              href: "/universities-list/design?locationParam=jharkhand",
            },
            {
              id: 234,
              title: "Design Colleges in Delhi-NCR",
              href: "/universities-list/design?locationParam=delhi",
            },
            {
              id: 235,
              title: "Design Colleges in Uttar Pradesh",
              href: "/universities-list/design?locationParam=uttar-pradesh",
            },
            {
              id: 236,
              title: "Design Colleges in Rajasthan",
              href: "/universities-list/design?locationParam=rajasthan",
            },
            {
              id: 237,
              title: "Design Colleges in Andhra Pradesh",
              href: "/universities-list/design?locationParam=andhra-pradesh",
            },
            {
              id: 238,
              title: "Design Colleges in Karnataka",
              href: "/universities-list/design?locationParam=karnataka",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Medical",
      href: "#",
      submenu: [
        {
          id: 31,
          title: "EXAMS",
          href: "#",
          submenu: [
            {
              id: 311,
              title:
                "National Eligibility cum Entrance Test Postgraduate (NEET PG)",
              href: "/study/exam/neet-pg",
            },
            {
              id: 312,
              title:
                "Institute of National Importance Combined Entrance Test (INI CET)",
              href: "/study/exam/ini-cet",
            },
            {
              id: 313,
              title:
                "National Eligibility cum Entrance Test Undergraduate (NEET UG)",
              href: "/study/exam/neet-ug",
            },
            {
              id: 314,
              title:
                "All India Institute of Medical Sciences Postgraduate (AIIMS PG)",
              href: "/study/exam/aiims-pg",
            },
            {
              id: 315,
              title:
                "Postgraduate Institute of Medical Education and Research (PGIMER)",
              href: "/study/exam/pgimer",
            },
            {
              id: 316,
              title:
                "Jawaharlal Institute of Postgraduate Medical Education and Research Postgraduate (JIPMER PG)",
              href: "/study/exam/jipmer-pg",
            },
          ],
        },
        {
          id: 32,
          title: "Popular Courses",
          href: "#",
          submenu: [
            {
              id: 321,
              title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
              href: "/study/course/mbbs",
            },
            {
              id: 322,
              title: "Doctor of Medicine (MD)",
              href: "/study/course/md",
            },
            {
              id: 323,
              title: "Bachelor of Dental Surgery (BDS)",
              href: "/study/course/bds",
            },
            {
              id: 324,
              title: "Master of Dental Surgery (MDS)",
              href: "/study/course/mds",
            },
            {
              id: 325,
              title: "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
              href: "/study/course/bams",
            },
            {
              id: 326,
              title: "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
              href: "/study/course/bhms",
            },
          ],
        },
        {
          id: 33,
          title: "Top ranked colleges",
          href: "#",
          submenu: [
            {
              id: 331,
              title: "Top Medical Colleges in India",
              href: "/universities-list/medical",
            },
            {
              id: 332,
              title: "Top Private Medical Colleges in India",
              href: "/universities-list/medical?ownershipParam=private",
            },
            {
              id: 332,
              title: "Top Government Medical Colleges in India",
              href: "/universities-list/medical?ownershipParam=government",
            },
            {
              id: 333,
              title: "Top Medical Colleges in Bangalore",
              href: "/universities-list/medical?cityParam=bangalore",
            },
            {
              id: 334,
              title: "Top Medical Colleges in Mumbai",
              href: "/universities-list/medical?cityParam=mumbai",
            },
            {
              id: 335,
              title: "Top Medical Colleges in Pune",
              href: "/universities-list/medical?cityParam=pune",
            },
            {
              id: 336,
              title: "Top Medical Colleges in Hyderabad",
              href: "/universities-list/medical?cityParam=hyderabad",
            },
            {
              id: 337,
              title: "Top Medical Colleges in Chennai",
              href: "/universities-list/medical?cityParam=chennai",
            },
            {
              id: 338,
              title: "Top Medical Colleges in Kolkata",
              href: "/universities-list/medical?cityParam=kolkata",
            },
            {
              id: 339,
              title: "Top Medical Colleges in Delhi",
              href: "/universities-list/medical?cityParam=delhi",
            },
            {
              id: 3310,
              title: "Top Medical Colleges in Kerala",
              href: "/universities-list/medical?cityParam=kerala",
            },
          ],
        },
        {
          id: 34,
          title: "Colleges by states",
          href: "#",
          submenu: [
            {
              id: 341,
              title: "Medical Colleges in Maharashtra",
              href: "/universities-list/medical?courseParam=medical",
            },
            {
              id: 342,
              title: "Medical Colleges in Tamil Nadu",
              href: "/universities-list/maharashtra/medical?courseParam=tamil-nadu",
            },
            {
              id: 343,
              title: "Medical Colleges in Jharkhand",
              href: "/universities-list/maharashtra/medical?courseParam=jharkhand",
            },
            {
              id: 344,
              title: "Medical Colleges in Delhi-NCR",
              href: "/universities-list/maharashtra/medical?courseParam=delhi",
            },
            {
              id: 345,
              title: "Medical Colleges in Uttar Pradesh",
              href: "/universities-list/maharashtra/medical?courseParam=uttarpradesh",
            },
            {
              id: 346,
              title: "Medical Colleges in Rajasthan",
              href: "/universities-list/maharashtra/medical?courseParam=rajasthan",
            },
            {
              id: 347,
              title: "Medical Colleges in Andhra Pradesh",
              href: "/universities-list/maharashtra/medical?courseParam=andhra-pradesh",
            },
            {
              id: 348,
              title: "Medical Colleges in Karnataka",
              href: "/universities-list/maharashtra/medical?courseParam=karnataka",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Engneering",
      href: "#",
      submenu: [
        {
          id: 41,
          title: "EXAMS",
          href: "#",
          submenu: [
            {
              id: 411,
              title: "Joint Entrance Examination Main (JEE Main)",
              href: "/study/exam/jee-main",
            },
            {
              id: 412,
              title: "Joint Entrance Examination Advanced (JEE Advanced)",
              href: "/study/exam/jee-advanced",
            },
            {
              id: 413,
              title: "Graduate Aptitude Test in Engineering (GATE)",
              href: "/study/exam/gate",
            },
            {
              id: 414,
              title:
                "Birla Institute of Technology and Science Admission Test (BITSAT)",
              href: "/study/exam/bitsat",
            },
            {
              id: 415,
              title:
                "Vellore Institute of Technology Engineering Entrance Exam (VITEEE)",
              href: "/study/exam/viteee",
            },
            {
              id: 416,
              title: "SRM Joint Engineering Entrance Examination (SRMJEEE)",
              href: "/study/exam/srmjeee",
            },
            {
              id: 417,
              title:
                "Kalinga Institute of Industrial Technology Entrance Exam (KIITEE)",
              href: "/study/exam/kiitee",
            },
            {
              id: 418,
              title: "West Bengal Joint Entrance Examination (WBJEE)",
              href: "/study/exam/wbjee",
            },
          ],
        },
        {
          id: 42,
          title: "Popular Courses",
          href: "#",
          submenu: [
            {
              id: 421,
              title: "B.Tech [Bachelors of technology]",
              href: "/study/course/b-tech",
            },
            {
              id: 422,
              title: "M.Tech [Masters of technology]",
              href: "/study/course/m-tech",
            },
            {
              id: 423,
              title: "B.Arch M.Tech [bachelors of Architectural engineering]",
              href: "/study/course/b-arch-e",
            },
            {
              id: 423,
              title: "B.E.E [bachelors of Electrical engineering]",
              href: "/study/course/b-e-e",
            },
            {
              id: 423,
              title: "B.E [bachelors of Engineering]",
              href: "/study/course/b-e-1",
            },
            {
              id: 423,
              title: "B.S.E [Bachelors of Software Engineering]",
              href: "/study/course/b-s-e",
            },
            {
              id: 423,
              title: "M.A.E [Masters of Aerospace engineering]",
              href: "/study/course/m-a-e",
            },
            {
              id: 423,
              title: "B.C.E [Bachelors of Civil Engineering]",
              href: "/study/course/b-c-e",
            },
            {
              id: 423,
              title: "B.M.E [Bachelors of Mechanical Engineering]",
              href: "/study/course/b-m-e",
            },
            {
              id: 423,
              title: "M.A.E [Masters of Aerospace Engineering]",
              href: "/study/course/m-a-e",
            },
            {
              id: 423,
              title: "M.C.E [Masters of Construction Engineering]",
              href: "/study/course/m-c-e",
            },
            {
              id: 423,
              title: "M.I.E [Masters of Information Engineering]",
              href: "/study/course/m-i-e",
            },
            {
              id: 423,
              title: "M.Mat.E [Masters of Material Engineering]",
              href: "/study/course/m-mat-e",
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
          href: "",
          submenu: [
            {
              id: 441,
              title: "Top Engineering Colleges in India",
              href: "/universities-list/engineering",
            },
            {
              id: 432,
              title: "Top Private Engineering Colleges in India",
              href: "/universities-list/engineering?ownershipParam=private",
            },
            {
              id: 488,
              title: "Top Government Engineering Colleges in India",
              href: "/universities-list/engineering?ownershipParam=government",
            },
            {
              id: 443,
              title: "Top Engineering Colleges in Bangalore",
              href: "/universities-list/engineering?cityParam=banglore",
            },
            {
              id: 444,
              title: "Top Engineering Colleges in Mumbai",
              href: "/universities-list/engineering?cityParam=mumbai",
            },
            {
              id: 445,
              title: "Top Engineering Colleges in Pune",
              href: "/universities-list/engineering?cityParam=pune",
            },
            {
              id: 446,
              title: "Top Engineering Colleges in Hyderabad",
              href: "/universities-list/engineering?cityParam=hyderabad",
            },
            {
              id: 447,
              title: "Top Engineering Colleges in Chennai",
              href: "/universities-list/engineering?cityParam=chennai",
            },
            {
              id: 448,
              title: "Top Engineering Colleges in Kolkata",
              href: "/universities-list/engineering?cityParam=kolkata",
            },
            {
              id: 449,
              title: "Top Engineering Colleges in Delhi",
              href: "/universities-list/engineering?cityParam=delhi",
            },
            {
              id: 4410,
              title: "Top Engineering Colleges in Kerala",
              href: "/universities-list/engineering?cityParam=kerala",
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
              href: "/universities-list/engineering?locationsParam=maharashtra",
            },
            {
              id: 452,
              title: "Engineering Colleges in Tamil Nadu",
              href: "/universities-list/engineering?locationsParam=tamil-nadu",
            },
            {
              id: 453,
              title: "Engineering Colleges in Jharkhand",
              href: "/universities-list/engineering?locationsParam=jharkhand",
            },
            {
              id: 454,
              title: "Engineering Colleges in Delhi-NCR",
              href: "/universities-list/engineering?locationsParam=delhi-ncr",
            },
            {
              id: 455,
              title: "Engineering Colleges in Uttar Pradesh",
              href: "/universities-list/engineering?locationsParam=uttar-pradesh",
            },
            {
              id: 456,
              title: "Engineering Colleges in Rajasthan",
              href: "/universities-list/engineering?locationsParam=rajasthan",
            },
            {
              id: 457,
              title: "Engineering Colleges in Andhra Pradesh",
              href: "/universities-list/engineering?locationsParam=andhra-pradesh",
            },
            {
              id: 458,
              title: "Engineering Colleges in Karnataka",
              href: "/universities-list/engineering?locationsParam=karnataka",
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
      href: "#",
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
