import React from "react";
import makeAsyncScriptLoader from "react-async-script";
import HSForm from "./asyncScripts/HSForm";

export default function Contacto() {
  
  const HubSpotForm = makeAsyncScriptLoader("//js.hsforms.net/forms/shell.js")(HSForm)
  return (
    <section id="contacto">
      <div className="contacto container">
        <div className="title-section">
          <span>Solicitud de proyecto</span>
          <h2>Contanos qué querés lograr</h2>
        </div>
        <HubSpotForm />
      </div>

      <style jsx>{`
        .contacto {
          padding: 60px 30px;
        }
      `}</style>
    </section>
  );
}
