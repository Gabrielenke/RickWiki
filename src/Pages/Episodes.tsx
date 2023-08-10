import axios from 'axios';
import { useEffect, useState } from 'react';
import CharacterCard from '../components/CharacterCard';
import InputGroup from '../components/InputGroup';

interface IEpisodesContent {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}
const Episodes = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState<IEpisodesContent | any>([]);
  const [id, setID] = useState<number>(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await axios.get(api).then((res) => res.data);
      setInfo(data);

      let a: any = await Promise.all(
        data.characters.map((x: any) => {
          return axios.get(x).then((res) => res.data);
        }),
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <>
      <div className="flex flex-col text-white">
        <h1 className=" mb-3 text-center text-3xl ">
          Episode name :{' '}
          <span className="text-3xl font-bold text-blue-600">
            {info.name === '' ? 'Unknown' : info.name}
          </span>
        </h1>
        <h5 className="text-center">
          Air Date: {info.air_date === '' ? 'Unknown' : info.air_date}
        </h5>
      </div>
      <div className="my-10 flex justify-between">
        <div className="mx-auto flex max-w-[20vw] flex-col items-center ">
          <h4 className="mb-4 text-center text-3xl text-white">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="flex max-w-[80vw]  text-white">
          <div className="flex flex-wrap  gap-10 ">
            <CharacterCard page="/episode/" results={results} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Episodes;
