import React, { useEffect, useState } from 'react'
//import { /*Button,*/ Flex, Grid, Input } from '@chakra-ui/react'
//import styled from 'styled-components';
import {GoSearch} from 'react-icons/go'
import {MdLocationPin} from 'react-icons/md'
//import { useSelector } from 'react-redux';
//import axios from 'axios';
import { Search } from './Search.styled';



const Searchbox = () => {
  const [Input,Setinput]=useState("")
  //const {Gym}=useSelector((state)=>state.reducer);
 /* 
const handleclick=(e)=>{
e.preventDefault();


}
*/

console.log(Input)
useEffect(()=>{
  
},[])

  return (
    <>
    <Search>
     
      <form>
      <div className='main'>
    <GoSearch className='sear'/>
    <input className='input' value={Input} onChange={(e)=>Setinput(e.target.value)} placeholder='Search gym name here...'/>
   
    <MdLocationPin className='location'/>
    <button className='btn'>Clear</button>
    </div>
    </form>
   
    </Search>
    
    
    </>
  )
}

export default Searchbox