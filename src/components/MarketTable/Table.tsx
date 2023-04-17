import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import MarketTableRow from "@/components/MarketTable/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketData } from "@/features/Market/MarketSlice";
import { IMarketState, IMarketCoin } from "@/types";
import { Spinner, Alert } from "react-bootstrap";

const MarketTable: React.FC = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketData());
  }, [dispatch]);

  const market = useSelector(
    (state: { market: IMarketState }) => state.market.data
  );

  console.log(market);

  const isLoading = useSelector(
    (state: { market: IMarketState }) => state.market.loading
  );

  const error = useSelector(
    (state: { market: IMarketState }) => state.market.error
  );

  if (isLoading) {
    return (
      <div className="my-4">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-4">
        <Alert variant="warning">An error occured to fetch market data</Alert>
      </div>
    );
  }

  return (
    <div>
      <Table striped hover responsive className="my-4">
        <thead>
          <tr>
            <th>#</th>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Vol</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {market?.map((item: IMarketCoin, index: number) => (
            <MarketTableRow key={index} item={item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MarketTable;
