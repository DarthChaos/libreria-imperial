import React from "react";

type BreadCrumbProps = {
  crumbs: { label: string; url?: string }[];
};

const BreadCrumb = ({ crumbs }: BreadCrumbProps) => {
  const content = crumbs.map(({ label, url = "" }) => (
    <li
      key={url}
      className="top-0 text-primary-white before:w-2 before:mx-2 before:content-['/'] first:before:content-none before:text-primary-white">
      <a href={url}>{label}</a>
    </li>
  ));

  return (
    <div className='my-4 mx-6'>
      <div className='bg-primary-gray-1 text-white py-1 px-2 w-fit'>
        <ul className='flex'>{content}</ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
