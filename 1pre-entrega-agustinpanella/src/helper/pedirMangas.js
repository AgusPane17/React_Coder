import {stock} from '../data/stock'

export const traerMangas =() =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(stock)
            reject('Error al obtener stock')
        },1000)
    })
}