import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Jered",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9pCH9Vse1lq2vwEsVUpskgHaH2%26pid%3DApi&f=1",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
