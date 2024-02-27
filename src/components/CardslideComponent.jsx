import { useState, useEffect } from "react";
import wordapp from "../assets/wordapp.png";
import strong from "../assets/strongnepic.png";
import bookster from "../assets/bookster.png";
import memory from "../assets/memory.png";
import portfolio from "../assets/portfolio.png";

export const CardslideComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [wordapp, strong, bookster, memory, portfolio];

  let interval = 3000;

  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [activeIndex]); // Restart timer when activeIndex changes

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="col-sm d-flex justify-content-center align-items-center"
      style={{
        height: "300px",
        backgroundColor: "rgba(244,147,92)",
        borderRadius: "16px",
        margin: ".5em",
        objectFit: "fill",
        overflow: "hidden",
        padding: "0",
        marginBottom: "1em",
        border: "10px solid rgb(244,147,92)",
      }}>
      <div className="card-container">
        <div className="carousel d-flex align-items-center justify-content-center">
          <span
            className="carousel-control-prev-icon"
            onClick={goToPrev}></span>
          <img
            className="carousel-image"
            src={images[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
          />
          <span
            className="carousel-control-next-icon"
            onClick={goToNext}></span>
        </div>
      </div>
    </div>
  );
};

export default CardslideComponent;
