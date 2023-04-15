import React from "react";
import { Table } from "react-bootstrap";
import MarketTableRow from "@/components/MarketTable/TableRow";

const MarketTable: React.FC = () => {
  return (
    <div>
      <Table striped hover responsive className="my-4">
        <thead>
          <tr>
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
          <MarketTableRow />
          <MarketTableRow />
          <MarketTableRow />
          <MarketTableRow />
          <MarketTableRow />
          <MarketTableRow />
        </tbody>
      </Table>
    </div>
  );
};

export default MarketTable;
