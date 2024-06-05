import React from "react";
import FlowDiagram from "../flow-diagram";

const WhyAbroad = () => {
  return (
    <>
      <section className="text-dark dark:text-light  my-6">
        <h4 className="text-center text-4xl py-6 mb-6 ">
          Why Study Abroad is the best for indian Students
        </h4>
        <ul className="list-disc px-6 sm:px-12 flex flex-col gap-y-4 max-w-7xl mx-auto ">
          <li className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            suscipit necessitatibus aliquam vitae magnam. Corporis id ad
            possimus, error eum aut sunt nobis quaerat.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            molestiae, quia officia saepe in labore, natus id dolore officiis
            mollitia, dicta enim neque asperiores adipisci excepturi possimus
            dolorum quae? Eligendi.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            sapiente vero veniam dolores nostrum sit autem temporibus, laborum
            iure ratione commodi maxime quaerat doloribus qui?
          </li>
        </ul>
      </section>
      <FlowDiagram />
    </>
  );
};

export default WhyAbroad;
