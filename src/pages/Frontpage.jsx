import { CardslideComponent } from "../components/CardslideComponent";
import { ContactComponent } from "../components/ContactComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { PresentationComponent } from "../components/PresentationComponent";
import { TechstackComponent } from "../components/TechstackComponent";
// import me from "../assets/IMG_6124.jpeg";

export const Frontpage = () => {
  return (
    <div className="frontpage">
      <HeaderComponent />
      <div className="container-fluid" style={{ maxWidth: "75%" }}>
        <div className="row max-lg-n5">
          <PresentationComponent />
          <div className="col-sm" style={{ paddingLeft: "0" }}>
            <CardslideComponent />
            <TechstackComponent />
          </div>
        </div>
        <div className="row">
          <ContactComponent />
        </div>
        {/* <div className="me">
          <img
            src={me}
            alt=""
            width={200}
            style={{
              borderRadius: "50%",
              //   position: "absolute",
              //   bottom: "0",
              //   right: "1%",
              //   zIndex: "-10",
            }}
          />
        </div> */}
      </div>
    </div>
  );
};
