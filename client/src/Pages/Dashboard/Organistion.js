import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Shared/Layout/Layout'
import moment from 'moment';
import API from '../../services/API';
import "../Home.css";
const Organistion = () => {
    const [data, setData] = useState([]);

    const getOrg = async () => {
      try {
        const { data } = await API.get("/inventory/get-organisation");
        if (data?.success) {
          setData(data?.organisations);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
        getOrg();
    }, []);
    return (
      <Layout>
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
                  <td>{record.organisationName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.address}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    );
}

export default Organistion
