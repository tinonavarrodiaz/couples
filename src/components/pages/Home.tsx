import { useQuery } from "@tanstack/react-query"
import { getCouples } from "../../api/api"
import { useEffect, useState } from "react"
import { Couple } from "../../types/types"
import { Icon } from '@iconify/react';
import ModalAdd from "../organism/ModalAdd";
import { Link } from "react-router-dom";


function Home() {
  const {isLoading, data, isError} = useQuery({
    queryKey: ["couples"],
    queryFn: getCouples,
  })

  const [couples, setCouples] = useState(data)

  useEffect(()=>{
    setCouples(data)
  },[data])

  const openModal = ()=>{
    const dialog = document.getElementById("favDialog") as HTMLDialogElement
    dialog.showModal()

  }

  const dataAdd = (data:any)=>{
    setCouples(data)
  }


  if(isLoading) return (
    <section className="section Home">
      <h2>Cargando...</h2>
    </section>
  )

  if(isError) return (
    <section className="section Home">
      <h2>Ha ocurrido un error, vuelva a intentarlo mas tarde.</h2>
    </section>
  )



  return (
    <>
      <ModalAdd fun={dataAdd}/>
      <div className="flex justify-end mb-7">
        <button className="p-2 px-4 bg-slate-800 dark:bg-slate-300 rounded text-slate-200 dark:text-slate-950 flex items-center hover:bg-slate-950 hover:dark:bg-slate-950 hover:dark:text-slate-200 transition duration-300" onClick={openModal}>
          <Icon icon="mdi:plus" className="mr-1" />
          Agregar Nuevo
        </button>
      </div>
      <section className="section Home grid grid-cols-[repeat(auto-fit,_minmax(min(150px,_100%),_200px))] gap-x-[7.5%] gap-y-[2em]">
        {
          couples?.data?.map((couple:Couple, index:number)=>(
            <Link to={`/couple/${couple.slug}`} key={index}>
              <div  className="couple">
                <img src={couple.image_path} alt={couple.name} className="aspect-[1/1.25] object-cover object-top rounded-lg" />
                <h2 className="mt-2 text-center">{couple.name}</h2>
              </div>
            </Link>
          ))
        }
      </section>
    </>
  )
}

export default Home
