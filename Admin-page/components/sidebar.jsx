import React from "react";

const sidebar = () => {
  return (
    <>
        <div>
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="lab la-accusoft"></span> <span>Admin</span></h2>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="" className="active"><span className="las la-igloo"></span><span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-clipboard-list"></span><span>Orders</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-users"></span><span>Customers</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-clipboard-list"></span><span>Products</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-receipt"></span><span>Inventory</span></a>
                        </li>
                        <li>
                            <a href=""><span className="las la-user-circle"></span><span>Account</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
};

export default sidebar;
