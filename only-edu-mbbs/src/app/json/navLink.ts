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
            { id:1,title: "CMAT", href: "cmat" },
            { id:2,title: "CAT", href: "cat" },
            { id:3,title: "SNAP", href: "snap" },
            { id:4,title: "XAT", href: "xat" },
            { id:5,title: "MAT", href: "mat" },
            { id:6,title: "ATMA", href: "atma" },
            { id:7,title: "NMAT by GMAC", href: "nmat-gmac" },
            { id:8,title: "IBSAT", href: "ibsat" },
            { id:9,title: "KIITEE Management", href: "kiitee" },
            { id:10,title: "UPCET", href: "upcet" }
          ],
        },
        {
          id: 12,
          title: "Popular Courses",
          href: "popularCourses",
          submenu: [
            { 
id:1, href: "distance-mba", title: "Distance MBA" },
            { 
id:2, href: "online-mba", title: "Online MBA" },
            { 
id:3, href: "parttime-mba", title: "Part-Time MBA" }
          ],
        },
        {
          id: 13,
          title: "Colleges by Location",
          href: "collegesBYLOcation",
          submenu: [
            { id: 1, href: "stateParam=maharashtra&courseParam=mba", title: "MBA Colleges in Maharashtra" },
    { id: 2, href: "stateParam=tamil-nadu&courseParam=mba", title: "MBA Colleges in Tamil Nadu" },
    { id: 3, href: "stateParam=jharkhand&courseParam=mba", title: "MBA Colleges in Jharkhand" },
    { id: 4, href: "stateParam=delhi-ncr&courseParam=mba", title: "MBA Colleges in Delhi-NCR" },
    { id: 5, href: "stateParam=uttar-pradesh&courseParam=mba", title: "MBA Colleges in Uttar Pradesh" },
    { id: 6, href: "stateParam=rajasthan&courseParam=mba", title: "MBA Colleges in Rajasthan" },
    { id: 7, href: "stateParam=andhra-pradesh&courseParam=mba", title: "MBA Colleges in Andhra Pradesh" },
    { id: 8, href: "stateParam=karnataka&courseParam=mba", title: "MBA Colleges in Karnataka" }
          ],
        },
        {
          id: 14,
          title: "Top Ranked Colleges",
          href: "topRankedColleges",
          submenu: [
            { id: 1, href: "courseParam=mba", title: "Top MBA Colleges in India" },
            { id: 2, href: "ownershipParam=private&courseParam=mba", title: "Top Private MBA Colleges in India" },
            { id: 3, href: "cityParam=bangalore&courseParam=mba", title: "Top MBA Colleges in Bangalore" },
            { id: 4, href: "cityParam=mumbai&courseParam=mba", title: "Top MBA Colleges in Mumbai" },
            { id: 5, href: "cityParam=pune&courseParam=mba", title: "Top MBA Colleges in Pune" },
            { id: 6, href: "cityParam=hyderabad&courseParam=mba", title: "Top MBA Colleges in Hyderabad" },
            { id: 7, href: "cityParam=chennai&courseParam=mba", title: "Top MBA Colleges in Chennai" },
            { id: 8, href: "cityParam=kolkata&courseParam=mba", title: "Top MBA Colleges in Kolkata" },
            { id: 9, href: "cityParam=delhi&courseParam=mba", title: "Top MBA Colleges in Delhi" },
            { id: 10, href: "cityParam=kerala&courseParam=mba", title: "Top MBA Colleges in Kerala" }
        
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Design",
      href: "design",
      submenu: [{
          id: 21,
          title: "EXAMS",
          href: "exams",
          submenu: [
              { id: 211, title: "WUD Aptitude Test", href: "wud-aptitude-test" },
              { id: 212, title: "Pearl Academy Entrance Exam", href: "pearl-academy-entrance-exam" },
              { id: 213, title: "CEED", href: "ceed" },
              { id: 214, title: "NID Entrance Exam", href: "nid-entrance-exam" },
              { id: 215, title: "NIFT Entrance Exam", href: "nift-entrance-exam" },
              { id: 216, title: "UCEED", href: "uceed" }
          ],
        },{
          id: 22,
          title: "Popular courses",
          href: "popular-courses",
          submenu: [
              { id: 221, href: "bdes", title: "B.Des" },
              { id: 222, href: "mdes", title: "M.Des" },
              { id: 223, href: "bdes-fashion-design", title: "B.Des in Fashion Design" },
              { id: 224, href: "bdes-interior-design", title: "B.Des in Interior Design" },
              { id: 225, href: "bsc-fashion-design", title: "B.Sc in Fashion Design" },
              { id: 226, href: "bsc-interior-design", title: "B.Sc in Interior Design" }
          ],
        },{
          id: 22,
          title: "Colleges by States",
          href: "colleges-by-states",
          submenu: [
              { id: 231, title: "Design Colleges in Maharashtra", href: "stateParam=maharashtra&courseParam=design" },
              { id: 232, title: "Design Colleges in Tamil Nadu", href: "stateParam=tamil-nadu&courseParam=design" },
              { id: 233, title: "Design Colleges in Jharkhand", href: "stateParam=jharkhand&courseParam=design" },
              { id: 234, title: "Design Colleges in Delhi-NCR", href: "stateParam=delhi-ncr&courseParam=design" },
              { id: 235, title: "Design Colleges in Uttar Pradesh", href: "stateParam=uttar-pradesh&courseParam=design" },
              { id: 236, title: "Design Colleges in Rajasthan", href: "stateParam=rajasthan&courseParam=design" },
              { id: 237, title: "Design Colleges in Andhra Pradesh", href: "stateParam=andhra-pradesh&courseParam=design" },
              { id: 238, title: "Design Colleges in Karnataka", href: "stateParam=karnataka&courseParam=design" }
          ]},{
            id: 22,
            title: "Popular specialization",
            href: "popular-specialization",
            submenu: [
              { id: 241, href: "fashion-designing", title: "Fashion Designing" },
              { id: 242, href: "interior-design", title: "Interior Design" },
              { id: 243, href: "graphic-design", title: "Graphic Design" },
              { id: 244, href: "jewellery-design", title: "Jewellery Design" },
              { id: 245, href: "web-design", title: "Web Design" },
              { id: 246, href: "furniture-design", title: "Furniture Design" },
              { id: 247, href: "game-design", title: "Game Design" },
              { id: 248, href: "product-design", title: "Product Design" },
              { id: 249, href: "textile-design", title: "Textile Design" },
              { id: 250, href: "visual-merchandising", title: "Visual Merchandising" },
              { id: 251, href: "ceramic-and-glass-design", title: "Ceramic & Glass Design" },
              { id: 252, href: "film-and-video-design", title: "Film & Video Design" },
              { id: 253, href: "ui--ux", title: "UI / UX" },
              { id: 254, href: "footwear-design", title: "Footwear Design" },
              { id: 255, href: "automotive-design", title: "Automotive Design" },
              { id: 256, href: "communication-design", title: "Communication Design" },
              { id: 257, href: "apparel-design", title: "Apparel Design" },
              { id: 258, href: "exhibition-design", title: "Exhibition Design" },
              { id: 259, href: "information-design", title: "Information Design" },
              { id: 260, href: "knitwear-design", title: "Knitwear Design" },
              { id: 261, href: "leather-design", title: "Leather Design" },
              { id: 262, href: "toy-design", title: "Toy Design" },
              { id: 263, href: "lifestyle-accesory-design", title: "Lifestyle Accesory Design" },
              { id: 264, href: "all-design-specializations", title: "All Design Specializations" }
          ]
      }]
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
          { id: 311, title: "NEET PG", href: "neet-pg" },
          { id: 312, title: "INI CET", href: "ini-cet" },
          { id: 313, title: "NEET UG", href: "neet-ug" },
          { id: 314, title: "AIIMS PG", href: "aiims-pg" },
          { id: 315, title: "PGIMER", href: "pgimer" },
          { id: 316, title: "JIPMER PG", href: "jipmer-pg" }
        ]
      },
      {
        id: 32,
        title: "Popular Courses",
        href: "popular-courses",
        submenu: [
          { id: 321, title: "MBBS", href: "mbbs" },
          { id: 322, title: "MD", href: "md" },
          { id: 323, title: "BDS", href: "bds" },
          { id: 324, title: "MDS", href: "mds" },
          { id: 325, title: "BAMS", href: "bams" },
          { id: 326, title: "BHMS", href: "bhms" }
        ]
      },
      {
        id: 33,
        title: "Top ranked colleges",
        href: "top-ranked-colleges",
        submenu: [
          { id: 331, title: "Top Medical Colleges in India", href: "courseParam=medical" },
          { id: 332, title: "Top Private Medical Colleges in India", href: "ownershipParam=private&courseParam=medical" },
          { id: 333, title: "Top Medical Colleges in Bangalore", href: "cityParam=bangalore&courseParam=medical" },
          { id: 334, title: "Top Medical Colleges in Mumbai", href: "cityParam=mumbai&courseParam=medical" },
          { id: 335, title: "Top Medical Colleges in Pune", href: "cityParam=pune&courseParam=medical" },
          { id: 336, title: "Top Medical Colleges in Hyderabad", href: "cityParam=hyderabad&courseParam=medical" },
          { id: 337, title: "Top Medical Colleges in Chennai", href: "cityParam=chennai&courseParam=medical" },
          { id: 338, title: "Top Medical Colleges in Kolkata", href: "cityParam=kolkata&courseParam=medical" },
          { id: 339, title: "Top Medical Colleges in Delhi", href: "cityParam=delhi&courseParam=medical" },
          { id: 3310, title: "Top Medical Colleges in Kerala", href: "cityParam=kerala&courseParam=medical" }
        ]
      },
      {
        id: 34,
        title: "Colleges by states",
        href: "colleges-by-state",
        submenu: [
          { id: 341, title: "Medical Colleges in Maharashtra", href: "stateParam=maharashtra&courseParam=medical" },
          { id: 342, title: "Medical Colleges in Tamil Nadu", href: "stateParam=tamil-nadu&courseParam=medical" },
          { id: 343, title: "Medical Colleges in Jharkhand", href: "stateParam=jharkhand&courseParam=medical" },
          { id: 344, title: "Medical Colleges in Delhi-NCR", href: "stateParam=delhi-ncr&courseParam=medical" },
          { id: 345, title: "Medical Colleges in Uttar Pradesh", href: "stateParam=uttar-pradesh&courseParam=medical" },
          { id: 346, title: "Medical Colleges in Rajasthan", href: "stateParam=rajasthan&courseParam=medical" },
          { id: 347, title: "Medical Colleges in Andhra Pradesh", href: "stateParam=andhra-pradesh&courseParam=medical" },
          { id: 348, title: "Medical Colleges in Karnataka", href: "stateParam=karnataka&courseParam=medical" }
        ]
      }
    ]
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
            { id: 411, title: "JEE Main", href: "jee-main" },
            { id: 412, title: "JEE Advanced", href: "jee-advanced" },
            { id: 413, title: "GATE", href: "gate" },
            { id: 414, title: "BITSAT", href: "bitsat" },
            { id: 415, title: "VITEEE", href: "viteee" },
            { id: 416, title: "SRMJEEE", href: "srmjeee" },
            { id: 417, title: "KIITEE", href: "kiitee" },
            { id: 418, title: "WBJEE", href: "wbjee" }
          ]
        },
        {
          id: 42,
          title: "Popular Courses",
          href: "popular-courses",
          submenu: [
            { id: 421, title: "B.Tech", href: "btech" },
            { id: 422, title: "M.Tech", href: "mtech" },
            { id: 423, title: "B.Arch", href: "barch" },
            { id: 424, title: "Diploma in Engineering", href: "diploma-in-engineering" }
          ]
        },
        {
          id: 43,
          title: "Popular Specialization",
          href: "popular-specialization",
          submenu: [
            { id: 431, title: "Computer Science Engineering", href: "computer-science-engineering" },
            { id: 432, title: "Mechanical Engineering", href: "mechanical-engineering" },
            { id: 433, title: "Civil Engineering", href: "civil-engineering" },
            { id: 434, title: "Electrical Engineering", href: "electrical-engineering" },
            { id: 435, title: "Electronics and Communication Engineering", href: "electronics-and-communication-engineering" },
            { id: 436, title: "Aeronautical Engineering", href: "aeronautical-engineering" },
            { id: 437, title: "Biotechnology Engineering", href: "biotechnology-engineering" },
            { id: 438, title: "Automobile Engineering", href: "automobile-engineering" },
            { id: 439, title: "Chemical Engineering", href: "chemical-engineering" },
            { id: 4310, title: "Petroleum Engineering", href: "petroleum-engineering" },
            { id: 4311, title: "Software Engineering", href: "software-engineering" },
            { id: 4312, title: "Environmental Engineering", href: "environmental-engineering" },
            { id: 4313, title: "Marine Engineering", href: "marine-engineering" },
            { id: 4314, title: "Industrial Engineering", href: "industrial-engineering" },
            { id: 4315, title: "Agricultural Engineering", href: "agricultural-engineering" },
            { id: 4316, title: "All Engineering Specializations", href: "all-engineering-specializations" }
          ]
        },
        {
          id: 44,
          title: "Top Ranked Colleges",
          href: "top-ranked-colleges",
          submenu: [
            { id: 441, title: "Top Engineering Colleges in India", href: "courseParam=engineering" },
            { id: 442, title: "Top Private Engineering Colleges in India", href: "ownershipParam=private&courseParam=engineering" },
            { id: 443, title: "Top Engineering Colleges in Bangalore", href: "cityParam=bangalore&courseParam=engineering" },
            { id: 444, title: "Top Engineering Colleges in Mumbai", href: "cityParam=mumbai&courseParam=engineering" },
            { id: 445, title: "Top Engineering Colleges in Pune", href: "cityParam=pune&courseParam=engineering" },
            { id: 446, title: "Top Engineering Colleges in Hyderabad", href: "cityParam=hyderabad&courseParam=engineering" },
            { id: 447, title: "Top Engineering Colleges in Chennai", href: "cityParam=chennai&courseParam=engineering" },
            { id: 448, title: "Top Engineering Colleges in Kolkata", href: "cityParam=kolkata&courseParam=engineering" },
            { id: 449, title: "Top Engineering Colleges in Delhi", href: "cityParam=delhi&courseParam=engineering" },
            { id: 4410, title: "Top Engineering Colleges in Kerala", href: "cityParam=kerala&courseParam=engineering" }
          ]
        },
        {
          id: 45,
          title: "Colleges by States",
          href: "colleges-by-state",
          submenu: [
            { id: 451, title: "Engineering Colleges in Maharashtra", href: "stateParam=maharashtra&courseParam=engineering" },
            { id: 452, title: "Engineering Colleges in Tamil Nadu", href: "stateParam=tamil-nadu&courseParam=engineering" },
            { id: 453, title: "Engineering Colleges in Jharkhand", href: "stateParam=jharkhand&courseParam=engineering" },
            { id: 454, title: "Engineering Colleges in Delhi-NCR", href: "stateParam=delhi-ncr&courseParam=engineering" },
            { id: 455, title: "Engineering Colleges in Uttar Pradesh", href: "stateParam=uttar-pradesh&courseParam=engineering" },
            { id: 456, title: "Engineering Colleges in Rajasthan", href: "stateParam=rajasthan&courseParam=engineering" },
            { id: 457, title: "Engineering Colleges in Andhra Pradesh", href: "stateParam=andhra-pradesh&courseParam=engineering" },
            { id: 458, title: "Engineering Colleges in Karnataka", href: "stateParam=karnataka&courseParam=engineering" }
          ]
        }
      ]
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
          { id: 811, title: "News", href: "news" },
          { id: 812, title: "Articles", href: "Articles" },
        ]
      },]
},   
  ]
}
// sidebarOptions.ts

