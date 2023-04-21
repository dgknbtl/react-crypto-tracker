import { useState, useEffect } from "react";

const useCurrencyFormat = (amount: number = 0, currency: string = "USD") => {
  const [format, setFormat] = useState<(amount: number) => string>(
    () => () => ""
  );

  useEffect(() => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
    });

    setFormat(() => formatter.format);
  }, [currency, amount]);
  return format;
};

export default useCurrencyFormat;
