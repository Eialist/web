import phone from "../assets/phone2.png";

export const ContactComponent = () => {
  return (
    <div
      className="col-sm"
      style={{
        height: "80px",
        backgroundColor: "rgba(238,233,242)",
        borderRadius: "16px",
        margin: ".5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "5em",
      }}>
      <img src={phone} alt="" height={50} />
      <p className="info-text">
        eia.eklund@gmail.com<br></br>0762308918
      </p>
      <button type="button" className="btn btn-info">
        @ me
      </button>
    </div>
  );
};
