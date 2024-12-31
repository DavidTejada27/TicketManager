import "../styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currentYear} Ticket Manager, All right not really reserved | By David
        Tejada
      </p>
    </footer>
  );
}