import { useState } from "react";
import Transferencia from "./Transferencia";
import Criptos from "./Criptos";

export default function MediosPago() {
  const [visibleTransf, setVisibleTransf] = useState(false);
  const [visibleCriptos, setVisibleCriptos] = useState(false);

  const modalTransf = {
    opacity: visibleTransf ? 1 : 0,
    zIndex: visibleTransf ? 10 : -1,
  };
  const modalCriptos = {
    opacity: visibleCriptos ? 1 : 0,
    zIndex: visibleCriptos ? 10 : -1,
  };
  return (<>
    <div className="container contacto mediosPago">
      <h2>Medios de pago:</h2>
      <div className="botonesPago">
        <a className="button-primary mercadopago" href="https://mpago.la/2MaMYnJ">MercadoPago (+10%)</a>
        <a className="button-primary" onClick={() => setVisibleTransf(true)}>Transferencia Bancaria</a>
        <a className="button-primary criptos" onClick={() => setVisibleCriptos(true)}>Criptomonedas</a>
      </div>
    </div>
    <Transferencia visibleTransf={visibleTransf} setVisibleTransf={setVisibleTransf} modalTransf={modalTransf}/>
    <Criptos visibleCriptos={visibleTransf} setVisibleCriptos={setVisibleCriptos} modalCriptos={modalCriptos}/>
  </>)
}