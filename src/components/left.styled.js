import styled from "styled-components";

 export const Search = styled.div`
  width: 60%;

  .main {
    display: flex;
    margin-top: 15px;
    border: 1.4px solid #a9a6a6;
    padding: 10px;
    border-radius: 5px;
    background-color: #2e2e2e;
    margin-bottom: 30px;
  }
  .input {
    background-color: #2e2e2e;
    width: 80%;
    font-weight: 500;
    border: none;
    font-size: 18px;
    outline-width: 0;
    color: #a9a6a6;
  }
  .input:hover {
    /* color:white;
  border:none; */
    outline-width: 0;
  }
  .sear {
    color: #a9a6a6;
    margin-top: 7px;
    margin-right: 15px;
  }
  .location {
    font-size: 30px;
    padding: 4px;
    border-radius: 5px;
    background-color: #920909;
  }
  .btn {
    border-radius: 5px;
    background-color: #920909;
    padding: 0px 10px;
    font-size: 20px;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;
 export const LeftSide = styled.div`
  margin-top: 50px;
  width: 30%;

  .heading {
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: 400;
  }
  .subheading {
    font-size: 20px;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .inputbox {
    border-radius: 5px;
    background-color: #2e2e2e;
    width: 20%;
    padding: 10px;
    font-weight: 500;
    border: none;
    font-size: 18px;
    outline-width: 0;
    color: #a9a6a6;
    border: 1.4px solid #a9a6a6;
    text-align: center;
  }
  .inputbox1 {
    border-radius: 5px;
    background-color: #2e2e2e;
    width: 20%;
    padding: 10px;
    font-weight: 500;
    border: none;
    font-size: 18px;
    outline-width: 0;
    color: #a9a6a6;
    border: 1.4px solid #a9a6a6;
    text-align: center;
    margin-left: 10px;
  }
  .price {
    display: flex;
  }
  .select {
    border-radius: 2px;
    background-color: #2e2e2e;
    width: 70%;
    padding: 12px 5px;
    border: 1.4px solid #a9a6a6;
  }

  .select:hover {
    background-color: #2e2e2e !important;
  }
  .select {
    option {
      padding: 12px 5px;
    }
  }
`;