import React, { useEffect, /*useState */} from "react";
//import styled from "styled-components";
//import axios from "axios";
import { RiStarSLine } from "react-icons/ri";
import { BsFillCursorFill } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import { Rightpart } from "./RightSection.styled";

const RightSection = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const { Gym, message } = useSelector((state) => state.reducer);

 // console.log(Gym);
  
  useEffect(() => {
      dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <Rightpart>
        <div className="gym">
          {message.length === 0 ? (
            Gym.map((elem, index) => {
              return (
                <div key={index} className="card">
                  <div className="card1">
                    <h2 className="heading">{elem.gym_name}</h2>
                    <p>
                      {elem.address}
                      {elem.address2}
                    </p>
                    <h3 className="fees">₹ 4000 for 3 months</h3>
                  </div>
                  <div className="card1">
                    <div className="star">
                      <RiStarSLine /> <RiStarSLine /> <RiStarSLine />{" "}
                      <RiStarSLine /> <RiStarSLine />
                    </div>
                    <div className="duration">
                      <p>
                        {" "}
                        <BsFillCursorFill className="durrate" />
                      </p>
                      <p>{elem.duration_text} away |</p>
                      <p> {elem.distance_text}</p>
                    </div>

                    <Button onClick={()=>{
                       localStorage.setItem("facilityArr",JSON.stringify(elem))
                      navigate(`${elem.user_id}`)}}  className="btn">Book now</Button>
                  </div>
                </div>
              );
            })
          ) : (
            <div>{message.message}</div>
          )}
        </div>
      </Rightpart>
    </>
  );
};

export default RightSection;

