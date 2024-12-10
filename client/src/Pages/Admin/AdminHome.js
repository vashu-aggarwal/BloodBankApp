import React from "react";
import Layout from "../../Components/Shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            The Manage Blood Bank App is a powerful and innovative tool designed
            to revolutionize the way blood banks operate. In today’s fast-paced
            healthcare environment, managing blood inventory efficiently is
            critical, and this app provides a one-stop solution for all blood
            management needs. The app offers features like real-time tracking of
            blood stock levels, seamless management of blood donations, and
            detailed transaction history to ensure accuracy and transparency in
            every operation.
          </p>

          <p>
            With its user-friendly interface, the app allows administrators to
            monitor blood availability by type, quickly identify shortages, and
            take proactive measures to address them. It also includes features
            to manage donor databases, schedule donation drives, and notify
            regular donors about upcoming events or emergencies. These
            capabilities ensure that the blood bank operates at optimal
            efficiency, reducing wastage and improving the reliability of supply
            chains.
          </p>

          <p>
            Additionally, the app integrates advanced search and filter options
            for quick access to donor and recipient details. It enables
            hospitals and healthcare providers to make instant requests and
            facilitates easy communication between blood banks and stakeholders.
            By maintaining detailed records of blood transactions, the app
            promotes accountability and compliance with regulatory standards.
          </p>

          <p>
            The Manage Blood Bank App is more than just a management tool; it is
            a lifesaving system that ensures the right blood is available at the
            right place and time. With its innovative technology, it bridges the
            gap between donors and recipients, fostering a culture of generosity
            and responsibility. Whether it’s an emergency situation or routine
            operation, this app stands as a pillar of support for healthcare
            providers, making a significant impact on public health and
            well-being.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
