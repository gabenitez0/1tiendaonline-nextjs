import React, { useState } from "react";
import YouTube from "react-lazyload-youtube";

export default function Features() {
  const [visible, setVisible] = useState(false);

  const opts = {
    height: "380",
    width: "700",
    playerVars: { controls: 0 },
  };

  const modal = {
    opacity: visible ? 1 : 0,
    zIndex: visible ? 10 : -1,
  };

  const features = [
    "No requiere conocimientos técnicos",
    "Plataformas diseñadas para el usuario final",
    "Generación de base de datos automáticamente",
    "Recopilación automática de datos",
    "Automatización de Leads y Ventas",
  ];

  return (
    <section id="features">
      <div className="image" />
      <div className="features">
        <h1 className="h2">
          Genera Clientes Potenciales, Ventas y Bases de Datos Automáticamente
        </h1>
        <p>
          Soluciones completas y personalizadas para empresas, negocios y
          emprendimientos.
        </p>
        {features.map((f) => (
          <div className="feature" key={f}>
            <i className="flaticon-right-arrow" /> <h3>{f}</h3>
          </div>
        ))}
        <button
          className="button-primary"
          id="yt-iframe"
          onClick={() => setVisible(true)}
        >
          Cómo se hace
        </button>
        <div className="modal" style={modal} >
          <div className="modal modalBg" onClick={() => setVisible(false)} />
          <YouTube videoId="cgNTtM44-Dk" width="700px" height="380px" imgSize="maxresdefault" />
        </div>
      </div>

      <style jsx>{`
        .modal {
          position: fixed;
          display: flex;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.4);
          top: 0;
          left: 0;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-out;
          opacity: 0;
          z-index: -1;
        }
        .modalBg{
        }
        section {
          display: flex;
          padding: 80px 0px 50px;
        }
        .features {
          width: 60%;
          padding: 20px 10px 30px 40px;
          max-width: 490px;
        }
        p {
          box-sizing: border-box;
          margin-top: 0px;
          margin-bottom: 33px;
          font-size: 16px;
          color: rgba(52, 61, 72, 0.8);
          line-height: 1.75;
        }
        .feature {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
        }
        .feature i {
          color: var(--color-primary);
          margin-right: 10px;
        }
        .image {
          width: 50%;
          background: url("/static/feature.jpg");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        h3 {
          box-sizing: border-box;
          margin-top: 0px;
          margin-bottom: 8px;
          font-size: 16px;
          color: rgb(52, 61, 72);
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.02em;
          margin-bottom: 0;
        }
        button {
          margin-top: 36px;
        }
        @media screen and (max-width: 678px) {
          section {
            flex-direction: column;
          }
          .image {
            height: 300px;
            width: 80%;
          }
          .features {
            padding: 30px;
            width: calc(100% - 50px);
          }
        }
      `}</style>
    </section>
  );
}
