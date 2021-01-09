export default function HeaderComp() {
  return (
    <section id="header">
      <header className="container">
        <div className="title">
          <h1>Tu Negocio, en Internet, Vendiendo en Automático</h1>
          <p>
            Lo que quieras lograr lo hacemos por vos a precios increíbles.
            ¡Contanos de qué se trata!
          </p>
          <div className="buttons">
            <a href="https://api.whatsapp.com/send?phone=541122542474" className="button-primary" target="_blank">
              Consultar Ahora
            </a>
            <a href="/ecommerce" className="link">
              <span>Más Info</span> <i className="flaticon-right-arrow" />
            </a>
          </div>
        </div>
      </header>

      <style jsx>
        {`
          section {
            padding-top: 240px;
            padding-bottom: 180px;
            background-image: url("/static/header.png");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            width: 100%;
            height: auto;
          }
          .title {
            width: 100%;
            box-sizing: border-box;
            padding-left: 15px;
            padding-right: 15px;
          }
          .buttons {
            margin-top: 40px;
          }
          span {
            padding: 0 5px;
          }
          i:before {
            font-size: 14px;
            margin-left: 3px;
          }
          @media screen and (min-width: 480px) {
            .title {
              width: 70%;
            }
          }
          @media screen and (min-width: 768px) {
            .title {
              width: 60%;
            }
          }
          @media screen and (min-width: 990px) {
            .title {
              width: 50%;
            }
          }
          @media only screen and (max-width: 480px) {
            section {
              background: none;
              padding-top: 130px;
              padding-bottom: 60px;
            }
          }
          @media (max-width: 990px) {
            section {
              padding-top: 170px;
              padding-bottom: 180px;
            }
          }
        `}
      </style>
    </section>
  );
}
