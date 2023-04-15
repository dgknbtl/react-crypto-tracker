export interface TrendItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
}

export interface TrendList {
  item: TrendItem;
}

export interface TrendListState {
  coins: TrendList[];
}
