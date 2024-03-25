import { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../../assets/img/5.png";
import "./index.scss";

const App = () => {
  const containerRef = useRef();
  const imgRef = useRef();
  const sectionTL = gsap.timeline({ paused: true });

  useEffect(() => {
    sectionTL.from(containerRef.current, {
      yPercent: 100,
      duration: 0.6,
      ease: "power3",
    });
    sectionTL.to(
      containerRef.current,
      {
        scale: 1,
        duration: 1.2,
        ease: "power4.in",
      },
      "<"
    );
    sectionTL.to(
      imgRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      },
      ">"
    );
    setTimeout(() => {
      sectionTL.play();
    }, 2000);
  }, []);

  return (
    <section className="container">
      <div className="wrapper" ref={containerRef}>
        <img ref={imgRef} src={img} />
      </div>
    </section>
  );
};

export default App;
