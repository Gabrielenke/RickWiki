import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

interface ICardDetails {
  id: number;
  name: string;
  location: { name: string };
  origin: { name: string };
  gender: string;
  image: string;
  status: string;
  species: string;
}

const CardDetails = () => {
  let { id }: any = useParams();
  let [results, setResults] = useState<ICardDetails | any>([]);
  let { name, location, origin, gender, image, status, species } = results;

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await axios.get(api).then((res) => res.data);
      setResults(data);
    })();
  }, [api]);

  const handleNextPageChange = () => {
    id++;
    window.location.href = `/characters/${id}`;
  };

  const handlePrevPageChange = () => {
    id--;
    window.location.href = `/characters/${id}`;
  };

  return (
    <>
      <section className="relative mx-auto mt-10 flex  max-w-[70vw]  items-center justify-between bg-[#1d1d1d]  py-4 text-white">
        <span className="absolute left-2 top-5 ">{id}</span>
        <div className="  ml-10 mt-10 flex flex-col gap-10 self-start text-white/75">
          <h1 className="text-5xl text-white/100">{name}</h1>
          <div className="">
            <span className="">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="">Species: </span>
            {species}
          </div>
        </div>
        <div className="relative mb-10 flex h-[50vh] max-w-[40vw] flex-col items-center justify-center gap-10   px-10 ">
          <img className=" w-full rounded-2xl" src={image} alt="" />
          <span
            className={`absolute right-2 top-1 rounded-sm px-8 py-1 text-center  text-white ${
              status == 'Alive' ? 'bg-green-600' : 'bg-red-600'
            } ${status == 'unknown' ? 'bg-zinc-600' : ''} `}
          >
            {status}
          </span>
        </div>
        <div className="absolute bottom-0 left-1/2 right-1/2 flex items-center justify-center gap-10">
          <button
            className="flex items-center gap-2 rounded-2xl bg-[#1d1d1d] px-4 py-2"
            onClick={handlePrevPageChange}
          >
            <AiOutlineArrowLeft />
            Prev <span className="">{}</span>
          </button>

          <button
            className="flex items-center gap-2 rounded-2xl bg-[#1d1d1d] px-4 py-2"
            onClick={handleNextPageChange}
          >
            {`Next`} <span className="">{}</span>
            <AiOutlineArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default CardDetails;
