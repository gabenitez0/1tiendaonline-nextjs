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
        <title>Aumentá tus ventas - 1tiendaonline</title>
        <meta
          name="description"
          content="Dá el sigiente paso en tu emprendimiento o comercio de Instagram. "
        />
        <meta
          name="keywords"
          content="tiendaonline, automatización, automático, tienda digital, tienda online, e-commerce, ecommerce, redes sociales, emprendimiento, emprendedor, ventas, compras, ropa, instagram, facebook, prestashop, woocommerce, tiendanube, shopify, guru, gurú, relojes, adidas, nike, new balance"
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
        <Contacto title="¿Todavía tenes dudas?" desc="Hola, soy Gabriel, podes ponerte en contacto conmigo, te respondo todas tus dudas y te brindo asesoramiento gratis" link="https://api.whatsapp.com/send?phone=541122542474&text=Hola%2C%20tengo%20una%20duda%20respecto%20a%20la%20oferta%20%22Pack-Commerce%20Completo%22."/>
      </section>
    </>
  );
}
