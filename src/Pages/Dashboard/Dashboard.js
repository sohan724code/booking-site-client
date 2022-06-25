import "./Dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashContainer">Container</div>
    </div>
  );
};

export default Dashboard;
