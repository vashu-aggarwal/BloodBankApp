import React from "react";
import { useSelector } from "react-redux";
import Spinners from "../Components/Shared/Spinners";
import Layout from "../Components/Shared/Layout/Layout";
const Home = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && <span>alert(error)</span>}
      {loading ? (
        <Spinners />
      ) : (
        <div>
          <h1>Home page</h1>
        </div>
      )}
    </Layout>
  );
};

export default Home;
