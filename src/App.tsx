import React from "react";
import { Container } from "react-bootstrap";
import GlobalStatsList from "./components/GlobalStats/StatsList";
import MarketTable from "./components/MarketTable/Table";

const App: React.FC = () => {
  return (
    <div className="my-4">
      <Container>
        <GlobalStatsList />
        <MarketTable />
      </Container>
    </div>
  );
};

export default App;
