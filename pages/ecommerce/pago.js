import Head from "next/head";
import { useState } from "react";

import Ayuda from "../../components/ecommerce/Ayuda";
import Propuesta from "../../components/ecommerce/Propuesta";
import MediosPago from "../../components/ecommerce/pago/MediosPago";
import Contacto from "../../components/ecommerce/Contacto";

export default function pago() {
  const [visible, setVisible] = useState(false);

  const modal = {
    opacity: visible ? 1 : 0,
    zIndex: visible ? 10 : -1,
  };
  return (
    <>
      <Head>
        <title>Realizar compra del Pack-Commerce Completo | 1tiendaonline</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Elegí entre diversos métodos de pago según tu conveniencia."
        />
        <link rel="stylesheet" href="/ecommerce.css"></link>
        <link rel="stylesheet" href="/icofont.min.css"></link>
      </Head>
      <section className="pago">
        <Ayuda visible={visible} setVisible={setVisible} modal={modal}/>
        <Propuesta visible={visible} setVisible={setVisible} modal={modal} titulo="Pack-Commerce Completo"/>
        <MediosPago/>
        <Contacto title="PASO 2: Avisanos que realizaste el pago:" link="https://api.whatsapp.com/send?phone=541122542474&text=Hola%2C%20he%20realizado%20el%20pago%20por%20la%20oferta%20%22Pack-Commerce%20Completo%22."/>
      </section>
    </>
  );
}
