import styled from "styled-components";

 export const Search=styled.div`
width:80%;
margin: auto;
background-color: black;

.main{
  display:flex;

  border: 1.4px solid white;
  padding: 10px ;
  border-radius: 10px;

}
.input{
  background-color: black;
  width:80%;
 
  font-weight: 500;
  border:none;
  font-size: 18px;
  outline-width:0;
  color:white;
}
.input:hover{
  color:white;
  border:none;
  outline-width:0;
}
.sear{
  margin-top: 10px;
  margin-right: 15px;
}
.location{
  font-size: 30px;
  padding: 4px;
  border-radius: 5px;
  background-color:#920909 ;
}
.btn{
  border-radius: 5px;
  background-color: #920909;
  padding:0px 10px;
  font-size: 20px;
 
  margin-bottom: 5px;
}

`