import React from "react";
import HSForm from "./asyncScripts/HSForm";

export default function Contacto() {
  return (
    <section id="contacto">
      <div className="contacto container">
        <div className="title-section">
          <span>Solicitud de proyecto</span>
          <h2>Contanos qué querés lograr</h2>
        </div>
        <HSForm />
      </div>

      <style jsx>{`
        .contacto {
          padding: 60px 30px;
        }
      `}</style>
    </section>
  );
}
