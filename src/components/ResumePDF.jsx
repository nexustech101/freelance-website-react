
const ResumePDF = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "5em",
        padding: "1em 0",
        display: "flex",
        gap: "2em",
        justifyContent: "center",
      }}
    >
      {[
        "SS-4.pdf",
        "LLC EIN.pdf",
        "Operating Agreement.pdf",
        "Resume.pdf",
        "Work Orders.pdf",
      ].map((name, key) => {
        return (
          <a
            key={key}
            href={`/pdfs/${name}`} // Relative url path
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#00c056",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "25px",
              boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
            }}
          >
            View My {name.toString().replace(".pdf", "")}
          </a>
        );
      })}
    </div>
  );
};

export default ResumePDF;
