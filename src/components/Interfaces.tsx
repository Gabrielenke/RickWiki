export interface PageInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharacter {
  name: string;
  image: string;
  species: string;
  status: string;
  id: number;
  location: {
    name: string;
  };
}

export interface CharacterCardProps {
  results: ICharacter[] | null;
}
