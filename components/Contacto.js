import React, { useEffect } from "react";
export default function Contacto() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "6978315",
          formId: "d6966c5c-caf2-4c70-a9b7-c8450bdca777",
          target: "#form",
        });
      }
    });
  }, []);
  return (
    <section id="contacto">
      <div className="contacto container">
        <div className="title-section">
          <span>Solicitud de proyecto</span>
          <h2>Contanos qué querés lograr</h2>
        </div>
        <div id="form" className="form" />
      </div>

      <style jsx>{`
        .contacto {
          padding: 60px 30px;
        }
        .form {
          max-width: 600px;
          margin: auto;
          border: 1px solid rgb(241, 244, 246);
          padding: 30px;
          box-shadow: rgba(39,79,117,0.2) 0px 40px 90px -30px;
        }
      `}</style>
    </section>
  );
}
