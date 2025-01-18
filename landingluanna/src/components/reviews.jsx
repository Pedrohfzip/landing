import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const reviews = [
    { name: "Renata Flores dos Passos", review: "Excelente profissional e além de tudo humana. Sempre ajudando as pessoas a se sentirem melhor e a ter uma vida digna!.", stars: 5 },
    { name: "Gabriel Reidel", review: "Luana é a advogada mais competente e expert que eu conheço na área de previdência social, com uma grande excelência em seus processos, recomendo!", stars: 5 },
    { name: "Carlos Silva", review: "Profissional incrível, super atenciosa e dedicada! Recomendo fortemente.", stars: 5 },
    { name: "Maria Oliveira", review: "Muito atenciosa, resolveu meu problema com rapidez e eficiência!", stars: 5 },
    { name: "Fabi Cavazzola", review: "No primeiro dia que tive contato com a Luana. Senti muita segurança  nas suas explicações...", stars: 5 },
    { name: "João Santos", review: "Atendimento impecável, com muito profissionalismo. Super recomendo!", stars: 5 },
    { name: "Tatiani Bach da Silva", review: "A advogada Dra. Luana Mattos é maravilhosa tanto no pessoal quanto no profissional...super indico!", stars: 5 },
    { name: "Dian Franchesco", review: "Melhor advogada que eu conheço, extremamente competente!", stars: 5 },
  ];

  const cardLink = "https://www.google.com/search?q=luana+mattos+advocacia+&sca_esv=a4c4e0e02b25ffe0&sxsrf=ADLYWILSXukw-MHLsssnAQpI_895b0lhUA%3A1736857734725&ei=hliGZ9D2K-KJ4dUPnZnngQc&ved=0ahUKEwjQ0baim_WKAxXiRLgEHZ3MOXAQ4dUDCA8&uact=5&oq=luana+mattos+advocacia+&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2x1YW5hIG1hdHRvcyBhZHZvY2FjaWEgMgcQIRigARgKMgcQIRigARgKMgcQIRigARgKSOwaUJ8EWNMZcAF4AJABAJgBnQGgAfcLqgEEMC4xMbgBA8gBAPgBAZgCDKACmQzCAggQABiABBiwA8ICBxAAGLADGB7CAgkQABiwAxgIGB7CAgUQABiABMICBhAAGBYYHsICAhAmwgIIEAAYgAQYogTCAgYQABgNGB7CAgUQABjvBcICBBAhGBWYAwCIBgGQBgqSBwQxLjExoAf7LQ&sclient=gws-wiz-serp#lrd=0x94e16555a497e367:0xddc47f209439654d,1";

  return (
    <div className="container py-5">
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          {reviews.reduce((result, review, index) => {
            if (index % 3 === 0) result.push([]);
            result[result.length - 1].push(review);
            return result;
          }, []).map((group, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <div className="row justify-content-center">
                {group.map((review, index) => (
                  <div key={index} className="col-md-4 d-flex justify-content-center mb-4">
                    <a href={cardLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      <div className="card" style={{ width: "18rem", cursor: "pointer" }}>
                        <div className="card-body text-center">
                          <h5 className="card-title">{review.name}</h5>
                          <p className="card-text">
                            {Array.from({ length: review.stars }).map((_, i) => (
                              <i key={i} className="fas fa-star text-warning"></i>
                            ))}
                          </p>
                          <p className="card-text">
                            <em>"{review.review}"</em>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
