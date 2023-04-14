import React from "react";
import { Container } from "react-bootstrap";
import GlobalStatsList from "./components/GlobalStats/StatsList";

const App: React.FC = () => {
  return (
    <div>
      <Container>
        <GlobalStatsList />
      </Container>
    </div>
  );
};

export default App;
