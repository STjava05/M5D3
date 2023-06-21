import React,{useState} from 'react';
 import './App.css';
import NavBar from './components/NavBar';

import Category from './components/category/Category';



function App() {
  const [book,setBook]=useState("")
  const [search,setSearch]=useState("")
  
  
  return (
    <>
    <NavBar setBook={setBook} setSearch={setSearch} /> 

    
   
    <Category livre={book} search ={search}   />
    
    
   
    </>
  );
}

export default App;
