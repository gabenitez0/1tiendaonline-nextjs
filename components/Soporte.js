export default function Soporte() {
  return (
    <section id="soporte">
      <div className="soporte container">
        <div className="colText">
          <h1 className="h2">
            No Compres un Servicio Sin Saber, Te Asesoramos Sin Cargo
          </h1>
          <p>
            Existe un servicio específico para cada cosa que se quiera lograr.
            Te ayudamos a saber qué necesitas y por qué.
          </p>
          <a className="button-primary" href="#contacto">
            Quiero asesoramiento
          </a>
        </div>
        <div className="colPasos">
          <div className="card">
            <h3>1</h3>
            <p>Nos explicas qué querés lograr</p>
          </div>
          <div className="card">
            <h3>2</h3>
            <p>Evaluamos tu solicitud</p>
          </div>
          <div className="card">
            <h3>3</h3>
            <p>Nos ponemos en contacto con vos</p>
          </div>
          <div className="card">
            <h3>4</h3>
            <p>Avanzamos en el proyecto</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        h1 {
          margin-bottom: 20px !important;
        }
        h3 {
          font-size: 60px;
          font-weight: 300;
          margin-bottom: 0;
          margin-top: -20px;
        }
        p {
          margin-bottom: 33px;
        }
        .card p {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 0;
          color: var(--color-secondary);
        }
        .soporte {
          padding: 70px 30px 80px;
          display: flex;
          align-items: center;
        }
        .soporte > div {
          width: 50%;
        }
        .colText {
          padding-left: 15px;
          padding-right: calc(132px + 15px) !important;
        }
        .colPasos {
          display: flex;
          flex-wrap: wrap;
          padding-left: 20px;
        }
        .card {
          width: calc(50% - 25px - 40px);
          margin-left: 25px;
          margin-bottom: 27px;
          display: flex;
          flex-direction: column;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          transition: box-shadow 0.3s ease-in-out 0s;
          padding: 20px;
          border-radius: 10px;
          box-shadow: rgba(16, 66, 97, 0.07) 0px 8px 20px 0px;
        }
        .card:hover {
          box-shadow: rgba(16, 66, 97, 0.1) 0px 16px 35px 0px;
        }
        .card:nth-child(2n) {
          position: relative;
          top: 22px;
        }
        @media screen and (min-width: 480px) {
          .card {
            padding: 30px 20px;
            width: calc(50% - 25px - 40px);
          }
        }
        @media screen and (min-width: 768px) {
          .card {
            padding: 30px 20px;
            width: calc(50% - 25px - 40px);
          }
        }
        @media screen and (min-width: 990px) {
          .card {
            padding: 53px 40px;
            width: calc(50% - 25px - 80px);
          }
        }
        @media only screen and (max-width: 1200px) {
          .colText {
            padding-right: calc(32px + 15px) !important;
          }
          .colPasos {
            padding-left: 0;
          }
        }
        @media only screen and (max-width: 991px) {
          .colText {
            padding-right: 0 !important;
          }
        }
        @media only screen and (max-width: 767px){
          .colText {
            margin-bottom: 40px;
          }
          .soporte{
            flex-direction: column;
            padding: 30px 20px
          }
          .soporte > div {
            width: 100%
          }
          .card:nth-child(2n+1){
            margin-left: 0
          }
          .card {
            width: calc(50% - 13px - 40px);
          }
        }
      `}</style>
    </section>
  );
}
