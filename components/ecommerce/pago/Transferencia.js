export default function ModalPago({visibleTransf, setVisibleTransf, modalTransf}) {
  
  return (<>
<div className="modal modalpago" style={modalTransf} >
  <div className="modal modalpago modalBg" onClick={() => setVisibleTransf(false)} />
  <div className="container head datos">
    <h2>Transferencia Bancaria</h2>
  </div>
  <div className="container help datos">
    <h2>Datos para realizar la transferencia:</h2>
    <p>CBU: <b>1430001713004964240016</b></p>
    <p>Alias: <b>gabenitez.ars</b></p>
    <p>Importe: <b>$5000 ARS</b></p>
    <p><u>Informar por WhatsApp una vez realizado el pago.</u></p>
  </div>
  <div className="container head datos">
    <h2></h2>
    <div className="button-primary" onClick={() => setVisibleTransf(false)}>Cerrar</div>
  </div>
</div>
</>
)
}