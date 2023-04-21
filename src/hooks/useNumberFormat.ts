import { useState, useEffect } from "react";

const useNumberFormat = () => {
  const [formatter, setFormatter] = useState<(value: number) => string>(
    () => () => ""
  );

  useEffect(() => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

    setFormatter(() => formatter.format);
  }, []);

  return formatter;
};

export default useNumberFormat;
