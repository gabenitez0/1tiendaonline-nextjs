import Head from "next/head";

export default function Terminos() {
  return (
    <>
      <Head>
        <title>
          Términos y condiciones | 1tiendaonline - Automatiza tu negocio
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
          <h1>Términos y condiciones</h1>
          <h3>Condiciones del servicio</h3>
          <ul>
            <li>
              Nosotros trabajamos con plataformas externas a nosotros a la hora
              de realizar una tienda online, es por ello que tanto las
              promociones como las membresías están sujetas a la plataforma
              correspondiente y por lo tanto los pagos se le deben realizar a
              dicha plataforma.
            </li>
            <li>
              Nuestro principal medio de contacto y soporte técnico es por
              WhatsApp
            </li>
            <li>
              Los trabajos de diseño gráfico pueden demorar hasta 1 semana
              máximo desde que se realiza el pago hasta ser entregados e
              insertados en su tienda.
            </li>
            <li>
              El precio por las campañas de publicidad incluye la creación,
              gestión y optimización de la misma. No incluye presupuesto de
              inversión ni diseño de flyer publicitario.
            </li>
            <li>Tanto los términos y condiciones como las políticas de privacidad están sujetas a cambios y/o actualizaciones.</li>
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
          li{
              margin-bottom: 10px;
          }
        `}</style>
      </section>
    </>
  );
}
