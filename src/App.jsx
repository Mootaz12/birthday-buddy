/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=10&nat=us"
        );
        const data = await response.json();
        setUsers(data.results);
        console.log(data.results);
      } catch (error) {
        console.log("error fetching usres", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="container">
      <h1>{users.length} birthdays today</h1>
      {users.map((user) => {
        return <UserCard user={user} key={user.login.uuid}></UserCard>;
      })}
      <button
        type="reset"
        onClick={() => {
          setUsers([]);
        }}
      >
        {" "}
        clear
      </button>
    </div>
  );
}
