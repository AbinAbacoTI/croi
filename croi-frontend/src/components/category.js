import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import axios from 'axios'
import {getProjectApi} from "../services/rest/ApiProject"


export default function Category() {
    const [Category, fetchCategory] = useState([])

  const getData = () => {
    fetch('http://127.0.0.1:8000/api-project/category_view/')
      .then((res) => res.json())
      .then((res) => {
        fetchCategory(res)
        console.log(res)
      })
  }

  //const { button } = this.props


  useEffect(() => {
    getData()
  }, [])

    return (


            <div className="flex flex-wrap m-2 text-center">
                {Category.map((item, i) => {
                    return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="p-2 w-1/2 lg:w-1/4">
                        <div className="h-16 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden py-4 hover:bg-indigo-700 hover:text-white font-medium">
                            <button type="submit" key={i}  >{item.name_category}</button>
                        </div>
                    </div>
                    )
                })}
            </div>



        
    )
  }
  