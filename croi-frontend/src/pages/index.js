import Footer from '../components/footer';
import Body from '../components/body';
import Header from '../components/header';
import Link from 'next/link'
//import Footer from '../components/footerstyles';

export default function Example({ data }) {
  return (
    <div>
      <Header/>

            <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-5 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">CROII</h1>
                        <br />
                        {/* cards */}
                        <div className="flex flex-wrap -m-4">

                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Inversiones</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            <Link  href={{
                                                        pathname: "/Project/project",
                                                        query: {  financing: "INVESTMENT" },
                                                    }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                        <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Acciones</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            <Link  href={{
                                                        pathname: "/Project/project",
                                                        query: {  financing: "ACTION" },
                                                    }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Bonos</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            <Link  href={{
                                                        pathname: "/Project/project",
                                                        query: {  financing: "BOND" },
                                                    }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src="https://picsum.photos/id/188/720/400" alt="image" className="lg:h-72 md:h-48 w-full 
                  object-cover object-center"/>
                                    <div className="p-6 hover:bg-red-700 hover:text-white transition duration-300 ease-in">
                                        <h1 className="text-2xl font-semibold mb-3">Prestamos</h1>
                                        <p className="leading-relaxed mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <div className="flex items-center flex-wrap">
                                            <Link  href={{
                                                        pathname: "/Project/project",
                                                        query: {  financing: "LOANS" },
                                                    }}>
                                                <button type="submit" className="bg-red-500 text-blue-50 rounded-lg py-2 px-4 mt-5 hover:bg-white hover:text-red-700">View More</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="p-4 sm:w-2/3 lg:w-2/2">
                                <div className="h-full border-2 broder-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <div className="py-10 item-center justify-center">
                                        <div className="bg-white rounded-lg shadow-2x1 w-4/4">
                                            <div className="flex">
                                                <div className="px-10">
                                                    <h1 className="text-3xl font-semibold mb-3">¿Como funciona?</h1>
                                                    <h2 className="text-2xl leading-relaxed mb-3">Qué es el crowdlending y crowfonding con CROI</h2>
                                                    <div className="h-full border-2 broder-black-200 border-opacity-100 rounded-lg overflow-hidden">
                                                        <h3 className="text-2xl leading-relaxed mb-3">El crowdlending y crowfonding permite a todo tipo
                                                            de personas naturales, empresas puedan financiarse directamente por un grupo grande y diverso
                                                            de personas (crowd=multitud, lending=prestar dinero), personas (crowd=multitud, fonding=fondos dinero)
                                                            sin tener que pedir el dinero bajo las condiciones de la banca tradicional.</h3>
                                                        <Link href="/nosotros">
                                                            <button className="bg-red-600 text-blue-50 rounded-lg py-2 px-4 mt-5">Get started</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* EndCards */}
                    </div >
                </div >
            </section >
            {/* About CEO */}
            <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-5 mx-auto">
                    <figure className="md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                        <div className="flex flex-col items-center justify-between px-10 py-4 bg-white dark:bg-gray-800 sm:flex-row">
                            <img className="w-300 h-300 md:w-580 md:h-auto md:rounded-none rounded-full mx-auto"
                                src="https://croii.com/wp-content/uploads/2020/05/author-1-free-img.png" alt=""
                                width="390" height="530" />
                            <div className="md:p-5 text-center md:text-left space-y-4">
                                <h1 className="text-4xl md:text-6xl text-gray-600 font-semibold">Acerca del CEO</h1>
                                <h2 className="text-2xl md:text-4xl text-gray-600 font-semibold">Culpa qui officia
                                    deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.</h2>
                                <blockquote>
                                    <p className="text-lg font-medium">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                                        omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                    </p>
                                </blockquote>
                                <div className="flex items-center flex-wrap">
                                    <a href="#" className="text-gray-600  inline-flex items-center md:mb-2 lg:mb-0">View more
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                            
                                            fill="none">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </section>
            {/* EndAbout CEO */}
        
      <Footer />
    </div>
  );
}
/*
<h1 classNameName="mt-6 text-center text-3xl font-extrabold text-gray-900">CROI </h1>
      <div classNameName="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div classNameName="max-w-md w-full space-y-8">
          <div classNameName="px-4 py-3 bg-gray-50 text-center sm:px-6">
            <label htmlFor="inicioSesion" classNameName="block text-sm font-medium text-gray-700">
              Inicio de Sesion
            </label>
            <a
              href="./login"
              classNameName="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Click aqui!
            </a>
          </div>
          <h1 classNameName="mt-6 text-center text-3xl font-extrabold text-gray-900">Seleccione que tipo de usuario es para registrarse :</h1>
          <img classNameName="mx-auto h-20 w-auto"
            src="https://i.pinimg.com/originals/78/65/03/7865039e6beeea079a1a9bd57b0163ff.png"
            alt="Workflow"
          />
        </div>
      </div>
      <div classNameName="px-4 py-3 bg-gray-50 text-center sm:px-6">
        <label htmlFor="usuarioNatural" classNameName="block text-sm font-medium text-gray-700">
          Usuario Natural
        </label>
        <a
          href="./registerNatural"
          classNameName="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Click aqui!
        </a>
      </div>
      <br></br>
      <div classNameName="px-4 py-3 bg-gray-50 text-center sm:px-6">
        <label htmlFor="usuarioJuridico" classNameName="block text-sm font-medium text-gray-700">
          Usuario Juridico
        </label>
        <a
          href="./registerJuridico"
          classNameName="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Click aqui!
        </a>
      </div>
*/