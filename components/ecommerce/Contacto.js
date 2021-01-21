export default function Contacto({title, desc, link}) {

  return (<>
    <div className="container contacto">
      <h2>{title}</h2>
      <p>{desc} <i className="icofont-long-arrow-down"></i></p>
      <a href={link} className="button-primary" target="_blank"><i className="icofont-brand-whatsapp"></i> Contactar ahora</a>
    </div>
  </>)
}