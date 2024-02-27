export const HeaderComponent = () => {
  return (
    <div className="container-fluid" style={{ maxWidth: "75%" }}>
      {/* <img src={logo} alt="" width={55} /> */}
      <div
        className="row header-row"
        style={{ display: "flex", gap: "7em", alignItems: "end" }}>
        <h1 className="col-sm-3 mt-5" style={{ fontSize: "130px" }}>
          eialist
        </h1>
        <p
          className="col-sm-2"
          style={{
            marginBottom: "30px",
            width: "200px",
          }}>
          My very unsuspicious webpage where I try and build a portfolio.
        </p>
      </div>
    </div>
  );
};
