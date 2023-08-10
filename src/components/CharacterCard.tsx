import React from 'react';
import { ICharacter } from './Interfaces';
import { CharacterCardProps } from './Interfaces';

const CharacterCard: React.FC<CharacterCardProps> = ({ results }) => {
  let display: JSX.Element[] | string;

  if (results) {
    display = results.map(
      ({ name, location, id, status, image }: ICharacter) => {
        return (
          <a
            href="/"
            className="relative flex h-96 w-[250px] flex-col items-center rounded-2xl bg-[#1d1d1d] px-4 py-4 transition duration-500 ease-in-out hover:shadow-xl hover:shadow-white "
            key={id}
          >
            <img className="w-full rounded-t-2xl" src={image} alt="" />
            <span
              className={`absolute right-2 top-1 rounded-sm px-8 py-1 text-center  text-white ${
                status == 'Alive' ? 'bg-green-600' : 'bg-red-600'
              } ${status == 'unknown' ? 'bg-zinc-600' : ''} `}
            >
              {status}
            </span>
            <span className="absolute bottom-0 right-2 text-white">{id}</span>
            <div className="ml-2 flex flex-col self-start">
              <h2 className=" mt-2 text-xl font-bold">{name}</h2>
              <p className="text-white/50">Last Location</p>
              <p>{location.name}</p>
            </div>
          </a>
        );
      },
    );
  } else {
    display = 'No results found';
  }

  return <>{display}</>;
};

export default CharacterCard;
