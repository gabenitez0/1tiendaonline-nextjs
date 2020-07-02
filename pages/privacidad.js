import Head from "next/head";

export default function Privacidad() {
  return (
    <>
      <Head>
        <title>
          Políticas de privacidad | 1tiendaonline - Automatiza tu negocio
        </title>
        <meta
          name="description"
          content="Soluciones tecnológicas de automatización de ventas, leads y bases de datos para empresas, negocios y emprendimientos."
        />
        <meta
          name="keywords"
          content="tiendaonline, automatización, automático, tienda digital, e-commerce, ecommerce, redes sociales, emprendimiento, emprendedor, ventas, compras, ropa, instagram, facebook, prestashop, woocommerce, tiendanube, shopify"
        />
      </Head>
      <section id="terminos">
        <div className="container terminos">
          <h1>Políticas de privacidad</h1>
          <ul>
            <li>
              Tenga en cuenta que nosotros tenemos acceso total sobre su tienda
              o página web, por un lado, para realizar las modificaciones
              necesarias para el mantenimiento, ya sea la aplicación de algún
              recurso gráfico como la administración de las campañas de
              publicidad u otros, y por otro lado, porque nos encargamos de
              analizar que nuestros clientes no utilicen nuestros servicios para
              estafar a otras personas.
            </li>
            <li>
              También tenemos acceso a los datos de sus clientes (los clientes
              de su tienda o página web), sin embargo, no los utilizaremos para nada más que
              no tenga que ver con fines publicitarios para su tienda. No los
              utilizaremos para nuestro propio beneficio.
            </li>
            <li>Si el cliente lo solicita, podemos renunciar al acceso de los datos mencionados en cualquier momento.</li>
          </ul>
        </div>

        <style jsx>{`
          :global(.links a) {
            color: var(--color-secondary);
            margin-left: 20px;
            text-decoration: none;
            font-weight: 300;
          }
          .terminos {
            padding: 120px 30px 60px;
          }
          h1 {
            font-size: 42px;
          }
          h3 {
            margin-top: 40px;
          }
          ul {
            list-style: decimal;
            padding-left: 20px;
            line-height: 2.1;
            color: var(--color-tertiary);
          }
          li {
            margin-bottom: 10px;
          }
        `}</style>
      </section>
    </>
  );
}
