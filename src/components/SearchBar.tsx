import React from 'react';

interface ISearchBar {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const SearchBar = ({ setPageNumber, setSearch }: ISearchBar) => {
  return (
    <>
      <form className="mx-auto flex max-w-[80vw] flex-col items-center justify-center ">
        <span className="mb-4 text-4xl font-semibold text-white/70">
          Characters
        </span>
        <div className="flex items-center gap-5">
          <input
            onChange={(e) => {
              setPageNumber(1);
              setSearch(e.target.value);
              console.log(e.target.value);
            }}
            className="w-[40vw] rounded-md border-2 border-solid border-black py-2 pl-2 focus:outline-none "
            placeholder="Search for character"
            type="search"
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="rounded-md bg-blue-600 px-4 py-2 text-white"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
