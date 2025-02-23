import { useState } from "react";
import "./Donation.css";
import DonationModal from "./DonationModal";
import ReactDom from "react-dom";

export default function DonationButton() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <button className="donationBtn" onClick={() => setIsModalVisible(true)}>
        Make a Donation
      </button>
      <DonationModal
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        Some Text
      </DonationModal>
    </>
  );
}
