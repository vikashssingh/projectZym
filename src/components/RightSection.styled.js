import styled from "styled-components";

 export const Rightpart = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  overflow-y: scroll;
  width: 70%;

  .card {
    width: 100%;

    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: #2e2e2e;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .scrollable-element {
    scrollbar-color: red;
  }
  .star {
    display: flex;
    color: #920909;
    margin-bottom: 10px;
  }
  .duration {
    display: flex;
    margin-bottom: 10px;
  }
  .heading {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .card1 {
    margin-bottom: 20px;
    margin-right: 15px;
    margin-left: 15px;
  }
  .fees {
    color: yellow;
  }
  .durrate {
    color: green;
  }
  .btn {
    z-index: 0;
    color: white;
    background-color: #920909;
  }
::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff002e;
    border-radius: 10px;
  }
`;