import React from "react";
import { Row, Col } from "react-bootstrap";
import TrendCard from "@/components/Trend/TrendCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendData } from "@/features/trend/TrendSlice";
import { useEffect } from "react";

const StatsList: React.FC = () => {
  const dispatch: any = useDispatch();
  const trendData = useSelector(
    (state: { trend: { data: any[] } }) => state.trend.data
  );

  console.log("data", trendData);

  useEffect(() => {
    dispatch(fetchTrendData());
  }, []);

  const mockData = [
    { name: "Market Capitalization", value: "$1,317,870,055,259" },
    { name: "24h Trading Volume", value: "$67,396,456,375" },
    { name: "Bitcoin Market Cap Dominance", value: "44.48%" },
  ];

  return (
    <Row>
      {mockData.map((item, i) => (
        <Col lg={4} key={i}>
          <TrendCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default StatsList;
