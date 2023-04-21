import React, { useState } from "react";
import { Modal, Spinner, Badge, Button, ProgressBar } from "react-bootstrap";
import { IDetailModalProps } from "@/types";
import { useDispatch } from "react-redux";
import { fetchById } from "@/features/Crypto/CryptoSlice";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";
import useNumberFormat from "@/hooks/useNumberFormat";
import {
  CaretDownFill,
  CaretUpFill,
  Twitter,
  Facebook,
  Reddit,
  Github,
} from "react-bootstrap-icons";
import "./DetailModal.scss";

const DetailModal: React.FC<IDetailModalProps> = (props) => {
  const { show, onHide, coinId } = props;

  const dispatch: any = useDispatch();
  const [crypto, setCrypto] = useState<any>(null);

  const formatCurrency = useCurrencyFormat();
  const formatNumber = useNumberFormat();

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
            <div className="d-flex align-items-center justify-content-between">
              <div>
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
                        {crypto.market_data.price_change_percentage_24h.toFixed(
                          1
                        )}
                        %
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
              <div className="item-buttons">
                {crypto.links.twitter_screen_name && (
                  <Button
                    className="d-flex align-items-center"
                    variant="light"
                    size="sm"
                    href={`https://twitter.com/${crypto.links.twitter_screen_name}`}
                  >
                    <Twitter className="mx-1" /> Twitter
                  </Button>
                )}

                {crypto.links.facebook_username && (
                  <Button
                    className="d-flex align-items-center"
                    variant="light"
                    size="sm"
                    href={`https://facebook.com/${crypto.links.facebook_username}`}
                  >
                    <Facebook className="mx-1" /> Facebook
                  </Button>
                )}

                {crypto.links.subreddit_url && (
                  <Button
                    variant="light"
                    size="sm"
                    href={crypto.links.subreddit_url}
                  >
                    <Reddit className="mx-1" /> Reddit
                  </Button>
                )}

                {crypto.links.repos_url.github[0] && (
                  <Button
                    variant="light"
                    size="sm"
                    href={crypto.links.repos_url.github[0]}
                  >
                    <Github className="mx-1" /> Github
                  </Button>
                )}

                {crypto.links.homepage[0] && (
                  <Button
                    variant="light"
                    size="sm"
                    href={`https://${crypto.links.homepage[0]}`}
                  >
                    Official Website
                  </Button>
                )}
              </div>
            </div>

            <div className="item-range">
              <ProgressBar
                className="item-progress"
                variant="dark"
                min={crypto.market_data.low_24h.usd}
                max={crypto.market_data.high_24h.usd}
                now={crypto.market_data.current_price.usd}
              />
              <div className="d-flex justify-content-between mt-1">
                <span className="fw-semibold">
                  {formatCurrency(crypto.market_data.high_24h.usd)}
                </span>
                <span>24h Range</span>
                <span className="fw-semibold">
                  {formatCurrency(crypto.market_data.low_24h.usd)}
                </span>
              </div>
            </div>

            <div className="tableList">
              <ul>
                {crypto.market_data.market_cap.usd && (
                  <li className="tableList-item">
                    <span className="tableList-title">Market Cap </span>
                    <span className="tableList-value">
                      {formatCurrency(crypto.market_data.market_cap.usd)}
                    </span>
                  </li>
                )}
                {crypto.market_data.total_volume.usd && (
                  <li className="tableList-item">
                    <span className="tableList-title">
                      24 Hour Trading Vol{" "}
                    </span>
                    <span className="tableList-value">
                      {formatCurrency(crypto.market_data.total_volume.usd)}
                    </span>
                  </li>
                )}
                {crypto.market_data.fully_diluted_valuation.usd && (
                  <li className="tableList-item">
                    <span className="tableList-title">
                      Fully Diluted Valuation
                    </span>
                    <span className="tableList-value">
                      {formatCurrency(
                        crypto.market_data.fully_diluted_valuation.usd
                      )}
                    </span>
                  </li>
                )}
              </ul>

              <ul>
                <li className="tableList-item">
                  <span className="tableList-title">Circulating Supply </span>
                  <span className="tableList-value">
                    {formatNumber(crypto.market_data.circulating_supply)}
                  </span>
                </li>
                <li className="tableList-item">
                  <span className="tableList-title">Total Supply </span>
                  <span className="tableList-value">
                    {crypto.market_data.total_supply
                      ? formatNumber(crypto.market_data.total_supply)
                      : "∞"}
                  </span>
                </li>
                {crypto.market_data.total_supply && (
                  <li className="tableList-item">
                    <span className="tableList-title">Max Supply</span>
                    <span className="tableList-value">
                      {formatNumber(crypto.market_data.circulating_supply)}
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {crypto.description.en && (
              <div
                className=" item-text"
                dangerouslySetInnerHTML={{ __html: crypto.description.en }}
              ></div>
            )}
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
