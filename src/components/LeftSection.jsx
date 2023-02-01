//import { Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
//import { MdLocationPin } from "react-icons/md";
import { useDispatch, /*useSelector*/ } from "react-redux";
//import styled from "styled-components";
import { filterbycity } from "../Redux/actions";
import { LeftSide, Search } from "./left.styled";


const LeftSection = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
   useEffect(() => {
     dispatch(filterbycity(filter));

   }, [dispatch, filter]);

  useEffect(() => {
    axios
      .get(`https://devapi.wtfup.me/gym/places`)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);
  

  
 
  return (
    <>
      <LeftSide>
        <div className="heading">
          <h2>Filters</h2>
        </div>
        <div>
          <div>
            <h5 className="subheading">Location</h5>

            <Search>
              <div className="main">
                <GoSearch className="sear" />
                <input className="input" placeholder="Enter Location" />
              </div>
            </Search>
          </div>
        </div>
        <div>
          <h5 className="subheading">Price</h5>
          <div className="price">
            <input className="inputbox" placeholder="Min" />
            <input className="inputbox1" placeholder="Max" />
          </div>
        </div>
        <div>
          <h5 className="subheading">Cities</h5>
          <select className="select"  onChange={(e) => setFilter(e.target.value)}>
            <option>Select City</option>
            {data.map((el, ind) => {
              return <option key={ind}>{el.city}</option>;
            })}
          </select>
        </div>
      </LeftSide>
    </>
  );
};

export default LeftSection;
