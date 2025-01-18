import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Renata Flores dos Passos",
      review: "Excelente profissional e além de tudo humana.",
      stars: 5,
      date: "2 meses atrás",
    },
    {
      name: "Carlos Silva",
      review: "Profissional incrível, super atenciosa e dedicada! Recomendo fortemente.",
      stars: 5,
      date: "3 meses atrás",
    },
    {
      name: "Maria Oliveira",
      review: "Muito atenciosa, resolveu meu problema com rapidez e eficiência!",
      stars: 4,
      date: "1 mês atrás",
    },
    {
      name: "João Santos",
      review: "Atendimento impecável, com muito profissionalismo. Super recomendo!",
      stars: 5,
      date: "1 semana atrás",
    },
  ];

  return (
    <div
      className=" "
      style={{
        justifyContent: "center",
        position: "relative",
        // overflow: "hidden",
        background: "white",
      }}
    >
      <div className="row align-items-center " style={{ position: "relative", zIndex: 2 }}>
        <div className="col-md-12 mt-2 mb-5 justify-content-center">
          <div
            id="testimonialCarousel"
            className="carousel slide mt-5 text-center d-flex justify-content-center"
            data-bs-ride="carousel"
            data-bs-interval="3000"
            style={{ overflow: "visible" }}
          >
        
            <div className="carousel-inner ">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  style={{ padding: "0 15%" }}
                >
                  <div className="d-flex justify-content-center">
                    <div className="col-md-4 d-flex justify-content-center">
                      <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                          <h5 className="card-title">{review.name}</h5>
                          <p className="card-text">
                            {Array.from({ length: review.stars }).map((_, i) => (
                              <i
                                key={i}
                                className="fas fa-star text-warning"
                              ></i>
                            ))}
                          </p>
                          <p className="card-text">
                            <em>"{review.review}"</em>
                          </p>
                          <p className="card-footer text-muted">{review.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
