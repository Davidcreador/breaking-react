import React, { useState, useEffect } from 'react';
import Service from "../services";
import { CharacterCard, DeathCard, FilterButton } from "../components"

export default function Home() {
  const [data, setData] = useState<[]>([]);
  const [deaths, setDeaths] = useState<[]>([]);
  const [filterOption, setFilterOption] = useState<number | string>("Name");

  useEffect(() => {
    (async () => {
      const res = await Service.fetchCharacters();
      setData(res);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await Service.fetchDeaths();
      setDeaths(res);
    })();
  }, []);

  const handleDropdownChange = (opt: number | string) => {
    setFilterOption(Number(opt));
  }

  return (
    <>
      <div className="mb-16">
        <h2 className="text-3xl my-10">Breaking Bad Characters</h2>
        <FilterButton filterBy="Sort by" options={["Name", "Birthday", "Portrayer"] as any} currentFilter={filterOption} handleChange={handleDropdownChange} />
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-2 gap-2">
            {data && data.map((character, index) => (
              <CharacterCard character={character} key={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-2">
            <h2 className="text-2xl">Total Deaths: {deaths.length}</h2>
            <h2 className="text-3xl">Deaths</h2>
            {deaths && deaths.map((death, index) => (
              <DeathCard death={death} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
