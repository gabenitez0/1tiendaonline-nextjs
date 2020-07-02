import Head from "next/head";
import dynamic from 'next/dynamic'

//COMPONENTS
import Header from "../components/Header";
import Services from "../components/Services";
const Features = dynamic(() => import('../components/Features'))
const Soporte = dynamic(() => import('../components/Soporte'))
const Contacto = dynamic(() => import('../components/Contacto'), { ssr: false })

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>1tiendaonline | Automatiza tu negocio</title>
        <meta
          name="description"
          content="Soluciones tecnológicas de automatización de ventas, leads y bases de datos para empresas, negocios y emprendimientos."
        />
        <meta
          name="keywords"
          content="tiendaonline, automatización, automático, tienda digital, e-commerce, ecommerce, redes sociales, emprendimiento, emprendedor, ventas, compras, ropa, instagram, facebook, prestashop, woocommerce, tiendanube, shopify"
        />
      </Head>

      <Header />
      <Services />
      <Features />
      <Soporte />
      <Contacto />

      <style jsx>{`
        :global(.links a) {
          color: white;
          margin-left: 20px;
          text-decoration: none;
          font-weight: 300
        }
      `}</style>
    </>
  );
}
