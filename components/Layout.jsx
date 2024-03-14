//This is Elsa's solution to the mouse-follow effect. I opted for my solution b/c it's more my style... However, Elsa helped me understand that I need the children-prop when I wrap the MousePointer around all elements; otherwise the other elements will not be shown. And finally I had to adjust from height/width: 100% to height/width: 100vh/vw; otherwise the mouse-follow effect did not work on the bottom part of the page.

import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Render the mouse effect */}
      <div
        style={{
          position: "absolute",
          top: mousePosition.y,
          left: mousePosition.x,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "blue",
        }}
      ></div>
      {/* Render the child components */}
      {children}
    </div>
  );
};

export default Layout;
