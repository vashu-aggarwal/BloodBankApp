import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Shared/Layout/Layout';
import { useSelector } from 'react-redux';
import API from '../../services/API';

const Donation = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    const getDonars = async () => {
      try {
        const { data } = await API.post("/inventory/get-inventory-hospital", {
          filters: {
            inventoryType: "in",
            donar: user?._id,
          },
        });
        //   console.log(data);
        if (data?.success) {
          setData(data?.inventory);
          console.log(data);
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
                  <th>Blood Group</th>
                  <th>Inventory Type</th>
                  <th>Quantity(ML)</th>
                  <th>Email</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity}</td>
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
      </Layout>
    );
}

export default Donation
