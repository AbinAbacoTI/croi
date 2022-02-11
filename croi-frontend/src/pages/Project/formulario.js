import { useEffect, useState } from 'react'
import axios from 'axios';

//declaraciones de variables de estado para almacenar informacion
export default function Formulario() {
  const [Request, fetchRequest] = useState([])
  const [NamtePrject,setNameProejct] = useState()
  const [Description,setDescription] = useState()
  const [Address,setAddress] = useState()
  const [Image,setImage] = useState()
  const [File,setFile] = useState()
  const [NameEnterprise,setNameEnterprise] = useState()

  const cambioNameProject =(e) =>{
  setNameProejct(e.target.value)
  }
  const cambioDescription =(e) =>{
  setDescription(e.target.value)
  }
  const cambioAddress =(e) =>{
  setAddress(e.target.value)
  }
  const cambioImage =(e) =>{
    setImage(e.target.files[0])
  }
  const cambioFile =(e) =>{
  setFile(e.target.files[0])
  }
  const cambioNameEnterprise =(e) =>{
  setNameEnterprise(e.target.value)
  }

  var now = new Date();
  var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
  
  const addRequest = async()  =>{
    const upload = new FormData();
    upload.append('name_project', NamtePrject)
    upload.append('description', Description)
    upload.append('address', Address)
    upload.append('image', Image)
    upload.append('name_biznes', NameEnterprise)
    upload.append('file', File)
    upload.append('name_biznes', NameEnterprise)
    upload.append('is_juridic', true)
    upload.append('is_natural', false)
    upload.append('date', isoDate)
    upload.append('user_juridic', 1)
    upload.append('user_natural', "")
    await axios.post("http://127.0.0.1:8000/api-project/request_view/", upload)
    .then(res=>{
      console.log(res.data)
    }).catch(error=>{
      console.log(error)
    })
  }

/*
  const addRequest = async(e) => {  
  e.preventDefault();
  let datos = {
      user_juridic: 1,
      user_natural: null,
      name_project: NamtePrject,
      description: Description,
      address: Address,
      image: Image,
      file: null,
      name_biznes: NameEnterprise,
      is_juridic: true,
      is_natural: false,
      date: isoDate,
  }
  console.log(datos)
  await axios.post('http://127.0.0.1:8000/api-project/request_view/',datos)
    .then(res => {
    Request.push(datos);
    setNameProejct('')
    setDescription('')
    setAddress('')
    setImage('')
    setFile('')
    setNameEnterprise('')
    console.log("----------------")
    console.log(Request)
    Array.from(document.getElementById("proyectForm").reset())
    toggleModal('myModal', false);
    }).catch((error)=> {
      console.log('Salio un error');
    });
  }
*/
  return (
    <div>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">

              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Nombre Projecto
                </label>
                <input
                  onChange={cambioNameProject} 
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Descripcion
                  </label>
                  <div className="mt-1">
                    <textarea
                      onChange={cambioDescription} 
                      rows={4}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      defaultValue={''}
                    />
                  </div>
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Ubicación Projecto
                </label>
                <input
                  onChange={cambioAddress} 
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="importance" className="block text-sm font-medium text-gray-700">
                  Nombre Empresa
                </label>
                <input
                  onChange={cambioNameEnterprise} 
                  type="text"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="importance" className="block text-sm font-medium text-gray-700">
                  Imagen de la empresa
                </label>
                <input 
                  type="file" 
                  accept=".jpg, .png, .jpeg"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  onChange={cambioImage} 
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="importance" className="block text-sm font-medium text-gray-700">
                  Docuemntos del proyecto
                </label>
                <input
                  type="file"
                  onChange={cambioFile} 
                  accept=".pdf"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>

              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              
            <button onClick={addRequest} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-80" data-modal-toggle="authentication-modal">
                Enviar
            </button>
              
          </div>
        </div>
        

        {/*Modal desapareido*/}
        <div  className="fixed z-10 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="myModal">
            <div  className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <div  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div  className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div  className="sm:flex sm:items-start">
                    <div  className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                        <svg  className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div  className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3  className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Datos incorrectos
                        </h3>
                        <div  className="mt-2">
                        <p  className="text-sm text-gray-500">
                            Se encontro un error dentro de su formulario porfavor revice bien los campos.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div  className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" data-modal-toggle="authentication-modal"  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Ok
                    </button>
                </div>
                </div>
            </div>
            <script async defer src="https://buttons.github.io/buttons.js"></script>
                  <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
        </div>
    </div>
  )
}