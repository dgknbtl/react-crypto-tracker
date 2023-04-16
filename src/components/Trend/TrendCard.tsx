import React from "react";
import { Card } from "react-bootstrap";
import { ITrendCardProps } from "@/types";

const TrendCard: React.FC<ITrendCardProps> = ({ item }) => {
  return (
    <Card className="trend-card">
      <Card.Body>
        <div className="d-flex align-items-start">
          <img src={item.small} alt="" />

          <div className="ms-3">
            <div className="d-flex align-items-end">
              <h4 className="mb-0 me-2">{item.name}</h4>
              <small className="mb-1 text-gray">({item.symbol})</small>
            </div>
            <small className="mb-1 text-gray">#{item.market_cap_rank}</small> --
            <small className="mb-1 text-gray">
              &#8383;{item.price_btc.toFixed(6)}
            </small>
          </div>
        </div>
        {/* <span>{item.price_btc}</span> */}
      </Card.Body>
    </Card>
  );
};

export default TrendCard;
