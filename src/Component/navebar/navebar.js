import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./nav.css"
import {languageContext} from '../../contexts/language'
import React, { useContext } from 'react';
const Navebar = () => {
 var {language,setLanguage}=   useContext(languageContext)
const togelLang = ()=>{
  if(language === "en"){
    setLanguage("ar")
  } else{
    setLanguage("en")
  }
}
    return (
        <>
            <Navbar bg="dark" variant="dark">
        <Container style={{marginLeft:0}}>
          <Nav className="me-auto">
            <NavLink className="navlik" to={"/movies"}>Home</NavLink>
            <NavLink className="navlik" to={"/fav"}>Favorits</NavLink>
            <Nav.Link to={"/fav"}>Pricing</Nav.Link>
          </Nav>
        </Container>
        <button onClick={()=>{togelLang()}} className="btn btn-primary p-2 m-1" >{language}</button>
      </Navbar>
        </>
    )
}
export default Navebar
