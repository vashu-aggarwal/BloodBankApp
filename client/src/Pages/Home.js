import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import Spinners from "../Components/Shared/Spinners";
import Layout from "../Components/Shared/Layout/Layout";
import "./Home.css";
import Model from "../Components/Shared/model/Model";
import API from "../services/API";
const Home = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const [data,setData]=useState([]);

  const getBloodRecord= async()=>{
    try {
      const {data}=await API.get('/inventory/get-inventory')
      if(data?.success){
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getBloodRecord();
  },[])
  return (
    <Layout>
      {error && <span>alert(error)</span>}
      {loading ? (
        <Spinners />
      ) : (
        <>
          <h4
            className="ms-4"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{cursor: "pointer"}}
          >
            <i className="fa-solid fa-plus text-success py-4"></i>
            Add Inventory
          </h4>
          <Model/>
        </>
      )}
    </Layout>
  );
};

export default Home;
