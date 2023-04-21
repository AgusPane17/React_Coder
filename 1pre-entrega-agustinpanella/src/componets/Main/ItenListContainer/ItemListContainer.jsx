import React, {useState, useEffect}from 'react'
import './itemListContainer.css'
// import {CardManga} from './CardManga/CardManga'
import { useParams } from 'react-router-dom'
// import {Card, Placeholder} from 'react-bootstrap'

import {Loading} from './Loading/Loading'
import { traerMangas } from '../../../helper/pedirMangas'
import { ItemList } from './ItemList/ItemList'


export const ItemListContainer = () => {
  
  const [manga , setManga] = useState([])

  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()

useEffect(()=>{
  setLoading(true)
  traerMangas()
    .then(res =>{
      if (categoryId){
        
        setManga(res.find( manga => manga.category === Number(categoryId)))
      }
      else{
        setManga(res)
      }
    })
    .catch((error)=>console.error(error))
    .finally(()=>{
      setLoading(false)
    })
  },[categoryId])

  return (
    <div className='contenedorMangas'>
            {
              loading 
              ?
              <>
             <Loading/>
             <Loading/>
             <Loading/>
              </>
              :
              <>
              <ItemList mangas = {manga}/>
              </>
            }
    </div>
    
  )
}
