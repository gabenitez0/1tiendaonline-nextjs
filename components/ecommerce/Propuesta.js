import Link from "next/link";
import Countdown from "react-countdown";

export default function Propuesta({visible, setVisible, modal, titulo}) {

  const ahora = Date.now();
  const hoy = new Date(); hoy.setHours(24, 0, 0);

  return (<>
    <div className="container propuesta">
      <h2>{titulo}</h2>
      <p>Actualmente <b>estoy ofreciendo un paquete que incluye TODO lo que necesitas para tener tu e-commerce integrado a tus redes sociales y funcionando al 100%</b> a un precio exclusivo de lanzamiento:</p>
      <table>
        <thead>
          <tr>
            <th>Producto/Servicio <a className="masinfo" onClick={() => setVisible(true)}><i className="icofont-question-circle"></i>Ver info</a></th>
            <th>Precio (ARS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E-Commerce propio</td>
            <td className="tachado">$4.999,99</td>
          </tr>
          <tr>
            <td>Web Hosting adecuado</td>
            <td className="tachado">$4.799,99/año</td>
          </tr>
          <tr>
            <td>Dominio .com.ar</td>
            <td className="tachado">$270,00/año</td>
          </tr>
          <tr>
            <td>Certificado de seguridad SSL</td>
            <td className="tachado">$3.699,99/año</td>
          </tr>
          <tr>
            <td>Instalación y Configuración de Web Hosting + Dominio + Certificado SSL</td>
            <td className="tachado">$2.999,99</td>
          </tr>
          <tr>
            <td>Carga de 30 productos</td>
            <td className="tachado">$1.999,99</td>
          </tr>
          <tr>
            <td>Asesoramiento y soporte técnico</td>
            <td className="tachado">$1.499,99/mes</td>
          </tr>
          <tr>
            <td><b>Total Pago Inicial</b></td>
            <td className="tachado"><b>$20.000,00</b></td>
          </tr>
          <tr>
            <td><b>Pago Anual de mantenimiento y soporte</b></td>
            <td className="tachado"><b>$15.000,00</b></td>
          </tr>
        </tbody>
      </table>
      <p>El precio normal de todos estos servicios es de <b>$20.000 + $15.000</b>, pero estamos ofreciendo el Pack-Commerce Completo a un precio exclusivo de solo:</p>
      <div className="precio">
        <h1>$<b>4999</b> ARS/único</h1>
        <span>+ $6,00 USD/mes a partir de segundo mes</span>
        <h3>¡75% de descuento!</h3>
        <div className="countdown">
        <span>Finaliza en: </span>
        <Countdown date={hoy + ahora} />
        </div>
      </div>
      <div className="cta">
        <Link href="/ecommerce/pago"><a className="button-primary"><i className="icofont-sale-discount"></i> Si, Quiero la oferta!</a></Link>
      </div>
      <p><i className="icofont-bomb"></i> Además de todo esto, incluímos la <b>personalización del diseño del e-commerce para que sea acorde al producto</b> y, en caso de que no tengas, el <b>diseño de un logotipo</b> simple para tu tienda; <u>ambas cosas cotizadas en +$10.000 completamente GRATIS!</u> <i className="icofont-bomb"></i></p>
    </div>
  </>)
}