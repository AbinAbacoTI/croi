import React, {useEffect, useState} from 'react'

const ImageCategory = (props) => {
  const [ImageCategory, fetchImageCategory] = useState([])

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
    <div>
        {ImageCategory.map((item, i) => {
            if(props.id == item.project){
                return (
                    <img src={item.image} className="lg:h-72 md:h-48 w-full object-cover object-center"/>
                )
            }    
        })}
    </div>
)
}
export default ImageCategory;
