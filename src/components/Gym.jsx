import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logo from '../assets/logo1.png'
import { MdLocationOn} from "react-icons/md";
import styles from './Gym.module.css';
//import styled from "styled-components";
import { Wrapper } from "./Gym.styled";

const Gym = () => {
  const { terms } = useSelector((state) => state.reducer);
 
  const { user_id } = useParams();
 
  const facilityArr = JSON.parse(localStorage.getItem("facilityArr")) || [];


  const [plan, setPlan] = useState([]);
  const [benefit, SetBenefit] = useState([]);
  
  const postData = () => {
    axios
      .post(`https://devapi.wtfup.me/gym/plan`, { gym_id: user_id })
      .then(({ data }) => {
        console.log(data.data);
        setPlan(data.data);
      });
  };
  
console.log(plan)
  useEffect(() => {
    postData();
    SetBenefit(facilityArr.benefits);
  }, []);

  return (
    <>
   <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <p className={styles.heading1}>{facilityArr.gym_name}</p>
            <div className={styles.logo}>
              <MdLocationOn fontSize={25} />
              <p className={styles.heading2}>
                {" "}
                {facilityArr.address1},{facilityArr.address2},{facilityArr.city}{" "}
              </p>
            </div>
          </div>
          <div className={styles.ratings}>
            <p>★ ★ ★ ★ ★</p>
            <p>{facilityArr.rating} Ratings</p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <div>
            <p className={styles.head2A}>Description</p>
            <p className={styles.head3}>{facilityArr.description}</p>
          </div>
          <div>
            <p className={styles.head2A} >Facilities</p>
            <div className={styles.faci}> { benefit && benefit.map((el,index) => (
              <p key={index}>{el.name}</p>
            ))}</div>
           
          </div>
          <div>
            <p className={styles.head2A}>Why to choose WTF?</p>
             <div className={styles.cardcon}>
              { terms && terms.map((el, ind)=>(
                 <div className={styles.card} key={ind}>
                 {el.icon && <img  className={styles.icon} src={el.icon} alt={"not shown"} />}
                 {el.name && <p className={styles.head4}>{el.name}</p>}
                  
                </div> 
              ))}
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.member}>Choose Membership</h3>
          {plan && plan.map((el,ind)=>(
            <Wrapper>
               <div className={`plan${ind+1}`}  key={ind}>
              <p className={"planhead"}>Plan {ind + 1}</p>
              <div className={"logo"}>
                <img src={logo} className={"logon"} alt="logo" /><span className={`name${ind+1}`}>{el.plan_name}</span>
                <button className={`btn${ind+1}`}>₹ {el.plan_price}</button>
              </div>
             
              <p className={"lwst"}>{el.description}</p>
             
              
            </div>
          </Wrapper>
          ))}
        </div>
      </div>
      
      </div>
    </>
  );
};

export default Gym;

