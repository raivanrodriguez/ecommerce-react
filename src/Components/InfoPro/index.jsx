import { useContext } from "react"
import { useFetch } from "../../Hooks/UseFetch"
import { AppContext } from "../../Context"
import Navbaritem from "../navbaritem"



export default function InfoPro (){
  const context = useContext(AppContext)
  let info = useFetch(`https://japceibal.github.io/emercado-api/cats_products/${context.ident}.json`)
  console.log(info.data)

  if (info.data != undefined){

    return (  
    <div>
      
    <div className="bg-white ">
    
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {info.data.products?.map((infop) => (
          <div key={infop.id}  className="group">
            <Navbaritem to="/products" onClick={() => context.setId(infop.id)}> 
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
              
                src={`${import.meta.env.BASE_URL}${infop.image}`}
                
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                
              />
             
                    
            </div>
                  
                    
            <h3 className="mt-4 text-sm text-gray-700">{infop.name}</h3>
            </Navbaritem>
            <p className="mt-1 text-lg font-medium text-gray-900">$ {infop.currency}  {infop.cost}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>)}}