import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Scroll.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const textRef = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();

  useEffect(() => {
    gsap.to(text1.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        end: "+=100",
        scrub: 2,
        markers: true,
      },
      x: -500,
    });
    gsap.to(text2.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        end: "+=100",
        scrub: 2,
      },
      x: 500,
    });
    gsap.from(text3.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%",
        end: "+=100",
        scrub: 2,
      },
      opacity: 1,
      y: 500,
    });
  }, []);

  return (
    <div className="container">
      <section>
        <div className="blank" />
        <div ref={textRef} className="h1_wrapper">
          <h1 ref={text1}>text1</h1>
          <h1 ref={text2}>text2</h1>
        </div>
        <h2 ref={text3}>
          text3 text3 text3 text3 text3 text3 text3 text3 text3
        </h2>
        <div className="blank" />
      </section>
    </div>
  );
};

export default Scroll;
