import React from "react";
import { Card } from "react-bootstrap";

type StatsCardProps = {
  item: {
    name: String;
    value: String;
  };
};

const StatsCard: React.FC<StatsCardProps> = ({ item: { name, value } }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
