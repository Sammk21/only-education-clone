import { Card } from "@/components/ui/card";
import { ImageAttributes } from "@/types/types";
import Image from "next/image";
import React from "react";

interface GalleryTabsProps {
  event: {
    data: ImageAttributes[];
  };
  infra: {
    data: ImageAttributes[];
  };
  className?: string;
}
const GalleryTabs = ({ event, infra, className }: GalleryTabsProps) => {
  const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";

  return (
    <Card className="px-5 py-5 mt-4">
      {event?.data && (
        <div className="">
          <h2 className="text-dark font-semibold mb-4 text-xl">Events</h2>

          <div className={` ${className} `}>
            {event.data.map((item) => (
              <Image
                key={item.id}
                src={baseUrl + item.url}
                alt={item.alternativeText || ""}
                width={item.width}
                height={item.height}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      {infra?.data && (
        <>
          <h2 className="text-dark font-semibold mb-4 text-xl">
            Infrastructure
          </h2>
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-4  pb-8 mb-5">
            {infra.data.map((item) => (
              <Image
                key={item.id}
                src={baseUrl + item.url}
                alt={item.alternativeText || ""}
                width={item.width}
                height={item.height}
                className="rounded-lg"
              />
            ))}
          </div>
        </>
      )}
    </Card>
  );
};

export default GalleryTabs;

// "use client";

// import { useState, useCallback } from "react";
// import { Card } from "@/components/ui/card";
// import { ImageAttributes } from "@/types/types";
// import Image from "next/image";
// import Modal from "react-modal";
// import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// interface GalleryTabsProps {
//   event: {
//     data: ImageAttributes[];
//   };
//   infra: {
//     data: ImageAttributes[];
//   };
//   className?: string;
// }

// const GalleryTabs = ({ event, infra, className }: GalleryTabsProps) => {
//   const [currentIndex, setCurrentIndex] = useState<number | null>(null);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);
//   const baseUrl = process.env.API_URL || "http://admin.onlyeducation.co.in";

//   const images = [...(event?.data || []), ...(infra?.data || [])];

//   const openLightbox = useCallback((index: number) => {
//     setCurrentIndex(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentIndex(null);
//     setViewerIsOpen(false);
//   };

//   const goToPrevious = () => {
//     if (currentIndex !== null && currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const goToNext = () => {
//     if (currentIndex !== null && currentIndex < images.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const renderImages = (images: ImageAttributes[]) => (
//     <div className={`grid sm:grid-cols-4 grid-cols-2 gap-4 ${className}`}>
//       {images.map((item, index) => (
//         <div
//           key={item.id}
//           onClick={() => openLightbox(index)}
//           className="cursor-pointer"
//         >
//           <Image
//             src={baseUrl + item.url}
//             alt={item.alternativeText || ""}
//             width={300}
//             height={200}
//             className="rounded-lg object-cover w-full h-full"
//           />
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <Card className="px-5 py-5 mt-4">
//       {event?.data && (
//         <div>
//           <h2 className="text-dark font-semibold mb-4 text-xl">Events</h2>
//           {renderImages(event.data)}
//         </div>
//       )}

//       {infra?.data && (
//         <div>
//           <h2 className="text-dark font-semibold mb-4 text-xl">
//             Infrastructure
//           </h2>
//           {renderImages(infra.data)}
//         </div>
//       )}

//       <Modal
//         isOpen={viewerIsOpen}
//         onRequestClose={closeLightbox}
//         contentLabel="Image Viewer"
//         className="flex justify-center items-center"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
//       >
//         {currentIndex !== null && (
//           <div className="relative flex items-center justify-center w-full h-full">
//             <button
//               onClick={closeLightbox}
//               className="absolute top-4 right-4 p-2 text-white text-2xl"
//             >
//               <AiOutlineClose />
//             </button>
//             <button
//               onClick={goToPrevious}
//               className="absolute left-16 p-2 text-white text-2xl"
//               disabled={currentIndex === 0}
//             >
//               <AiOutlineLeft />
//             </button>
//             <div className="flex items-center justify-center max-w-full max-h-full p-4">
//               <Image
//                 src={baseUrl + images[currentIndex].url}
//                 alt={images[currentIndex].alternativeText || ""}
//                 width={600}
//                 height={400}
//                 className="rounded-lg object-contain max-w-full max-h-full"
//               />
//             </div>
//             <button
//               onClick={goToNext}
//               className="absolute right-16 p-2 text-white text-2xl"
//               disabled={currentIndex === images.length - 1}
//             >
//               <AiOutlineRight />
//             </button>
//           </div>
//         )}
//       </Modal>
//     </Card>
//   );
// };

// export default GalleryTabs;
