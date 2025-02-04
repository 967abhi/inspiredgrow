import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate("/");

  // Dummy user data
  const users = [
    {
      id: 1,
      storeName: "grocery on wheels",
      userName: "hisargow",
      name: "hisar gow",
      mobile: "",
      email: "hisargow@gmail.com",
      role: "hisargow",
      createdOn: "15-07-2024",
      status: "Active",
    },
    {
      id: 2,
      storeName: "grocery on wheels",
      userName: "inspiredgrow@gmail.com",
      name: "inspired grow",
      mobile: "",
      email: "inspiredgrow@gmail.com",
      role: "Store Admin",
      createdOn: "15-07-2024",
      status: "Active",
    },
    // Add more dummy user data here
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col h-screen ">
      {/* <Navbar /> */}
      <Navbar />
      <div className="flex flex-grow">
        {/* <Sidebar /> */}
        <Sidebar />
        <div className="container mx-auto py-10 p-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Users List</h1>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate("/admin/add/user")}
            >
              + Create User
            </button>
          </div>
          <div className="flex justify-start mb-4">
            <select
              className="px-4 py-2 border border-gray-300 rounded-md"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="10">10 entries</option>
              <option value="25">25 entries</option>
              <option value="50">50 entries</option>
              <option value="100">100 entries</option>
            </select>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Store Name</th>
                <th className="px-4 py-2 text-left">User Name</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Mobile</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Created on</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id} className="border-b">
                  <td className="px-4 py-2">{indexOfFirstItem + index + 1}</td>
                  <td className="px-4 py-2">{user.storeName}</td>
                  <td className="px-4 py-2">{user.userName}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.mobile}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">{user.createdOn}</td>
                  <td className="px-4 py-2">{user.status}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`mx-2 px-4 py-2 rounded ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
