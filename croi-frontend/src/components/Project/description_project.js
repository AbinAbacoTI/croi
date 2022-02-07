import React, {useEffect, useState} from 'react'

const DescriptionProject = (props) => {
  const [Description, fetchDescription] = useState([])
  /*Se pasa las props para poder mandar infromacion de esta vista a la principal*/
  const { id } = props
  /*Se obtine la data de la api request*/
  const getData = () => {
    fetch('http://127.0.0.1:8000/api-project/request_view/')
      .then((res) => res.json())
      .then((res) => {
        fetchDescription(res)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
  <div>
    {/*Se mapea los datos de la api de request para poder mostrar los datos*/}
      {Description.map((item, i) => {
        /*Se valida que si la props id(hace referencia al campo id de la api project) que se manda es igual al campo 
          project_integer(representa el FK de la api request) y se mostrara esta infromacion, de esta forma se relacion
          las dos api para mostrar la descripcion unica de cada uno de los proyectos y no sea la descripcion de cualquier otro proyecto*/
          if(id == item.proyect_integer){
              return (
                  <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 line-clamp-4">
                      {item.description}
                  </p>
              )
          }    
      })}
  </div>
)
}
export default DescriptionProject;
