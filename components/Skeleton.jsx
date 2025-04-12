// components/Skeleton.jsx
import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-700 animate-pulse rounded ${className}`}
    ></div>
  );
};

export default Skeleton;
