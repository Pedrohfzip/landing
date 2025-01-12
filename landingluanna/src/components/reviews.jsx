import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Renata Flores dos Passos",
      review: "Excelente profissional e além de tudo humana. Sempre ajudando as pessoas a se sentirem melhor e a ter uma vida digna!",
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
    <div className="container mt-5">
      <div
        id="testimonialCarousel"
        className="carousel slide mt-5"
        data-bs-ride="false"
        style={{ overflow: "visible" }}
      >
        <div className="carousel-inner">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ padding: "0 15%" }}
            >
              <div className="row justify-content-center">
                {reviews.slice(index, index + 3).map((item, subIndex) => (
                  <div
                    key={subIndex}
                    className="col-md-4"
                    style={{
                      opacity: subIndex === 0 ? 1 : 0.5,
                      transform: subIndex === 0 ? "scale(1)" : "scale(0.9)",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          {Array.from({ length: item.stars }).map((_, i) => (
                            <i key={i} className="fas fa-star text-warning"></i>
                          ))}
                        </p>
                        <p className="card-text">
                          <em>"{item.review}"</em>
                        </p>
                        <p className="card-footer text-muted">{item.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
          onClick={(e) => e.preventDefault()}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
          onClick={(e) => e.preventDefault()}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
