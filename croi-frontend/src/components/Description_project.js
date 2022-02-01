/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import axios from 'axios'
import {getProjectApi} from "../services/rest/ApiProject"

const DescriptionProject = (props) => {
  const [Description, fetchDescription] = useState([])

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
        {Description.map((item, i) => {
            if(props.id == item.proyect_integer){
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
