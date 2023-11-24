import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getCouple } from "../../api/api"
import { Icon } from "@iconify/react/dist/iconify.js"

function Couple() {
  const {slug} = useParams()

  const {isLoading, data, isError} = useQuery({
    queryKey: ["couple"],
    queryFn: ()=>getCouple(slug),
  })
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

  console.log(data)
  return (
    <section className="Couple">

      <div className="Couple__grid grid grid-cols-[auto_1fr] gap-x-[10%]">
        <img src={data.image_path} alt={data.name} className="lg:w-[30vw]" />
        <div className="Couple__info">
          <h2 className="text-3xl">{data.name}</h2>
          <p><span>Status: </span>{data.category}</p>
          <p><span>Descripción: </span>{data.description}</p>
          <div className="buttons flex gap-x-4 mt-6">
            <button className="bg-blue-700 p-2 rounded-md"><Icon icon="material-symbols:edit" /></button>
            <button className="bg-red-700 p-2 rounded-md"><Icon icon="bi:trash2-fill" /></button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Couple
