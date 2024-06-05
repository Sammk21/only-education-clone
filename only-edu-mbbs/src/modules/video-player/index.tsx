import React from "react";

const VideoPlayer = () => {
  return (
    <section className="container mx-auto py-6 my-6 px-2">
      <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full relative ">
        <video
          autoPlay={true}
          loop={true}
          muted
          className="absolute object-cover w-full h-full object-center top-0 left-0 rounded-2xl"
          src="https://www.dior.com/couture/var/dior/storage/original/video/5d0a7c949cec60f37d71f43f0c2fe66c.mp4"
        ></video>
      </div>
    </section>
  );
};

export default VideoPlayer;
