import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaBriefcaseMedical, FaUserGraduate, FaWifi } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { IoLibraryOutline } from "react-icons/io5";
import { MdComputer, MdOutlineSportsTennis } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import Title from "../common/title";

const CampusHighlight = () => {
  return (
    <Card className="my-8 sm:container">
      <CardHeader>
        <Title>Campus Highlight</Title>
      </CardHeader>
      <CardContent>
        <div>
          <p>
            The campus is also home to a modern library, a museum, an
            auditorium, and lecture halls, as well as other amenities to make
            studying easier. The library's facilities allow students to study
            uninterrupted, while the museum's facilities allow students to
            explore historical monuments, take in the beauty of the landscape,
            and learn about the past. Classrooms are also equipped with
            sound-visual aids to improve the learning experience.
          </p>
          <p className="py-5">
            The University provides high-quality education to students and has
            all the necessary facilities for education, sports, etc. Students
            are admitted to the University because of its modern infrastructure,
            excellent hostels, fully-equipped classrooms, etc. All the
            requirements for admission are fulfilled by the University, making
            the study life of students in hostels easier.
          </p>
        </div>
        <div className="grid grid-rows-2 sm:grid-flow-col grid-flow-row gap-4 ">
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <MdOutlineSportsTennis className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">Sports</span>
          </div>
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <MdComputer className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">I.T Infrastructure</span>
          </div>
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <IoLibraryOutline className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">Library</span>
          </div>
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <FaUserGraduate className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">Alumni Associations</span>
          </div>
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <FaBriefcaseMedical className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">Medical / Hospital</span>
          </div>
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <TiGroup className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">Auditorium</span>
          </div>
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <FaWifi className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">Wifi</span>
          </div>
          <div className="bg-[#02a5690f] flex rounded-sm ">
            <span className="bg-[#02a5690f] p-3">
              <GrCafeteria className="text-[#02a569] text-xl" />
            </span>
            <span className="text-dark p-3">Cafeteria</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampusHighlight;
