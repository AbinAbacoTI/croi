import Footer from '../components/footer';
import Body from '../components/body';
import Header from '../components/header';
//import Footer from '../components/footerstyles';

export default function Example({ data }) {
  return (
    <div>
      <Header/>
      <Body />
      <Footer />
    </div>
  );
}
/*
<h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">CROI </h1>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <label htmlFor="inicioSesion" className="block text-sm font-medium text-gray-700">
              Inicio de Sesion
            </label>
            <a
              href="./login"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Click aqui!
            </a>
          </div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Seleccione que tipo de usuario es para registrarse :</h1>
          <img className="mx-auto h-20 w-auto"
            src="https://i.pinimg.com/originals/78/65/03/7865039e6beeea079a1a9bd57b0163ff.png"
            alt="Workflow"
          />
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
        <label htmlFor="usuarioNatural" className="block text-sm font-medium text-gray-700">
          Usuario Natural
        </label>
        <a
          href="./registerNatural"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Click aqui!
        </a>
      </div>
      <br></br>
      <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
        <label htmlFor="usuarioJuridico" className="block text-sm font-medium text-gray-700">
          Usuario Juridico
        </label>
        <a
          href="./registerJuridico"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Click aqui!
        </a>
      </div>
*/