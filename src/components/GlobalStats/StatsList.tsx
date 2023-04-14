import React from "react";
import { Row, Col } from "react-bootstrap";
import StatsCard from "./StatsCard";

const StatsList: React.FC = () => {
  const mockData = [
    { name: "Market Capitalization", value: "$1,317,870,055,259" },
    { name: "24h Trading Volume", value: "$67,396,456,375" },
    { name: "Bitcoin Market Cap Dominance", value: "44.48%" },
  ];

  return (
    <Row>
      {mockData.map((item, i) => (
        <Col lg={4} key={i}>
          <StatsCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default StatsList;
