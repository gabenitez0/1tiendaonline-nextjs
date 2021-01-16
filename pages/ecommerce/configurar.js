import Head from "next/head";

export default function pago() {
  return (
    <>
      <Head>
        <title>Configurar E-Commerce | 1tiendaonline</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Configurá los datos de tu e-commerce."
        />
        <link rel="stylesheet" href="/ecommerce.css"></link>
      </Head>
      <section>
        <div className="container">
          <h1>Muchas gracias!</h1>
          <p>Recibimos el pago, muchas gracias por confiar en nosotros. Espero que podamos trabajar juntos por mucho tiempo!</p>
          <p>Estamos a disposición por cualquier duda o problema que tengas mediante WhatsApp.</p>
        </div>
        <div className="container contacto">
          <h2>Configura tu tienda</h2>
          <p>La información que te solicitamos es exclusivamente utilizada para configurar tu e-commerce.</p>
          <a className="button-primary" href="https://share.hsforms.com/1BjF9LxAgT5mpK5a8AOJitA45ki3">Configurar e-commerce</a>
        </div>
      </section>
    </>
  );
}
