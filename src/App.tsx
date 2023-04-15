import React from "react";
import { Container } from "react-bootstrap";
import TrendList from "@/components/Trend/TrendList";
import MarketTable from "@/components/MarketTable/Table";

const App: React.FC = () => {
  return (
    <div className="my-4">
      <Container>
        <TrendList />
        <MarketTable />
      </Container>
    </div>
  );
};

export default App;
