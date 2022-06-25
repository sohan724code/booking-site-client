import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;
