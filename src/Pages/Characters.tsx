import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import CharacterCard from '../components/CharacterCard';
import Pagination from '../components/Pagination';
import { PageInfo } from '../components/Interfaces';

const Characters = () => {
  const [search, setSearch] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [results, setResults] = useState<any[]>([]);
  const [info, setInfo] = useState<PageInfo | null>(null);

  const baseURL: string = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setResults(response.data.results);
      setInfo(response.data.info);
    });
  }, [baseURL]);

  return (
    <>
      <SearchBar setPageNumber={setPageNumber} setSearch={setSearch} />
      <main className="flex justify-end text-white">
        <section className="my-10 flex min-h-screen  flex-col items-center justify-end self-end">
          <div className="flex flex-wrap items-center justify-center gap-10  ">
            <CharacterCard page="/characters/" results={results} />
          </div>
          <div className="mt-16 flex items-center gap-32">
            <Pagination
              PageInfo={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </section>
      </main>
      <div className="flex items-center justify-center bg-pink-600"></div>
    </>
  );
};

export default Characters;
