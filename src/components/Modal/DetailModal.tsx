import React, { useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { IDetailModalProps } from "@/types";
import { useDispatch } from "react-redux";
import { fetchById } from "@/features/Crypto/CryptoSlice";

const DetailModal: React.FC<IDetailModalProps> = (props) => {
  const { show, onHide, coinId } = props;

  const dispatch: any = useDispatch();
  const [crypto, setCrypto] = useState<any>(null);

  const handleEntered = async () => {
    const result = await dispatch(fetchById(coinId));
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
          <img src={crypto?.image?.thumb} alt="" />
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
