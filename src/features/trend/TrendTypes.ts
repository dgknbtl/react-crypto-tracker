import { ICoin } from "@/types";

export interface TrendList {
  item: ICoin;
}

export interface TrendListState {
  coins: TrendList[];
  exchanges: [];
}
