import techstack from "../assets/techstackIcon3-removebg-preview.png";

export const TechstackComponent = () => {
  return (
    <div
      className="col-sm"
      style={{
        height: "185px",
        backgroundColor: "rgba(90,167,186)",
        borderRadius: "16px",
        margin: ".5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <img src={techstack} alt="" width={100} />
    </div>
  );
};
