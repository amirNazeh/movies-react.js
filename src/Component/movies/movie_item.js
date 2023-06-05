import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import favoritechange from '../../store/actions/favorit'
const MovieItem=({item})=>{
  const dispatch= useDispatch()
  const fav= useSelector((state)=>state.fav.fav)
  const favId = useSelector((state)=>state.fav.fav.map((f)=>f.id))
     const navigate = useNavigate()

    const goToDetails=(id)=>{
        navigate(`/details/${id}`)
     }
      
    function addfav (obj) {
      dispatch(favoritechange([ ...fav, obj]))
   console.log(fav);
     }

     const deleteFav2 =(id)=>{
      const list = fav.filter(f => f.id !== id)
      dispatch(favoritechange(list))
      
     }
     function hanedlAddDelete(item){
      console.log("t")
      //console.log("mlist",mlist)
      console.log("fav",fav)
       //mlist.map((e)=>{ 
       var x = favId.includes(item.id)
       if(x){
         deleteFav2(item.id)
       }else{
         addfav(item)
       }
     }

    return(
      
    <div className="col-3 cart" >
        
      <div className='' onClick={()=>{goToDetails(item.id)}}>
      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="p"
      className='img-fluid rounded'
      />
      
      <h6>{item.title}</h6>
      <i class="bi bi-heart"></i>
      <p className='mb-0'>{item.release_date}</p>
      
      </div>
      
     <div className='text-end mb-2'>
       <a onClick={()=>hanedlAddDelete(item)}>
         <i className={favId.includes(item.id)?"fa-solid fa-star" :"fa-regular fa-star"}></i></a>
         </div>
      

       </div>
       
    
    
    )
}
export default MovieItem