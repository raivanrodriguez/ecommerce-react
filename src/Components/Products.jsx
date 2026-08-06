
import { StarIcon } from '@heroicons/react/20/solid'
import { useFetch } from "../Hooks/UseFetch";
import { useState } from 'react';
import { AppContext } from "../Context";
import { useContext } from "react";
import Navbaritem from "./navbaritem";
import { Link } from 'react-router-dom';
import { useEffect } from "react";





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const reviews = { href: '#', average: 4, totalCount: 117 }
const put = []

function promedio(x){
  const initialValue = 0;
   const divisor = x.length + 0.25
const total = x.reduce(
  (accumulator, currentValue) => accumulator + currentValue / divisor ,
  initialValue,
  
);

return total
}



  


  

 export default function Products(){

  const context = useContext(AppContext);
  const [item, setItem] = useState(null)

  

  
  
  

  const producto = `https://japceibal.github.io/emercado-api/products/${context.id}.json`
 

  
   
  

  

    
    
    const product = useFetch(producto)
    const coments = useFetch(`https://japceibal.github.io/emercado-api/products_comments/${context.id}.json`)

    
const handleAddToCart = (event) => {
    event.stopPropagation();

    const exist = context.shoppingCart.find(
        item => item.id === product.data.id
    );

    if (exist) {

        context.setShoppingCart(

            context.shoppingCart.map(item =>

                item.id === product.data.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item

            )

        );

    } else {

        context.setShoppingCart([
            ...context.shoppingCart,
            {
                ...product.data,
                quantity: 1
            }
        ]);

    }

    context.setCounter(context.counter + 1);
}

   
    
 
  
    const idem = context.id
    useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "auto", 
    });
}, [context.id]);
    
    if (product.data.images != undefined && coments.data != undefined) {
     
      const map1 = coments.data.map((x) => x.score);
    
      
    
    console.log(item)
  
    
   
    
    return (

     
      
      <div className="bg-white pt-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            
              <li key={product.data.id}>
                <div className="flex items-center">
                  <a  className="mr-2 text-sm font-medium text-gray-900">
                    {product.data.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            
            <li className="text-sm">
              <a  aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.data.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.data.images[0]}
              
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.data.images[1]}
                
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.data.images[2]}
                
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.data.images[3]}
              
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.data.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.data.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                      promedio(map1)> rating ? 'text-yellow-500' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
             
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {coments.data.length} reviews
                </a>
              </div>
            </div>

            
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <div  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </div>
                </div>

               
              </div>

              <button
                
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(event) => handleAddToCart(event, product.data)}
              >
                Add to bag
              </button>
            
          </div>
          <h1>{idem}</h1>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.data.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                 
                    <li className="text-gray-400">
                      <span className="text-gray-600">highlight</span>
                    </li>
                  
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Price</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.data.currency} {product.data.cost}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-6  rounded-lg mt-6 bg-gray-100 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8">
      <ul role="list" className="divide-y divide-gray-100">
      {coments.data?.map((person) => (
        <li key={person.user} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.user}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.description}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.user}</p>
          <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                       person.score> rating ? 'text-yellow-500' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
            
          </div>
            {person.dateTime ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.dateTime}>{person.dateTime}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-end gap-x-1.5 lg:items-end">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    </div>
      <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Related Products</h2>

          <div className="mt-10 space-y-4 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:space-y-0">
            {product.data.relatedProducts?.map((callout) => (
              <div key={callout.id} className="group relative">
                
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-2 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.image}
                    
                    className="h-full w-full object-cover object-center"
                  />
                  <span className="absolute inset-0" />
                    {callout.name}
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                 
                   
                  
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.name}</p>
                
                
                <Link to='/products'  onClick={() => context.setId(callout.id)
                }
              >
                ver producto
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>)}
 }