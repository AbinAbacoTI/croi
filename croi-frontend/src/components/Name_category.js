import React, {useEffect, useState} from 'react'

const NameCategory = (props) => {
  const [CategoryName, fetchCategoryName] = useState([])
  /*Se pasa las props para poder mandar infromacion de esta vista a la principal*/
  const { name } = props
  /*Se obtine la data de la api category con un id especifico que se obtiene de la vista 
    principal que hacer referencia al campo category de la api project*/
  const getData = () => {
    fetch(`http://127.0.0.1:8000/api-project/category_view/${name}`)
      .then((res) => res.json())
      .then((res) => {
        fetchCategoryName(res)
        console.log(res)
        console.log(res.name_category)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
            <h2 className="text-base font-medium text-indigo-300 mb-1">{CategoryName.name_category}</h2>
    </div>
  )
}
export default NameCategory;

  
