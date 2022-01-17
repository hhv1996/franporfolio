import React, { useState , useEffect} from 'react'
import JobList from '../JobList/JobList'
function getItems(){
    return new Promise((resolve, reject) =>{
     const object = [
       {
        id:'1',
        title:'Morticia Addams',
        from: 'Los Locos Addmas',
        description:'Cosplay de los locos Addams',
        img:'./img/1.jpeg'
       },
       {
        id:'2',
        title:'Emily',
        from: 'El cadaver de la novia',
        description:'Cosplay de Emily de la pelicula el cadaver de la novia',
        img:'./img/2.jpeg'
       },
       {
        id:'3',
        title:'Marciana',
        from: 'Marcianos al ataque',
        description:'Cosplay de Emily de la pelicula Marcianos al ataque',
        img:'./img/3.jpeg'
       },
       {
       id:'4',
       title:'Hiedra venenosa',
       from: 'Batman y Robin 1997',
       description:'Cosplay de Hiedra venenosa de la pelicula Batman y Robin 1997',
       img:'./img/4.jpeg'
      },
      {
        id:'5',
        title:'Morticia Addams',
        from: 'Los Locos Addmas',
        description:'Cosplay de los locos Addams',
        img:'./img/5.jpeg'
       },
       {
        id:'6',
        title:'Emily',
        from: 'El cadaver de la novia',
        description:'Cosplay de Emily de la pelicula el cadaver de la novia',
        img:'./img/6.jpeg'
       },
       {
        id:'7',
        title:'Marciana',
        from: 'Marcianos al ataque',
        description:'Cosplay de Emily de la pelicula Marcianos al ataque',
        img:'./img/7.jpeg'
       },
       {
       id:'8',
       title:'Hiedra venenosa',
       from: 'Batman y Robin 1997',
       description:'Cosplay de Hiedra venenosa de la pelicula Batman y Robin 1997',
       img:'./img/8.jpeg'
      }
     ]
        setTimeout(() => resolve(object), 3000 )
  
    })
  }

const JobsListContainer = () => {
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
      const list = getItems()
  
      list.then(response => {
        setListProduct(response)
      })
    }, [])
    return (
      listProduct.length!==0?<JobList jobs ={listProduct}/>: <div></div> 
    )
}

export default JobsListContainer
