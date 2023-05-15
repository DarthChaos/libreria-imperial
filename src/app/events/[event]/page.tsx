"use client";

import BreadCrumb from "@/components/breadcrumb";
import React, { useEffect } from "react";
import Description from "./description";
import OtherEvents from "./other-events";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { AppDispatch, RootState } from "@/app/app-redux/store";
import { fetchSingleEvent } from "@/app/app-redux/features/events/single/eventSlice";

const Event = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    event: { date, desc, detail, img, title, wiki, lastCharacter },
    status: comicStatus,
  } = useSelector((state: RootState) => state.event);

  const [_empty, _events, event] = usePathname().split("/");

  const crumbs = [{ label: "Home", value: "/" }, { label: "Comic Name" }];

  useEffect(() => {
    dispatch(fetchSingleEvent({ id: event }));
  }, [event, dispatch]);

  return (
    <>
      <BreadCrumb {...{ crumbs }} />
      <Description
        {...{ img, title }}
        description={desc}
        detailsUri={detail}
        publishDate={date}
        wikiUri={wiki}
      />
      {lastCharacter && <OtherEvents characterId={lastCharacter} />}
    </>
  );
};

export default Event;
