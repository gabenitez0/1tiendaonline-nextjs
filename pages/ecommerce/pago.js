import Head from "next/head";
import { useState } from "react";

import Ayuda from "../../components/ecommerce/Ayuda";
import Propuesta from "../../components/ecommerce/Propuesta";
import MediosPago from "../../components/ecommerce/pago/MediosPago";

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
      </Head>
      <section className="pago">
        <Ayuda visible={visible} setVisible={setVisible} modal={modal}/>
        <Propuesta visible={visible} setVisible={setVisible} modal={modal} titulo="Pack-Commerce Completo"/>
        <MediosPago/>
      </section>
    </>
  );
}
