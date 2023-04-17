import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import TrendCard from "@/components/Trend/TrendCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendData } from "@/features/Trend/TrendSlice";
import { ICoin } from "@/types";
import "./Trend.scss";

const TrendList: React.FC = () => {
  const dispatch: any = useDispatch();

  const { coins } = useSelector(
    (state: { trend: { data: { coins: any } } }) => state.trend.data
  );
  const isLoading = useSelector(
    (state: { trend: { loading: boolean } }) => state.trend.loading
  );
  const error = useSelector(
    (state: { trend: { error: string | null } }) => state.trend.error
  );

  useEffect(() => {
    dispatch(fetchTrendData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Yükleniyor</div>;
  }

  if (error) {
    return <div>An Error Occured</div>;
  }

  if (!coins) {
    return <div>It is not loaded.</div>;
  }

  return (
    <Row>
      {coins.slice(0, 6).map((coin: { item: ICoin }, i: number) => (
        <Col lg={4} key={i} className="mt-3">
          <TrendCard item={coin.item} />
        </Col>
      ))}
    </Row>
  );
};

export default TrendList;
