import { fetchFeaturedEvents } from "@/app/app-redux/features/events/multiple/eventsSlice";
import { AppDispatch, RootState } from "@/app/app-redux/store";
import CardCarousel from "@/components/card-carousel/card-carousel";
import GrayContainer from "@/components/containers/gray-container";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type OtherEventsProps = {
  characterId: string;
};

const OtherEvents = ({ characterId }: OtherEventsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { events, status: featuredComicsStatus } = useSelector(
    (state: RootState) => state.events,
  );

  useEffect(() => {
    dispatch(fetchFeaturedEvents({ id: characterId, limit: 16 }));
  }, [characterId, dispatch]);

  return (
    <GrayContainer>
      <CardCarousel
        mainRoute='/events/'
        title='Related Events'
        items={events}
      />
    </GrayContainer>
  );
};

export default OtherEvents;
