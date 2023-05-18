import { fetchFeaturedComics } from "@/app/app-redux/features/comics/multiple/comicsSlice";
import { AppDispatch, RootState } from "@/app/app-redux/store";
import CardCarousel from "@/components/card-carousel/card-carousel";
import GrayContainer from "@/components/containers/gray-container";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type RelatedComicsProps = {
  characterId: string;
};

const RelatedComics = ({ characterId }: RelatedComicsProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { comics, status: featuredComicsStatus } = useSelector(
    (state: RootState) => state.comics,
  );

  useEffect(() => {
    dispatch(fetchFeaturedComics({ id: characterId, limit: 16 }));
  }, [characterId, dispatch]);

  return (
    <GrayContainer>
      <CardCarousel
        mainRoute='/comics/'
        title='Related Comics'
        items={comics}
      />
    </GrayContainer>
  );
};

export default RelatedComics;
