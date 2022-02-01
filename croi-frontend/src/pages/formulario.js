import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from '../components/modal'

export default function Formulario() {
  const [Request, fetchRequest] = useState([])
  const [Project, fetchProject] = useState([])
  const [Users, fetchUsers] = useState([])
  const [description,setDescription] = useState()
  const [type_documents,setType_documents] = useState()
  const [is_juridic,setIsJuridic] = useState(false)
  const [is_natural,setIsNatural] = useState(false)
  const [email,setEmail] = useState()
  const [importance,setImportance] = useState()
  const [phone,setPhone] = useState()
  const [conditions,setConditions] = useState(false)
  const [user_juridic,setUserJuridic] = useState()
  const [proyect_integer,setProjectInterger] = useState()

  const cerrarmodal =() =>{
    toggleModal('myModal', false);
  }

  const getDataUser = () => {
  fetch('http://127.0.0.1:8000/user/user_juridic/')
      .then((res) => res.json())
      .then((res) => {
        fetchUsers(res)
      })
  }
  const getDataProject = () => {
  fetch('http://127.0.0.1:8000/api-project/project_view/')
    .then((res) => res.json())
    .then((res) => {
    fetchProject(res)
    })
  }
  const cambioDescripcion =(e) =>{
  setDescription(e.target.value)
  }
  const cambioTypeDocument =(e) =>{
  setType_documents(e.target.value)
  }
  const cambioIsJuric =(e) =>{
  setIsJuridic(e.target.checked)
  }
  const cambioIsNatural =(e) =>{
  setIsNatural(e.target.checked)
  }
  const cambioEmail =(e) =>{
  setEmail(e.target.value)
  }
  const cambioImportance =(e) =>{
  setImportance(e.target.value)
  }
  const cambioPhone =(e) =>{
  setPhone(e.target.value)
  }
  const cambioConditions =(e) =>{
  setConditions(e.target.checked)
  }
  const cambioUserJuridic =(e) =>{
  setUserJuridic(e.target.value)
  }
  const cambioProjectInterger =(e) =>{
  setProjectInterger(e.target.value)
  }

  var today  = new Date();
  var formatdate = today.toLocaleDateString('fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit' })
  

  const addRequest = (e) => {
  e.preventDefault();
  let datos = {
      description: description,
      type_documents: type_documents,
      is_juridic: is_juridic,
      is_natural: is_natural,
      email: email,
      phone: phone,
      conditions: conditions,
      date: formatdate,
      user_juridic: user_juridic,
      user_natural: null,
      importance: importance,
      proyect_integer: proyect_integer,
  }
  console.log(datos)
  axios.post('http://127.0.0.1:8000/api-project/request_view/',datos)
    .then(res => {
    Request.push(datos);
    setType_documents('')
    setDescription('')
    setIsJuridic('')
    setIsNatural('')
    setEmail('')
    setImportance('')
    setPhone('')
    setConditions('')
    setUserJuridic('')
    setProjectInterger('')
    console.log("----------------")
    console.log(Request)
    Array.from(document.getElementById("proyectForm").reset())
    toggleModal('myModal', false);
    }).catch((error)=> {
      console.log('Salio un error');
      //alert("Los campos no son correctos")
      //Array.from(document.getElementById("myModal").style.display = "block")
    });
  }


  useEffect(() => {
    getDataUser(),
    getDataProject()
  }, [])


  return (
<div>
  <form action="#" method="POST" id="proyectForm">
    <div className="shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">

        <div className="col-span-6 sm:col-span-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripcion
            </label>
            <div className="mt-1">
              <textarea
                onChange={cambioDescripcion} 
                id="description"
                name="description"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            
                defaultValue={''}
              />
            </div>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Tipo de documentos
          </label>
          <select
            id="type_documents"
            name="type_documents"
            autoComplete="type_documents"
            onChange={cambioTypeDocument}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="P">Proyecto</option>
            <option value="A">Acciones</option>
            <option value="B">Bonos</option>
            <option value="I">Inversiones</option>
          </select>
        </div>
        <br></br>

        <fieldset>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                <input
                    id="condiciones"
                    name="condiciones"
                    type="checkbox"
                    onChange={cambioIsNatural}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" 
                  />

                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">
                    Natural
                  </label>
                  
                </div>
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                <input
                    id="condiciones"
                    name="condiciones"
                    type="checkbox"
                    onChange={cambioIsJuric}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" 
                  />

                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">
                    Juridico
                  </label>
                  
                </div>
            </div>
          </div>
        </fieldset>

        <div className="col-span-6 sm:col-span-2">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Correo Electronico
          </label>
          <input
            onChange={cambioEmail} 
            type="text"
            name="email"
            id="email"
            autoComplete="given-name"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-6 sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefono
          </label>
          <input
            onChange={cambioPhone} 
            type="Number"
            name="phone"
            id="phone"
            autoComplete="phone"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="importance" className="block text-sm font-medium text-gray-700">
            Importe
          </label>
          <input
            onChange={cambioImportance} 
            type="text"
            name="importance"
            id="importance"
            autoComplete="importance"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          />
        </div>

        <br></br><br></br>

        <fieldset>
        <div className="col-span-6 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Seleccione usuario
            </label>
            <select
              id="type_documents"
              name="type_documents"
              autoComplete="type_documents"
              onChange={cambioUserJuridic}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option  selected value={null}>--User--</option>
              {Users.map((item, i) => {
                return (
                  <option key={i} value={item.id}>{item.name}</option>
                )})
              }
            </select>
          </div>
        </fieldset>
        
        <fieldset>
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Seleccione Proyecto
            </label>
            <select
              id="type_documents"
              name="type_documents"
              autoComplete="type_documents"
              onChange={cambioProjectInterger}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option  selected value={null}>--Project--</option>
              {Project.map((item, i) => {
                return (
                  <option  key={i} value={item.id}>{item.name}-{item.id}</option>
                )})
              }
            </select>
          </div>
        </fieldset>

        <fieldset>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                <input
                    id="condiciones"
                    name="condiciones"
                    type="checkbox"
                    onChange={cambioConditions}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" 
                  />

                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="comments" className="font-medium text-gray-700">
                    Condiciones
                  </label>
                  
                </div>
            </div>
          </div>
        </fieldset>

        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        
      <button onClick={addRequest} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-80" data-modal-toggle="authentication-modal">
          Enviar
      </button>
        
    </div>
  </div>
</form>

{/*Modal desapareido*/}
<div class="fixed z-10 inset-0 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="myModal">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Datos incorrectos
                </h3>
                <div class="mt-2">
                <p class="text-sm text-gray-500">
                    Se encontro un error dentro de su formulario porfavor revice bien los campos.
                </p>
                </div>
            </div>
            </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button onClick={cerrarmodal} type="button" data-modal-toggle="authentication-modal" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
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