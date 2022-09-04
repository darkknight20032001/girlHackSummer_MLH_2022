import genderneutral from "../images/genderneutral.jpg";
import womenswayam from "../images/womenswayam.jpg";
import genderequality from "../images/genderequality.jpg";
function CarouselPage() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          width: "60rem",
          margin: "0px auto",
          backgroundColor: "pink",
          padding: "10px",
        }}
      >
        <div
          className="carousel-indicators"
          style={{
            width: "10rem",
            backgroundColor: "white",
            margin: "5px auto",
          }}
        >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{ backgroundColor: "black" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ backgroundColor: "black" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{ backgroundColor: "black" }}
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src={genderequality}
              className="d-block "
              style={{
                margin: "auto",
                width: "498px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={womenswayam}
              className="d-block"
              style={{
                margin: "auto",
                width: "556px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={genderneutral}
              className="d-block"
              style={{
                margin: "auto",
                width: "498px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselPage;
