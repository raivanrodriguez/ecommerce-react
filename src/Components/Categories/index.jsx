import { useFetch } from "../../Hooks/UseFetch"
import { useContext } from "react"
import { AppContext } from "../../Context"
import Navbaritem from "../navbaritem"

const inf = { name: 'InfoPro', path: '/infopro' }

  
  export default function Categories() {
    const category = useFetch('https://japceibal.github.io/emercado-api/cats/cat.json')
    const context = useContext(AppContext)
    
    
   
    return (
        
            
       
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
  
            <div className=" mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {category.data?.map((callout) => (
               <Navbaritem
    to="/infopro"
    onClick={() => context.setIdent(callout.id)}
>

    <div className="group relative cursor-pointer">

        <div className=" relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">

            <img
                src={`${import.meta.env.BASE_URL}${callout.imgSrc}`}
                className="h-full w-full object-cover object-center hover-zoom"
            />

        </div>

        <h3 className="mt-6 text-sm text-gray-500">
            {callout.name}
        </h3>

        <p className="mb-5 text-base font-semibold text-gray-900">
            {callout.description}
        </p>

    </div>

</Navbaritem>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      
    )
  }