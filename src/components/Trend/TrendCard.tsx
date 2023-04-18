import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ITrendCardProps } from "@/types";
import DetailModal from "../Modal/DetailModal";

const TrendCard: React.FC<ITrendCardProps> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <Card className="trend-card" onClick={() => handleShowModal()}>
        <Card.Body>
          <div className="d-flex align-items-center">
            <img src={item.small} alt={item.symbol} height={34} />

            <div className="ms-3 w-100">
              <div className="d-flex align-items-end">
                <h5 className="mb-0 me-2">{item.name}</h5>
                <small className=" text-gray">({item.symbol})</small>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small className="mb-1 text-gray">
                  #{item.market_cap_rank}
                </small>
                <small className="mb-1 text-gray">
                  &#8383; {item.price_btc.toFixed(9)}
                </small>
              </div>
            </div>
          </div>
          {/* <span>{item.price_btc}</span> */}
        </Card.Body>
      </Card>

      <DetailModal show={showModal} onHide={handleCloseModal}>
        <h1>{item.name}</h1>
      </DetailModal>
    </>
  );
};

export default TrendCard;
