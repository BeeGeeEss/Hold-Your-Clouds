export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <h5>
        <a
          href="https://github.com/BeeGeeEss"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: "#0B0D2B",
            textDecoration: "none",
          }}
        >
          ✨BeeGeeEss✨
        </a>

        <span style={{ color: "#0B0D2B", margin: "0 8px" }}>
          | &copy; {currentYear}
        </span>
      </h5>
    </footer>
  );
}
