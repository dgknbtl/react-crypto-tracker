import React from "react";
import { IMarketRowProps } from "@/types";
import useCurrencyFormat from "@/hooks/useNumberFormat";

const MarketTableRow: React.FC<IMarketRowProps> = ({ item }) => {
  return (
    <tr>
      <td>{item.market_cap_rank}</td>
      <td>
        <img src={item.image} className="me-2" height={20} alt={item.symbol} />
        <span className="fw-semibold">{item.name}</span>
        <small className="text-uppercase text-gray">({item.symbol})</small>
      </td>
      <td className="text-end">{useCurrencyFormat(item.current_price)}</td>
      <td className="text-end">
        <span
          className={
            item.price_change_percentage_24h > 0
              ? "marketTable--up"
              : "marketTable--down"
          }
        >
          {item.price_change_percentage_24h.toFixed(1)}%
        </span>
      </td>
      <td className="text-end">{useCurrencyFormat(item.total_volume)}</td>
      <td className="text-end">{useCurrencyFormat(item.market_cap)}</td>
    </tr>
  );
};

export default MarketTableRow;
