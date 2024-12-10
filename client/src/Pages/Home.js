import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinners from "../Components/Shared/Spinners";
import Layout from "../Components/Shared/Layout/Layout";
import "./Home.css";
import Model from "../Components/Shared/model/Model";
import API from "../services/API";
import moment from "moment";
const Home = () => {
  const { loading, error,user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const getBloodRecord = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
        // console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBloodRecord();
  }, []);
  return (
    <Layout>
      {user?.role==='admin' && navigate('/admin')}
      {error && <span>alert(error)</span>}
      {loading ? (
        <Spinners />
      ) : (
        <>
          <div className="container">
            <h4
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h4>

            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr className="custom-header">
                    <th>Blood Group</th>
                    <th>Inventory Type</th>
                    <th>Quantity</th>
                    <th>Donor Email</th>
                    <th>Time & Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((record) => (
                    <tr key={record._id}>
                      <td>{record.bloodGroup}</td>
                      <td>{record.inventoryType}</td>
                      <td>{record.quantity} (ML)</td>
                      <td>{record.email}</td>
                      <td>
                        {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Model />
        </>
      )}
    </Layout>
  );
};

export default Home;
