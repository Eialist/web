import logo from "../assets/github-logo-white.png";

export const Footer = () => {
  return (
    <div className="card-footer text-muted mt-5 d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="" width={30} className="mb-2" />
      <p>Copyright © 2024 Eialist</p>
    </div>
  );
};

export default Footer;
