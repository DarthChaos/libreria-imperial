import React from "react";

type TagProps = {
  label: string;
};

const Tag = ({ label }: TagProps) => {
  return (
    <div className='flex border-0 rounded bg-primary-yellow-3 h-5 w-16'>
      <span className='m-auto text-primary-gray-2 text-xs'>{label}</span>
    </div>
  );
};

export default Tag;
