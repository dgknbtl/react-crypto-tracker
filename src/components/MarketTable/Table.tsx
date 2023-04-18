import React, { useEffect, useState } from "react";
import { Table, InputGroup, Form } from "react-bootstrap";
import MarketTableRow from "@/components/MarketTable/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketData } from "@/features/Market/MarketSlice";
import { IMarketState, IMarketCoin } from "@/types";
import { Spinner, Alert } from "react-bootstrap";
import "./MarketTable.scss";

const MarketTable: React.FC = () => {
  const [search, setSearch] = useState("");
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchMarketData());
  }, [dispatch]);

  const market = useSelector(
    (state: { market: IMarketState }) => state.market.data
  );

  const isLoading = useSelector(
    (state: { market: IMarketState }) => state.market.loading
  );

  const error = useSelector(
    (state: { market: IMarketState }) => state.market.error
  );

  const handleSearch = (e: any) => {
    let value = e.target.value;
    setSearch(value.replace(/\s+/g, ""));
  };

  const filteredMarket = !search
    ? market
    : market?.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.symbol.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="section-gap">
      <div className="section-head">
        <h4 className="section-title">Cryptocurrency Prices</h4>
        <InputGroup className="marketTable-search">
          <Form.Control
            type="text"
            placeholder="Search a coin"
            onChange={handleSearch}
          />
        </InputGroup>
      </div>

      {isLoading && (
        <div className="my-4">
          <Spinner animation="border" />
        </div>
      )}

      {error && (
        <div className="my-4">
          <Alert variant="warning">An error occured to fetch market data</Alert>
        </div>
      )}

      {filteredMarket && filteredMarket.length ? (
        <Table hover responsive className=" marketTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th className="text-end">Price</th>
              <th className="text-end">24h</th>
              <th className="text-end">24h Vol</th>
              <th className="text-end">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredMarket?.map((item: IMarketCoin, index: number) => (
              <MarketTableRow key={index} item={item} />
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert variant="warning">It was not found</Alert>
      )}
    </div>
  );
};

export default MarketTable;
