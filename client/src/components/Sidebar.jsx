import React from "react";
import Search from "./Search.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";
import useGetConversations from "../hooks/useGetConversations.jsx";

const Sidebar = () => {
  const { loading, users } = useGetConversations();

  return (
    <div style={{ flex: 1 }}>
      <div className="flex items-center gap-4 p-4">
        <Search users={users} />
        <LogoutButton />
      </div>
      <div className="divider my-0"></div>
      <Conversations users={users} loading={loading} />
    </div>
  );
};

export default Sidebar;
