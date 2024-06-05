import Image from "next/image";
import React from "react";

const CampusHighlight = () => {
  return (
    <section className="py-6 my-6">
      <h2 className="text-4xl font-medium text-center mb-6">
        Campus highlight
      </h2>
      <div className=" flex flex-col sm:grid grid-cols-3  px-6 gap-x-12 max-w-7xl mx-auto font-medium">
        <div className="py-7">
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
      </div>
    </section>
  );
};

export default CampusHighlight;
