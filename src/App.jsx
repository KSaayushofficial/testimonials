import { useState } from "react";
import "./style.css"

function App() {
  const [currentIndex,setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used.",
      author: "Jane Doe",
    },
    {
      quote: "This is the worst product I've ever used.",
      author: "Doe Jane",
    },
    {
      quote: "This is such an inspiring thing.",
      author: "Mark Hook",
    },
    {
      quote: "I am in love with this idea.",
      author: "Susan port",
    },
    {
      quote: "I genuinely feel happy to use this!",
      author: "Hitesh Ji",
    },
  ];

  const handlePrevClick = () => {
setCurrentIndex(
  (currentIndex+testimonials.length - 1)% testimonials.length
)
  }

    const handleNextClick = () => {
      setCurrentIndex(
        (currentIndex + 1) % testimonials.length
      );
    };

  return (
    <>
      <div className="testimonials">
        <div className="testimonials-quote">
          {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
          {testimonials[currentIndex].author}
        </div>
        <testimonials className="testimonials-nav">
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </testimonials>
      </div>
    </>
  );
}

export default App
