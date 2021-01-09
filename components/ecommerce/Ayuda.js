export default function Ayuda({visible, setVisible, modal}) {
  
  return (<>
<div className="modal" style={modal} >
  <div className="modal modalBg" onClick={() => setVisible(false)} />
  <div className="container head">
    <h2>Ayuda</h2>
    <div className="button-primary" onClick={() => setVisible(false)}>Cerrar</div>
  </div>
  <div className="container help">
    <h2>¿Qué incluye el servicio e-commerce?</h2>
    <p>Incluye la instalación y configuración completa de tu tienda, desde el nombre hasta los metadatos. También incluye la configuración de los medios de pago, métodos de envío y la estructura de Categorías, Marcas, Proveedores, Productos y Variaciones.</p>
  </div>
  <div className="container help">
    <h2>¿Por qué E-commerce Propio?</h2>
    <p>Los archivos de tu tienda y base de datos son 100% tuyos, en caso de que quieras dejar de tarbajar con nosotros (contratar tu propio web hosting, desarrollador, o lo que sea), puedes pedirnos los archivos y te los daremos sin problema.</p>
    <p>La mayoría de sitios donde puedes crear tu tienda online no ofrecen este tipo de propiedad, sino que simplemente puedes usar el servicio desde su plataforma sin tener mucha posibilidad de modificar o trabajar de forma independiente.</p>
  </div>
  <div className="container help">
    <h2>¿Qué es el Web Hosting?</h2>
    <p>El alojamiento web es el servicio que provee a los usuarios de Internet un sistema para poder almacenar información, imágenes, vídeo, o cualquier contenido accesible vía web.</p>
  </div>
  <div className="container help">
    <h2>¿Qué es Dominio .com.ar?</h2>
    <p>El Dominio de Internet es un nombre único cuyo propósito principal es conectar a los navegantes con tu sitio web mediante términos memorizables y fáciles de encontrar. Por ejemplo: https://mitiendamax.com.ar/</p>
  </div>
  <div className="container help">
    <h2>¿Qué es el Certificado de seguridad SSL/HTTPS?</h2>
    <p>Un certificado SSL (Secure Sockets Layer) es un título digital que autentifica la identidad de un sitio web y cifra con tecnología SSL la información que se envía al servidor. Cuando un usuario de Internet intenta enviar información de credenciales a un servidor web, el navegador del usuario accede al certificado digital del servidor y establece una conexión segura. El certificado SSL es muy importante en un e-commerce ya que, además de brindar confianza, protege los datos de identidad y tarjetas de tus clientes.</p>
    <img src="static/ssl.gif" style={{maxWidth: '100%', width: 450, marginTop: 20}}/>
  </div>
  <div className="container help">
    <h2>¿Qué implica la Instalación y Configuración de...?</h2>
    <p>No solo basta con tener un e-commerce, un web hosting, un dominio y un certificado SSL, también se requiere de un técnico especializado para hacer que todo esto se aplique correctamente y trabaje en conjunto.</p>
  </div>
  <div className="container help">
    <h2>Carga de productos</h2>
    <p>Este es un trabajo complicado de realizar correctamente para alguien que nunca trabajo con un e-commerce y por eso se suele ofrecer como servicio incluido, ya que implica crear adecuadamente las Categorías, Marcas, Proveedores, Productos y Variaciones. Es importante que todo esto esté bien creado desde la base para que los visitantes encuentren lo que están buscando con facilidad.</p>
  </div>
  <div className="container help">
    <h2>Soporte técnico y asesoramiento</h2>
    <p>Ante cualquier problema o consulta ya sea del propio servicio de e-commerce o de otros servicios complementarios como diseño, marketing, redes sociales, etc., tendrás toda nuestra disposición por chat directo y llamadas mediante WhatsApp.</p>
  </div>
  <div className="container head">
    <h2></h2>
    <div className="button-primary" onClick={() => setVisible(false)}>Cerrar</div>
  </div>
</div>
</>
)
}