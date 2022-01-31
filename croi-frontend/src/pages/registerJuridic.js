import { LockClosedIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'
//import { useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

export default function RegisterNatural() {

  // User Natural
  const [Users, fetchUsers] = useState([])
  const [email,setEmail] = useState()
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [ruc,setRUC] = useState()
  const [nombre,setNombre] = useState()
  const [gerente,setGerente] = useState()

  // User Natural
  const cambioUsername =(e) =>{
    setUsername(e.target.value)
  }
  const cambioEmail =(e) =>{
    setEmail(e.target.value)
  }
  const cambioPassword =(e) =>{
    setPassword(e.target.value)
  }
  const cambioRUC =(e) =>{
    setRUC(e.target.value)
  }
  const cambioNombre =(e) =>{
    setNombre(e.target.value)
  }
  const cambioGerente =(e) =>{
    setGerente(e.target.value)
  }
  
 
   // User Natural
   const addUser = (e) => {
    let datos = {
       user: {
         email: email,
         username: username,
         //Agreagr fecha dinamica
         date_joined: "2022-01-31T14:24:09.389Z",
         password: password
       },
       RUC: ruc,
       name: nombre,
       manager: gerente
     }
     axios.post('http://127.0.0.1:8000/user/user_juridic/',datos)
       .then(res => {
       Users.push(datos);
       setUsername('')
       setEmail('')
       setPassword('')
       setRUC('')
       setNombre('')
       setGerente('')
       console.log("----------------")
       console.log(Users)
       }).catch((error)=> {
         console.log(error.toString());
       });
    }

  return (
    <>
      <img
        className="mx-auto h-20 w-auto"
        src="https://lavidayeldinero.com/wp-content/uploads/2020/12/inversiones-300x300.png"
        alt="Workflow"
      />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registro del Usuario Juridico</h1>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Informacion Personal</h3>
          <br></br>
            <form action="./login" >
              <div className="shadow overflow-hidden sm:rounded-md" action="#">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <>
                      <div className="col-span-6 sm:col-span-4">
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Usuario:
                          </label>
                            <input onChange={cambioUsername}  placeholder="Ingrese su nombre de usuario" type="text" name="username" id="username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
                        </div>
                        <br></br>
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo electronico
                          </label>
                            <input onChange={cambioEmail}  placeholder="Ingrese su Email" type="email" name="email" id="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
                        </div>
                        <br></br>
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Contraseña
                          </label>
                            <input onChange={cambioPassword} placeholder="Ingrese su Password" type="password" name="password" id="password"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
                        </div>
                        <br></br>
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="RUC" className="block text-sm font-medium text-gray-700">
                            RUC:
                          </label>
                            <input onChange={cambioRUC} placeholder="Ingrese su RUC" type="text" name="RUC" id="RUC" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
                        </div>
                        <br></br>
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombres:
                          </label>
                            <input onChange={cambioNombre} placeholder="Ingrese su nombre completo" type="text" name="name" id="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
                        </div>
                        <br></br>
                        <div className="col-span-6 sm:col-span-4">
                          <label htmlFor="manager" className="block text-sm font-medium text-gray-700">
                            Gerente:
                          </label>
                            <input onChange={cambioGerente} placeholder="Ingrese el nombre del gerente" type="text" name="gerente" id="gerente" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required/>
                        </div>
                        <br></br>
                        
                        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                        <button
                          href="./login"
                          onClick={addUser}
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Registrar
                        </button>
                      </div>
                      </div>
                    </>
                      
                    
                  </div>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  )
}