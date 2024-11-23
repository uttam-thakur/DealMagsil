"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";
import ContactModal from "../components/ContactModal";
import GetInTouchForm from "../components/GetInTouchForm";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleThumbsDown = () => setOpenModal(true);
  const handleThumbsUp = () => alert("Thank you for choosing us!");

  const infoData = {
    title: "Get in Touch with Us",
    subTitle: "Quick answers and reliable support are just a message away.",
    description:
      "We believe that good communication builds strong partnerships. Whether you have a quick question, require detailed information, or need help resolving a challenge, we’re just a click or call away. Our dedicated team ensures that every query is met with promptness and expertise, helping you achieve the results you need.",
  };

  const contactData = [
    {
      title: "Chat to sales",
      description: "Speak to our friendly team.",
      contactInfo: "abhradey11@gmail.com",
    },
    {
      title: "Chat to support",
      description: "We’re here to help.",
      contactInfo: "abhra@dealmagsil.com",
    },
    {
      title: "Visit us",
      description: "Visit our office HQ.",
      contactInfo: "View on Google Maps",
      isButton: true,
    },
    {
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      contactInfo: "+91 9332331442",
    },
  ];

  const faqData = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days...",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan anytime.",
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.title}>{infoData.title}</div>
          <div className={styles.infoWindow}>
            <div className={styles.subTitle}>{infoData.subTitle}</div>
            <div className={styles.description}>{infoData.description}</div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1>Contact our friendly team</h1>
          <p>Let us know how we can help.</p>
        </div>

        <div className={styles.grid}>
          {contactData.map((contact, index) => (
            <div key={index} className={styles.card}>
              <h2>{contact.title}</h2>
              <p>{contact.description}</p>
              {contact.isButton ? (
                <button className={styles.button}>{contact.contactInfo}</button>
              ) : (
                <p className={styles.email}>{contact.contactInfo}</p>
              )}
            </div>
          ))}
        </div>

        <div className={styles.faq}>
          <h2>Frequently asked questions</h2>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.accordion} ${
                expanded === `panel${index}` ? styles.expanded : ""
              }`}
              onClick={() =>
                setExpanded(
                  expanded === `panel${index}` ? false : `panel${index}`
                )
              }
            >
              <div className={styles.accordionSummary}>{faq.question}</div>
              {expanded === `panel${index}` && (
                <div className={styles.accordionDetails}>
                  <p>{faq.answer}</p>
                  <div className={styles.feedback}>
                    <p>Is this information helpful?</p>
                    <button onClick={handleThumbsUp} className={styles.thumbUp}>
                      👍
                    </button>
                    <button
                      onClick={handleThumbsDown}
                      className={styles.thumbDown}
                    >
                      👎
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <GetInTouchForm />
    </>
  );
}
