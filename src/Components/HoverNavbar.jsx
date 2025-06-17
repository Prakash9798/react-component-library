import React, { useState } from "react";

const HoverNavbar = () => {
  const [hovered, setHovered] = useState(null);

  const navItems = [
    {
      name: "Home",
      preview: "Welcome to the Home page! Here is a quick intro.",
    },
    {
      name: "About",
      preview: "Know more about our mission and team.",
    },
    {
      name: "Services",
      preview: "We offer web design, development, and consulting.",
    },
    {
      name: "Contact",
      preview: "Reach out to us via email or phone.",
    },
  ];

  return (
    <div style={styles.navbar}>
      {navItems.map((item) => (
        <div
          key={item.name}
          style={styles.navItem}
          onMouseEnter={() => setHovered(item.name)}
          onMouseLeave={() => setHovered(null)}
        >
          {item.name}

          {/* Hover Preview */}
          {hovered === item.name && (
            <div style={styles.previewBox} className="fade-in">
              {item.preview}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  navbar: {
    display: "flex",
    gap: "30px",
    background: "#111",
    padding: "15px 30px",
  },
  navItem: {
    position: "relative",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
  previewBox: {
    position: "absolute",
    top: "45px",
    left: 0,
    background: "white",
    color: "#111",
    padding: "15px",
    border: "1px solid #ccc",
    width: "250px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    borderRadius: "8px",
    zIndex: 999,
    animation: "fadein 0.3s ease-in-out",
  },
};

export default HoverNavbar;
