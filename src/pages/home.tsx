import React, { useState, useEffect } from 'react';
import Service from "../services";
import { CharacterCard, DeathCard, FilterButton } from "../components"

export default function Home() {
  const [data, setData] = useState<[]>([]);
  const [deaths, setDeaths] = useState<[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filterOption, setFilterOption] = useState<number | string>("Name");

  // Handles scrolling event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When mount fetch the data
  useEffect(() => {
    fetchCharacters(0);
  }, []);

  useEffect(() => {
    fetchDeaths();
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchCharacters(data.length + 1);
  }, [isFetching]);

  // Fetches characters
  const fetchCharacters = async (page: number) => {
    const res = await Service.fetchCharacters(page);
    setData(prev => ([...prev, ...res] as any));
  }

  const fetchDeaths = async () => {
    const res = await Service.fetchDeaths();
    setDeaths(res);
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
    loadMore();
  }

  const handleDropdownChange = (opt: number | string) => {
    setFilterOption(Number(opt));
  }

  const loadMore = () => {
    setIsFetching(false);
  }

  return (
    <>
      <div className="mb-16">
        <h2 className="text-3xl my-10">Breaking Bad Characters</h2>
        <FilterButton filterBy="Sort by" options={["Name", "Birthday", "Portrayer"] as any} currentFilter={filterOption} handleChange={handleDropdownChange} />
        <div className="flex flex-row">
          <div className="flex flex-wrap w-1/2 bg-gray-200">
            {data && data.map((character, index) => (
              <CharacterCard character={character} key={index} />
            ))}
            {isFetching && 'Fetching more list items...'}
          </div>
          <div className="flex flex-wrap w-1/2 bg-gray-200">
            <div className="flex flex-col">
              <h3 className="text-2xl">Total Deaths: {deaths.length}</h3>
              <h2 className="text-3xl">Deaths</h2>
            </div>
            <div className="flex flex-wrap">
              {deaths && deaths.slice(0, 5).map((death, index) => (
                <DeathCard death={death} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
