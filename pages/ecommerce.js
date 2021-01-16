import Head from "next/head";
import { useState } from "react";

import Header from "../components/ecommerce/Header";
import Ayuda from "../components/ecommerce/Ayuda";
import Intro from "../components/ecommerce/Intro";
import Valor from "../components/ecommerce/Valor";
import Nosi from "../components/ecommerce/Nosi";
import Propuesta from "../components/ecommerce/Propuesta";
import Marketplace from "../components/ecommerce/Marketplace";
import Design from "../components/ecommerce/Design";
import Panel from "../components/ecommerce/Panel";
import Contacto from "../components/ecommerce/Contacto";
import Garantia from "../components/ecommerce/Garantia";
import PruebaSocial from "../components/ecommerce/PruebaSocial";

export default function Ecommerce() {
  const [visible, setVisible] = useState(false);

  const modal = {
    opacity: visible ? 1 : 0,
    zIndex: visible ? 10 : -1,
  };

  return (
    <>
      <Head>
        <title>Ahorra tiempo automatizando tus ventas | 1tiendaonline</title>
        <meta
          name="description"
          content="Ahorra tiempo y trabajo automatizando tus ventas de instagram y redes sociales."
        />
        <meta
          name="keywords"
          content="tiendaonline, automatización, automático, tienda digital, e-commerce, ecommerce, redes sociales, emprendimiento, emprendedor, ventas, compras, ropa, instagram, facebook, prestashop, woocommerce, tiendanube, shopify"
        />
        <link rel="stylesheet" href="/icofont.min.css"></link>
        <link rel="stylesheet" href="/ecommerce.css"></link>
      </Head>
      <section id="ecommerce">
        <Ayuda visible={visible} setVisible={setVisible} modal={modal}/>
        <Header/>
        <Intro/>
        <Valor/>
        <Nosi/>
        <Propuesta visible={visible} setVisible={setVisible} modal={modal} titulo="¿Cuál es mi propuesta?"/>
        <Marketplace/>
        <Design/>
        <Panel/>
        <Garantia/>
        <PruebaSocial/>
        <Propuesta visible={visible} setVisible={setVisible} modal={modal} titulo="¿Cuál es mi propuesta?"/>
        <Contacto/>
      </section>
    </>
  );
}
