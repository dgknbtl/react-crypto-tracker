import React from "react";
import { Modal } from "react-bootstrap";
import { IDetailModalProps } from "@/types";

const DetailModal: React.FC<IDetailModalProps> = (props) => {
  const { show, onHide, children } = props;

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default DetailModal;
