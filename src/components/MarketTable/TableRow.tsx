import React from "react";
import { IMarketRowProps } from "@/types";
import useCurrencyFormat from "@/hooks/useNumberFormat";

const MarketTableRow: React.FC<IMarketRowProps> = ({ item }) => {
  return (
    <tr>
      <td>{item.market_cap_rank}</td>
      <td>
        <img src={item.image} alt="" height={24} />
      </td>
      <td>
        {item.name} ({item.symbol})
      </td>
      <td className="text-end">{useCurrencyFormat(item.current_price)}</td>
      <td>0.1% </td>
      <td>8.1%</td>
      <td className="text-end">{useCurrencyFormat(item.total_volume)}</td>
      <td>$586,528,758,609</td>
    </tr>
  );
};

export default MarketTableRow;
