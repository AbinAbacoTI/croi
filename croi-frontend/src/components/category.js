import React, {useEffect, useState} from 'react'

export default function Category(props) {
  const [Category, fetchCategory] = useState([])
  /*Se pasa las props para poder mandar infromacion de esta vista a la principal*/
  const { child } = props
  /*Se obtine la data de la api categorias*/
  const getData = () => {
  fetch('http://127.0.0.1:8000/api-project/category_view/')
    .then((res) => res.json())
    .then((res) => {
      fetchCategory(res)
      console.log(res)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex flex-wrap m-2 text-center">
        {/*Se mapea los datos de la api de categoria para poder mostrar los datos*/}
        {Category.map((item, i) => {
            return (
            <div className="p-2 w-1/2 lg:w-1/4 font-medium">
                <div className="h-16 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden py-4">
                  {/*Mediante el onClick llamamos a la props child que hace referencia a la funcion handleSearchChangeName y 
                     se encarga de pasar el value que es el id, de esta vista a la principal que es project*/}
                  <button  type="submit" key={i}  onClick={child} value={item.id}>{item.name_category}</button>
                </div>
            </div>
            )
        })}
    </div>
  )
}
  