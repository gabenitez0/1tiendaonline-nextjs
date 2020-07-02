import React, { useEffect } from "react";
export default function Contacto() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hs-scripts.com/6978315.js";
    document.body.appendChild(script);
  });
  return null
}