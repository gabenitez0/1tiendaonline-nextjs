import React from "react";

export default function Contacto() {
  return (
    <section id="contacto">
      <div className="contacto container">
        <div className="title-section">
          <span>Solicitud de proyecto</span>
          <h2>Contanos qué querés lograr</h2>
        </div>
        <div style={{textAlign: 'center'}}>
        <a href="https://api.whatsapp.com/send?phone=541122542474" className="button-primary" target="_blank">
          Enviar mensaje
        </a>
        </div>
      </div>

      <style jsx>{`
        .contacto {
          padding: 60px 30px;
        }
      `}</style>
    </section>
  );
}
