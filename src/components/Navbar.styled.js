import styled from "styled-components";

 export const Navigate = styled.div`
 width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  .navb {
   background-color:#0D0D0D;
   display: flex;
    height: 65px;
    align-items: center;
   
    width: 100%;

    color: white;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 10;
  }

  .navb1 {
    display: flex;
    height: 65px;
    align-items: center;
   
    width: 100%;

    color: white;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 10;
    background-color:transparent;
  }

  

  .btn {
    color: white;
    background-color: #920909;
  }

  .link {
    font-size: 20px;

    list-style: none;
    text-decoration: none;
  }
  .link:hover {
    color:white;
    cursor: pointer;
  }

  .logo{
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    
}
.logo>img{
    width: 80%;
}
`;