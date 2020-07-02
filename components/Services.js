export default function Services() {
  const services = [
    {
      id: 0,
      flaticon: "flaticon-online-shop",
      title: "Tienda Online",
      desc:
        "Desarrollamos tiendas online con la tecnología más profesional de Shopify",
      bg:
        "linear-gradient(-60deg,rgba(50, 207, 167, 0.75),rgba(150, 201, 61, 0.75))",
    },
    {
      id: 1,
      flaticon: "flaticon-quality",
      title: "Web Institucional",
      desc: "Desarrollamos páginas web para tu empresa acorde a tu presupuesto",
      bg:
        "linear-gradient(-60deg, rgba(47, 128, 237, 0.75), rgba(86, 204, 242, 0.75))",
    },
    {
      id: 2,
      flaticon: "flaticon-computer",
      title: "Diseño UX/UI",
      desc:
        "Le damos a tu página web la lógica de diseño e identidad de tu marca",
      bg:
        "linear-gradient(-60deg, rgba(236, 0, 140, 0.75), rgba(255, 103, 103, 0.75))",
    },
    {
      id: 3,
      flaticon: "flaticon-edit-tool",
      title: "Diseño Gráfico",
      desc:
        "Diseñamos desde banners, flyers y logos hasta identidad de marca completa",
      bg:
        "linear-gradient(-60deg, rgba(110, 72, 170, 0.75), rgba(192, 91, 210, 0.75))",
    },
    {
      id: 4,
      flaticon: "flaticon-dollar",
      title: "Marketing y Publicidad",
      desc:
        "Creamos y administramos campañas de publicidad para tu marca o producto",
      bg:
        "linear-gradient(-60deg, rgba(241, 39, 17, 0.7), rgba(245, 175, 25, 0.7))",
    },
    {
      id: 5,
      flaticon: "flaticon-server",
      title: "Administración de Empresa",
      desc:
        "Simplificamos tareas de alta complejidad automatizando bases de datos con CRM",
      bg:
        "linear-gradient(-60deg, rgba(0, 57, 115, 0.75), rgba(255, 255, 199, 0.75))",
    },
  ];

  return (
    <section id="services">
      <main className="container">
        <div className="title-section">
          <span>Nuestros servcios</span>
          <h2>¿Qué soluciones ofrecemos?</h2>
        </div>
        <div className="services">
          {services.map((s) => (
            <div className="service" key={s.id}>
              <div style={{ background: s.bg }}>
                <i className={s.flaticon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        section {
          padding: 80px 0px;
        }
        .services {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
        }
        i {
          font-size: 40px;
        }
        .service div {
          display: flex;
          width: 84px;
          height: 84px;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          color: rgb(255, 255, 255);
          margin: 0px auto 30px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
        }
        .service div:before,
        .service div:after {
          content: "";
          width: 28px;
          height: 100%;
          position: absolute;
        }
        .service div:before {
          transform: rotate(45deg);
          background-color: rgba(255, 255, 255, 0.15);
        }
        .service div:after {
          transform: rotate(-45deg);
          background-color: rgba(0, 0, 0, 0.05);
        }

        .service {
          width: 100%;
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid rgb(241, 244, 246);
          border-left: 1px solid rgb(241, 244, 246);
          transition: all .2s ease;
        }
        .service:hover{
            box-shadow: rgba(39, 79, 117, 0.2) 0px 40px 90px -30px;
        }
        .service:nth-child(-n + 3) {
          border-top: 1px solid rgb(241, 244, 246);
        }
        .service:nth-child(3n + 3) {
          border-right: 1px solid rgb(241, 244, 246);
        }
        @media screen and (min-width: 480px) {
          .service {
            width: calc((100% / 2) - 42px);
            padding: 20px;
          }
        }
        @media screen and (min-width: 990px) {
          .service {
            width: calc((100% / 3) - 82px);
            padding: 40px;
          }
        }
        @media screen and (max-width: 480px) {
          .service:nth-child(n + 1) {
            border-right: 1px solid rgb(241, 244, 246);
          }
        }
        @media only screen and (max-width: 991px) {
          .service:nth-child(-n + 3) {
            border-top: 0;
          }
          .service:nth-child(-n + 2) {
            border-top: 1px solid rgb(241, 244, 246);
          }
          .service:nth-child(3n + 3) {
            border-right: 1px solid rgb(241, 244, 246);
          }
          .service:nth-child(2n + 2) {
            border-right: 1px solid rgb(241, 244, 246);
          }
        }
      `}</style>
    </section>
  );
}
