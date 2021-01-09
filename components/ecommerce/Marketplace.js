export default function Marketplace() {

  return (<>
    <div className="container"></div>
    <div className="container marketplace">
      <img className="imgHeader" src="static/marketplace.jpeg"/>
      <h2>"¿Puedo vender mis productos en el Marketplace de Instagram?"</h2>
      <p>Podes vender tus productos en el Marketplace de Instagram siempre y cuando cumplas con las condiciones de Instagram:</p>
      <ul>
        <li><i className="icofont-caret-right"></i> Tener configurada tu cuenta de Instagram como una cuenta comercial.</li>
        <li><i className="icofont-caret-right"></i> Cumplir las <a href="https://www.facebook.com/policies/commerce?ref=shopping_setup" target="_blank">políticas de comercio</a> de Instagram.</li>
        <li><i className="icofont-caret-right"></i> Vender productos físicos: La plataforma no admite productos virtuales ni servicios.</li>
      </ul>
      <p><b>Si cumples con todas las condiciones podemos ayudarte a que puedas vender en este mercado sin cargo extra.</b> En caso de que no los cumplas, igualmente podes colocar el enlace de acceso en la descripción y tener un e-commerce funcional.</p>
    </div>
  </>)
}