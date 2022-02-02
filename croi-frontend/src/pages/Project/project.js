import React, {useEffect, useState} from 'react'
import Category from '../../components/category'
import NameCategory from '../../components/name_category'
import ImageCategory from '../../components/image_project'
import DescriptionProject from '../../components/description_project'

export default function Project() {
  const [Project, fetchProject] = useState([])
  const [filterCategory, setFilterCategory] = useState([])
  const [searching, setSearching] = useState(false)

  const getData = () => {
    fetch('http://127.0.0.1:8000/api-project/project_view')
      .then((res) => res.json())
      .then((res) => {
        fetchProject(res)
        setFilterCategory(res)
      })
  }

  var results = [{}]
  const handleSearchChangeName = (e) => {
     setSearching(true)
     console.log(e.target.value)
     results = Project.filter((project) =>
        String(project.category).toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
      )
      console.log(results)
      setFilterCategory(results)
  }

  useEffect(() => {
    getData()
  }, [])

    return (
        <section className="md:h-full flex items-center text-gray-600">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Category Project</h1>
            </div>
            <Category child={handleSearchChangeName}/>
            <div className="text-center mb-12 mt-8">
                <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">All Project</h1>
            </div>
            <div className="flex flex-wrap m-8">

                {searching 
                    ?
                    <>
                        {filterCategory.map((item, i) => {
                            return (
                                    <div className="p-4 sm:w-1/2 lg:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <ImageCategory id={item.id}/>
                                        <div className="p-6 transition duration-300 ease-in">
                                        <NameCategory  name={item.category}/> 
                                        <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
                                            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                                                <dt className="sr-only">Reviews</dt>
                                                <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                                                    <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                                                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" />
                                                    </svg>
                                                    <span key={i}>{item.state}<span className="text-slate-400 font-normal"> (128)</span></span>
                                                </dd>
                                                <dt className="sr-only">Location</dt>
                                                <dd className="flex items-center">
                                                    <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                                    <circle cx="1" cy="1" r="1" />
                                                    </svg>
                                                    <svg width="24" height="24" fill="none" stroke="currentColor" >
                                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                    </svg>
                                                    {item.address}
                                                </dd>
                                            </dl>
                                            <DescriptionProject id={item.id}/>
                                            
                                            <div className="flex items-center flex-wrap ">
                                                <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mt-4">Leer Más...</button>
                                                <span
                                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                                        </path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                    :
                    <>
                        {Project.map((item, i) => {
                            return (
                                <div className="p-4 sm:w-1/2 lg:w-1/3">
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <ImageCategory id={item.id}/>
                                        <div className="p-6 transition duration-300 ease-in">
                                        <NameCategory  name={item.category}/> 
                                        <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
                                            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                                                <dt className="sr-only">Reviews</dt>
                                                <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                                                    <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                                                    <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" />
                                                    </svg>
                                                    <span key={i}>{item.state}<span className="text-slate-400 font-normal"> (128)</span></span>
                                                </dd>
                                                <dt className="sr-only">Location</dt>
                                                <dd className="flex items-center">
                                                    <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                                    <circle cx="1" cy="1" r="1" />
                                                    </svg>
                                                    <svg width="24" height="24" fill="none" stroke="currentColor" >
                                                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                                                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                    </svg>
                                                    {item.address}
                                                </dd>
                                            </dl>
                                            <DescriptionProject id={item.id}/>
                                            <div className="flex items-center flex-wrap ">
                                                <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mt-4">Leer Más...</button>
                                                <span
                                                    className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                                        </path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        </div>
    </section>
    )
  }
  