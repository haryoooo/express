import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import HomepageComponent from "../components/HomepageComponent";
import { fetchDatas } from "../store/action/dataAction";
import "./Homepage.css";

export default function Homepage() {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDatas())
  }, []);

  if(isLoading){
    return(
      <div className="Homepage">Loading...</div>
    )
  }

  return (
    <>
    <h1 style={{textAlign: 'center', marginTop: 50}}>Data Users</h1>
    <div className="Homepage">
      {data.map((value,id) => {
        return ( 
        <HomepageComponent 
            key={id}
            id={value._id}
            name={value.nama}
            usia={value.usia}
        />)
      })}
    </div>
    </>
  );
}
