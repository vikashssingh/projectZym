import React from 'react'
import Searchbox from './Searchbox';
//import styled from "styled-components"
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { Wrapper } from './Middle.styled';




const MiddleSection = () => {
  return (
    <>
   <Wrapper>
   <Searchbox/>
<div className='top_down'>
  <LeftSection/>
  <RightSection/>
</div>
   </Wrapper>
   
  
  
    
    </>
  )
}

export default MiddleSection