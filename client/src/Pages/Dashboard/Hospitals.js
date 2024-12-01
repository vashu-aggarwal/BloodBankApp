import React, { useState, useEffect } from "react";
import Layout from "../../Components/Shared/Layout/Layout";
import moment from "moment";
import API from "../../services/API";
import "../Home.css";
const Hospitals = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const { data } = await API.get("/inventory/get-hospitals");
      if (data?.success) {
        setData(data?.hospitals);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div className="container">
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr className="custom-header">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.hospitalName}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default Hospitals;
