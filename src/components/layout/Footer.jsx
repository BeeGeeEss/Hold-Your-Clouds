export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        width: "100%",
        padding: "1rem 0",
        backgroundColor: "#0B0D2B",
      }}
    >
      <h5>
        <a
          href="https://github.com/BeeGeeEss"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
          }}
        >
          ✨BeeGeeEss✨
        </a>

        <span
          style={{
            color: "#FFFFFF",
            margin: "0 8px",
          }}
        >
          | &copy; {currentYear}
        </span>
      </h5>
    </footer>
  );
}
