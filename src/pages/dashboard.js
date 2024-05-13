import React, { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div className='bg-gray-background'>
      <Header />
      <div className='grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg'>
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
