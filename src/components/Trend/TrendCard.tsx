import React from "react";
import { Card } from "react-bootstrap";
import { ITrendCardProps } from "@/types";

const TrendCard: React.FC<ITrendCardProps> = ({ item }) => {
  return (
    <Card className="trend-card">
      <Card.Body>
        <div className="d-flex align-items-center">
          <img src={item.small} alt={item.symbol} height={34} />

          <div className="ms-3 w-100">
            <div className="d-flex align-items-end">
              <h5 className="mb-0 me-2">{item.name}</h5>
              <small className=" text-gray">({item.symbol})</small>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <small className="mb-1 text-gray">#{item.market_cap_rank}</small>
              <small className="mb-1 text-gray">
                &#8383; {item.price_btc.toFixed(9)}
              </small>
            </div>
          </div>
        </div>
        {/* <span>{item.price_btc}</span> */}
      </Card.Body>
    </Card>
  );
};

export default TrendCard;
