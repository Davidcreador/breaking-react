import React, { useState, useEffect } from 'react';
import { Card, FilterButton } from "../components"
import Service from "../services";
import { EpisodeType } from "../types";

const NUMBER_SEASONS = ["1", "2", "3", "4", "5"];
const SHOW_LIMIT = 6;

// Custom Hook to be able to reuse the filter logic and re-renders
const useFilter = (opt: number) => {
  const [state, setState] = useState(opt);

  useEffect(() => {
    setState(opt);
  }, [opt]);

  return state
}

export default function Episodes() {
  const [data, setData] = useState<[]>([]);
  const [visible, setVisible] = useState<number>(6);
  const [filterOption, setFilterOption] = useState<number>(1);
  const filter = useFilter(filterOption);

  useEffect(() => {
    (async () => {
      const res = await Service.fetchEpisodes();
      setData(res);
    })();
  }, []);

  const handleDropdownChange = (opt: number | string) => {
    setFilterOption(Number(opt));
  }

  const loadMore = () => {
    setVisible(visible + SHOW_LIMIT);
  }

  const renderEpisodes = () => {
    const filtered = data.filter((episode: EpisodeType, index) => {
      return Number(episode.season) === Number(filter);
    })

    return (
      <>
        {filtered.slice(0, visible).map((episode: EpisodeType, index) => {
          return (
            <Card key={index} episode={episode} />
          )
        })}
      </>
    )
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl my-10">Breaking Bad</h2>
      <FilterButton filterBy="season" options={NUMBER_SEASONS as any} currentFilter={filter} handleChange={handleDropdownChange} />
      <div className="grid grid-cols-3 gap-4">
        {renderEpisodes()}
      </div>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto block mt-10" onClick={loadMore}>Load More</button>
    </div>
  );
}
