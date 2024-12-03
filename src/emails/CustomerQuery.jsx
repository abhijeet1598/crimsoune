import React from "react";

const InquiryEmail = ({
  username,
  customerName,
  customerEmail,
  customerPhone,
  description,
}) => {
  const styles = {
    container: {
      fontFamily: '"Arial", sans-serif',
      padding: "20px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
    },
    header: {
      backgroundColor: "#9b7eb9",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "8px 8px 0 0",
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
    },
    content: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "0 0 8px 8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    label: {
      fontWeight: "bold",
      color: "#333",
    },
    value: {
      marginBottom: "10px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>New Customer Inquiry</div>
      <div style={styles.content}>
        <p>
          <span style={styles.label}>Received By:</span>{" "}
          <span style={styles.value}>{username}</span>
        </p>
        <p>
          <span style={styles.label}>Customer Name:</span>{" "}
          <span style={styles.value}>{customerName}</span>
        </p>
        <p>
          <span style={styles.label}>Customer Email:</span>{" "}
          <span style={styles.value}>{customerEmail}</span>
        </p>
        <p>
          <span style={styles.label}>Customer Phone:</span>{" "}
          <span style={styles.value}>{customerPhone}</span>
        </p>
        <p>
          <span style={styles.label}>Description:</span>
          <br />
          <span style={styles.value}>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default InquiryEmail;
