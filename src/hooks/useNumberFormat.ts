import { useState, useEffect } from "react";

const useCurrencyFormat = (amount: number, currency: string = "USD") => {
  const [formattedAmount, setFormattedAmount] = useState("");

  useEffect(() => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    });

    setFormattedAmount(formatter.format(amount));
  }, [amount]);

  return formattedAmount;
};

export default useCurrencyFormat;
