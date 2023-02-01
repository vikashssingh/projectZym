import React from 'react'
import styled from 'styled-components'
import Banner from '../assets/banner.png'
const TopSection = () => {
    const Top=styled.div`
   margin: auto;
    width:100%;
   
    `
  return (
    <>
    <Top>
    <img src={Banner} alt="no show"/> 
    </Top>
  
    </>
  )
}

export default TopSection