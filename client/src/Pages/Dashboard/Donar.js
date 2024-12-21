import React, { useState, useEffect } from "react";
import Layout from "../../Components/Shared/Layout/Layout";
import API from "../../services/API";
import moment from "moment";
import "../Home.css";
const Donar = () => {
  const [data, setData] = useState([]);

  const getDonars = async () => {
    try {
      const { data } = await API.get("/inventory/get-donars");
      
      if (data?.success) {
        setData(data?.donars);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
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
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.name || record.organisationName + " (ORG)"}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>
                    {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Donar;
