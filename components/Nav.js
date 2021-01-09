import Link from "next/link";

export default function Nav() {
  return (
    <nav className="container">
      <div className="nav">
        <img className="logo" src="/static/logo.svg" />
        <div className="links">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/#services">
            <a>Servicios</a>
          </Link>
          <Link href="/#features">
            <a>Automatización</a>
          </Link>
          <Link href="/ecommerce">
            <a>E-Commerce</a>
          </Link>
          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .nav {
          top: 20px;
          position: absolute;
          display: flex;
          justify-content: space-between;
          max-width: 750px; 
          align-items: center;
          width: calc(100% - 60px);
        }
        .logo {
          height: 45px;
        }
        .logo:hover {
          cursor: pointer;
        }
        .links :global(a) {
          text-decoration: none
          margin-left: 20px;
          font-weight: 300;
        }
        .links :global(a:hover) {
          border-bottom: 1px solid;
        }

        @media screen and (max-width: 800px){
          .links{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 10px;
            right: 0;
          }
          .links a{
            margin-left: 0;
            margin-bottom: 10px;
            text-align: right;
          }
        }
        @media screen and (max-width: 480px){
          .links a{
            color: var(--color-secondary)!important;
          }
        }
        @media screen and (min-width: 992px){
          .nav{
            max-width: 970px; 
          }
        }
        @media screen and (min-width: 1220px){
          .nav{
            max-width: 1170px; 
          }
        }
      `}</style>
    </nav>
  );
}
