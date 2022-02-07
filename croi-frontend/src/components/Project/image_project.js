import React, {useEffect, useState} from 'react'

const ImageCategory = (props) => {
  const [ImageCategory, fetchImageCategory] = useState([])
  /*Se pasa las props para poder mandar infromacion de esta vista a la principal*/
  const { id } = props
  /*Se obtine la data de la api media*/
  const getData = () => {
    fetch('http://127.0.0.1:8000/api-project/media_view')
      .then((res) => res.json())
      .then((res) => {
        fetchImageCategory(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
        {/*Se mapea los datos de la api de media para poder mostrar los datos*/}  
        {ImageCategory.map((item, i) => {
          /*Se valida que si la props id(hace referencia al campo id de la api project) que se manda es igual al campo 
            project(representa el FK de la api media) del request se mostrara esta infromacion y de esta forma se relacion
            las dos apis para mostrar la imagen unica de cada uno de los proyectos y no sea la imagen de cualquier otro proyecto*/
            if(id == item.project){
                return (
                    <img src={item.image} className="lg:h-72 md:h-48 w-full object-cover object-center"/>
                )
            }    
        })}
    </>
)
}
export default ImageCategory;
