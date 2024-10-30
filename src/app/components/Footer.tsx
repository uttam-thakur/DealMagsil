const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        padding: "1rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Bhookad. All rights reserved.</p>
      <p>Designed by Bhookad Team</p>
    </footer>
  );
};

export default Footer;
