import React, { useState } from "react";
import { BsQuestionSquare } from "react-icons/bs";
import styles from "./styles/FAQ.module.css";
import { faqData } from "../common/constant";
import PortalModal from "./common-components/Modal";

const FAQ: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState(false);
  const [SelectedData, setSelectedData] = useState({
    question: "",
    answer: "",
  });

  return (
    <div className={styles.faq}>
      <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      <div className={styles.faqSection}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={styles.faqCard}
            onClick={() => {
              setSelectedData(faq);
              setFaqOpen(true);
            }}
          >
            <BsQuestionSquare className={styles.faqCardIcon} />
            <div className={styles.faqCardSummary}>{faq.question}</div>
          </div>
        ))}
      </div>
      <PortalModal
        open={faqOpen}
        onBackdropClick={() => {
          setFaqOpen(false);
        }}
      >
        <div className={styles.faqModal}>
          <button
            onClick={() => {
              setFaqOpen(false);
            }}
            className={styles.close}
          >
            X
          </button>

          <div className={styles.questionSection}>
            <BsQuestionSquare className={styles.faqCardIcon} />
            <h1 className={styles.faqModalQuestion}>
              {SelectedData?.question}
            </h1>
          </div>
          <h1 className={styles.faqModalAnswer}>{SelectedData?.answer}</h1>
        </div>
      </PortalModal>
    </div>
  );
};

export default FAQ;
