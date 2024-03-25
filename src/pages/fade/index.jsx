import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./index.scss";

const App = () => {
  const containerRef = useRef();
  const sectionTL = gsap.timeline({ paused: true });

  useEffect(() => {
    sectionTL.from(containerRef.current, {
      yPercent: 100,
      duration: 0.5,
      ease: "power3",
    });
    sectionTL.to(containerRef.current, {
      scaleX: 1,
      duration: 1,
      ease: "power3",
    });
    sectionTL.play();
  }, []);

  return (
    <section className="container">
      <div className="wrapper" ref={containerRef}>
        dd
      </div>
    </section>
  );
};

export default App;
