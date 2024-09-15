import React from "react";

export default function Food() {
  const food1 = "Orange";
  const food2 = "Apple";
  return (
    <ul className="nav-list">
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}
