import dato from "../Mocks/pro.json"

export function useInfoDos(){

   

    const info = dato.images
    const mappedinfo = info?.map ( infop => ({
       
        img :infop
        
    }))

    return {info: mappedinfo}
}