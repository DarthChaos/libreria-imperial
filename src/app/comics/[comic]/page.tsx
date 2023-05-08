import BreadCrumb from "@/components/breadcrumb";
import React from "react";

const ComicProps = {};

const Comic = () => {
  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

  return (
    <div>
      <BreadCrumb {...{ crumbs }} />
    </div>
  );
};

export default Comic;
