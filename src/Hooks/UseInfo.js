
import  resInfo from "../Mocks/product-info.json"



export function useInfo(){
    
     
    const info = resInfo.products
    const mappedinfo = info?.map ( infop => ({
        id : infop.id,
        title : infop.name,
        img :infop.image,
        price :infop.cost,
        currency: infop.currency
        
    }))

    return {info: mappedinfo}
}