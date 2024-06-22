import Image from "next/image";
import React from "react";
import { FaBriefcaseMedical, FaUserGraduate, FaWifi } from "react-icons/fa";
import { GrCafeteria } from "react-icons/gr";
import { IoLibraryOutline } from "react-icons/io5";
import { MdComputer, MdOutlineSportsTennis } from "react-icons/md";
import { TiGroup } from "react-icons/ti";

const CampusHighlight = () => {
  return (
    <section className="my-8 sm:container">
      <h2 className="text-4xl font-medium  mb-4 text-dark">Campus Highlight</h2>
      <div>
        <p>
          The campus is also home to a modern library, a museum, an auditorium,
          and lecture halls, as well as other amenities to make studying easier.
          The library's facilities allow students to study uninterrupted, while
          the museum's facilities allow students to explore historical
          monuments, take in the beauty of the landscape, and learn about the
          past. Classrooms are also equipped with sound-visual aids to improve
          the learning experience.
        </p>
        <p className="py-5">
          The University provides high-quality education to students and has all
          the necessary facilities for education, sports, etc. Students are
          admitted to the University because of its modern infrastructure,
          excellent hostels, fully-equipped classrooms, etc. All the
          requirements for admission are fulfilled by the University, making the
          study life of students in hostels easier.
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
      {/* <div className=" flex flex-col sm:grid grid-cols-3  px-6 gap-x-12 max-w-7xl mx-auto font-medium">
        <div className="">
          <div className="aspect-video relative rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1613946069412-38f7f1ff0b65?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <p>Cafeteria</p>
        </div>
        <div>
          <div className="aspect-video relative rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600431521340-491eca880813?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <p>Library</p>
        </div>
        <div>
          <div className="aspect-video relative rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=3290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=3290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <p>Sports ground</p>
        </div>
      </div> */}
    </section>
  );
};

export default CampusHighlight;
