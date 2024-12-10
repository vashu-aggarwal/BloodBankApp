import React, { useState, useEffect } from "react";
import Header from "../../Components/Shared/Layout/Header";
import API from "../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const colors = [
    "#F4D3CF", // Light Pink
    "#FFE5B9", // Light Peach
    "#FFF8CD", // Light Yellow
    "#D4E4FF", // Light Blue
    "#E4E3FF", // Light Lavender
    "#B9FBC0", // Light Mint
    "#FFD6E0", // Light Rose
    "#CDE4E3", // Light Teal
  ]; 
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
        // console.log(data?.bloodGroupData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBloodGroupData();
  }, []);
  
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodRecords();
  }, []);
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data?.map((record, i) => (
          <div
            key={i}
            style={{
              width: "18rem",
              margin: "1rem",
              padding: "0.5rem",
              backgroundColor: colors[i],
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ padding: "1rem" }}>
              <h1
                style={{
                  backgroundColor: "#f8f9fa",
                  color: "#343a40",
                  textAlign: "center",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  borderRadius: "4px",
                }}
              >
                {record.bloodGroup}
              </h1>
              <p style={{ marginBottom: "0.5rem"}}>
                Total In: <b>{record.totalIn}</b> (ML)
              </p>
              <p style={{ marginBottom: "0.5rem" }}>
                Total Out: <b>{record.totalOut}</b> (ML)
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#343a40",
                color: "#ffffff",
                textAlign: "center",
                padding: "0.5rem",
                borderRadius: "0 0 8px 8px",
              }}
            >
              Total Available: <b>{record.availableBlood}</b> (ML)
            </div>
          </div>
        ))}
      </div>

      <div className="container my-3">
        <h1 className="my-3">Recent Blood Transactions</h1>
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donar Email</th>
              <th scope="col">TIme & Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity}</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
