import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <>
      {new Date().toLocaleTimeString()}
      <br />
      <Link href="/">Home</Link>
      <h1 className="font-bold text-2xl pb-5">Users</h1>

      <table className="table table-border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul></ul>
    </>
  );
};

export default UsersPage;
