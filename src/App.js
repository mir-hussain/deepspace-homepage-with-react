import Home from "./pages/home/Home";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function App() {
  let appRef = useRef(null);

  useEffect(() => {
    gsap.to(appRef, {
      visibility: "visible",
      autoAlpha: 1,
      duration: 2,
    });
  }, []);

  return (
    <div
      className='invisible'
      ref={(el) => {
        appRef = el;
      }}
    >
      <Home />
    </div>
  );
}

export default App;
