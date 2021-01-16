export default function Criptos({visibleCriptos, setVisibleCriptos, modalCriptos}) {
  
  return (<>
<div className="modal modalpago" style={modalCriptos} >
  <div className="modal modalpago modalBg" onClick={() => setVisibleCriptos(false)} />
  <div className="container head datos">
    <h2>Criptomonedas</h2>
  </div>
  <div className="container help datos">
    <h2>Datos para realizar la transferencia:</h2>
    <p>USDT (TRC20): <b>TRb76KLNXXhF4HvvUoq1mLMVhrQjutjvb7</b></p>
    <p>BTC: <b>1GyHrDCfFL1sypPn1fWHmjr6AtqBoJAk5W</b></p>
    <p>ETH: <b>0x8f89624dbbf47ef825319dd7cf5211baecf7d8b0</b></p>
    <p>Importe equivalente a: <b>$33 USD</b></p>
    <p><u>Informar por WhatsApp una vez realizado el pago.</u></p>
  </div>
  <div className="container head datos">
    <h2></h2>
    <div className="button-primary" onClick={() => setVisibleCriptos(false)}>Cerrar</div>
  </div>
</div>
</>
)
}