import React, { useEffect, useState } from "react";

const FadeReveal = ({ children, fadeDirection, animDuration, waitForLoad }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = React.useRef();

  const options = {
    threshold: 0.5,
  };

  // This function is executed whenever "dependencies" ( [dependencies] ) change. If dependencies are left empty, it is executed
  useEffect(() => {
    let callback = (entries) => {
      entries.forEach((entry) => {
        // conditions evaluates to true if element is intersecting aka is in the viewport and is hidden.
        // This guarantees that once it is visible, it wont be hidden anymore.
        if (entry.isIntersecting && isVisible === false) {
          if (waitForLoad) {
            const timer = setTimeout(() => {
              setVisible((o) => !o);

              const element = domRef.current;
              element.classList.add("is-visible");
            }, 1000);
          } else {
            setVisible((o) => !o);

            const element = domRef.current;
            element.classList.add("is-visible");
          }
        }
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.rootBounds
        //   entry.target
        //   entry.time
      });
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(domRef.current);

    // this happens when DOM element gets removed
    return () => observer.unobserve(domRef.current);
  }, []);

  // set the direction that the element arrives from
  let translateDirection = "translateY(0vh)";

  switch (fadeDirection) {
    case "bottom":
      translateDirection = "translateY(10vh)";
      break;
    case "right":
      translateDirection = "translateX(10vw)";
      break;
    case "top":
      translateDirection = "translateY(-10vh)";
      break;
    case "left":
      translateDirection = "translateX(-10vw)";
      break;

    default:
      break;
  }

  // set animation duration

  let animationDuration = 0.3;

  if (animDuration !== undefined) {
    animationDuration = animDuration;
  }

  return (
    <>
      {/* <Box ref={domRef} visibility={isVisible ? "visible" : "hidden"}>
        {children}
      </Box> */}

      {/* html element */}
      <div ref={domRef} className={"fade-in-section"}>
        {children}
      </div>

      {/* style */}
      <style jsx>
        {`
          .fade-in-section {
            opacity: 0;
            transform: ${translateDirection};
            visibility: hidden;
            transition: opacity ${animationDuration}s ease-out,
              transform ${animationDuration}s ease-out;
            will-change: opacity, visibility;
          }
          .fade-in-section.is-visible {
            opacity: 1;
            transform: none;
            visibility: visible;
          }
        `}
      </style>
    </>
  );
};

export default FadeReveal;
