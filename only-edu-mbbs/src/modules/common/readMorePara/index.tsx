// components/ReadMoreParagraph.tsx

"use client";

import React, { useState } from "react";

interface ReadMoreParagraphProps {
  text: string;
}

const ReadMoreParagraph: React.FC<ReadMoreParagraphProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl w-full mx-auto dark:text-accent">
      <p>
        {isExpanded ? text : `${text.substring(0, 280)}...`}
        <button
          onClick={toggleReadMore}
          className="text-blue-500 hover:underline ml-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};

export default ReadMoreParagraph;
