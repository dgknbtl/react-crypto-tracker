import React, { useState } from "react";
import { Modal, Spinner, Badge } from "react-bootstrap";
import { IDetailModalProps } from "@/types";
import { useDispatch } from "react-redux";
import { fetchById } from "@/features/Crypto/CryptoSlice";
import useCurrencyFormat from "@/hooks/useNumberFormat";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import "./DetailModal.scss";

const DetailModal: React.FC<IDetailModalProps> = (props) => {
  const { show, onHide, coinId } = props;

  const dispatch: any = useDispatch();
  const [crypto, setCrypto] = useState<any>(null);
  const formatCurrency = useCurrencyFormat();

  const handleEntered = async () => {
    const result = await dispatch(fetchById(coinId));
    console.log(result.payload);
    setCrypto(result.payload);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      onEntered={handleEntered}
      size="lg"
      centered
    >
      <Modal.Body className="p-4">
        {crypto && Object.keys(crypto).length > 0 ? (
          <div className="crypto-detail">
            <Badge bg="dark" className="mb-2">
              Rank #{crypto.market_cap_rank}
            </Badge>
            <div className="item-head">
              <img
                className="item-img"
                src={crypto.image.small}
                alt={crypto.name}
                height={32}
              />
              <span className="item-name">{crypto.name}</span>
              <span className="item-symbol">{crypto.symbol}</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="item-price">
                {formatCurrency(crypto.market_data.current_price.usd)}
              </div>
              <div className="item-change">
                <span
                  className={
                    crypto.market_data.price_change_percentage_24h > 0
                      ? "color--up"
                      : "color--down"
                  }
                >
                  <div className="ms-2 d-flex align-items-center">
                    {crypto.market_data.price_change_percentage_24h.toFixed(1)}%
                    {crypto.market_data.price_change_percentage_24h > 0 ? (
                      <CaretUpFill height={14} className="color--up" />
                    ) : (
                      <CaretDownFill height={14} className="color--down" />
                    )}
                  </div>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "300px" }}
          >
            <Spinner animation="border" />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DetailModal;
