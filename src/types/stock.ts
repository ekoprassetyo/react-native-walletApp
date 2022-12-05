export interface MyObject {
  x: string;
  y: string;
  meta: string;
}

export interface filteredOptions {
  symbol?: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
  price?: string;
  filteredOptions?: object;
  companyOverview?: object;
  length: number;
}

export interface StockObjInfo {
  currency: string;
  marketClose: string;
  marketOpen: string;
  marketSource: string;
  name: string;
  region: string;
  symbol: string;
  timezone: string;
  type: string;
  price: string;
  [propName: string]: any; // string index signature - allow us to have extra properties
}

export interface BestMatchesInfo {
  matchScore: string;
  region: string;
}

export interface RenderItemProps {
  item: string;
}

export interface SearchBarProps {}