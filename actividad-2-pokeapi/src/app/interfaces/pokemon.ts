export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonBasicInfo[];
}

export interface PokemonBasicInfo {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other?: {
      'official-artwork': {
        front_default: string;
      }
    }
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    }
  }[];
}