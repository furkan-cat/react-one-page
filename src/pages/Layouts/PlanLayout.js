import React from "react";

function PlanLayout({ children }) {
  return (
    <div style={{ width: "90%", maxWidth: "1200px", margin: "2.5em auto 2.5em auto" }}>
      {children}
    </div>
  );
}
export default PlanLayout;
