import React, { useEffect, useState } from "react";
import axiosInstance from "../../axioxsConfig/instance";
import MovieItem from "./movie_item";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from 'react-redux';
import PopularMovies from '../../store/actions/popular'
const Movies = () => {
  const [moviesList, setMovies] = useState([]);
  var [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const movies= useSelector((state)=>state.movies.movies)
  const dispatch= useDispatch()
  console.log(movies)
  useEffect(() => {
    // axiosInstance
    //   .get("/movie/popular")
    //   .then((res) => {
    //     console.log(res.data.results);
    //     setMovies(res.data.results);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(PopularMovies(page))
    //console.log(movies)
    setMovies(movies)
  }, [page]);
  
  const getPageData = () =>{
    axiosInstance
      .get(`/movie/popular?page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // useEffect(() => {
  //   getPageData() 
  // }, [page]);

  useEffect(() => {
    console.log(search);
    
      if(search.length === 0){
        getPageData()
      }else{
        axiosInstance.get(`/search/movie?query=${search}`)
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
      }
  }, [search]);

  var Next = () => {
    // if (page <= moviesList.length) {
      page++;
      setPage(page);
    // }
  };
  var prev = () => {
    if (page > 1) {
      page--;
      setPage(page);
    }
  };

  return (
    <>
      <Form.Control type="text" className="mt-3 mb-3 w-50 m-auto" value={search} onChange={(e)=>{setSearch(e.target.value)}}  />
      <div className="row">
        {moviesList.map((item, index) => {
          return <MovieItem key={index} item={item} mlist ={moviesList} />;
       })}
      </div>
      <div className="mb-4" style={{ textAlign: "center" }}>
        <Button
          variant="success"
          onClick={() => {
            prev();
          }}
          className="m-1"
        >
          Prev
        </Button>
        <span>{page}</span>
        <Button
          variant="success"
          onClick={() => {
            Next();
          }}
        >
          Next
        </Button>
      </div>
    </>
  );
};
export default Movies;
