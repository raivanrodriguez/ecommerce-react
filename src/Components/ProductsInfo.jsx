export function ProductsInfo ({}){
    return (  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {info.map((infop) => (
          <a key={infop.id}  className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={infop.img}
                
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div>
              <p className="mt-1 text-lg font-medium text-gray-900">$ {infop.price}</p>
            </div>
            
            
            
          </a>
          
        ))}
      </div>
    </div>
  </div>)

    

}


