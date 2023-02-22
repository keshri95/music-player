import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import SongCard from "../components/SongCard";
import ArtistCard from "../components/ArtistCard";
const TopArtists = () => {
 

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
    <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
    </div>
  </div>
  );
};

export default TopArtists;
