import BreadCrumb from "@/components/breadcrumb";
import React from "react";

const Event = () => {
  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
    </>
  );
};

export default Event;
