import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { getJSONData, updateJSONData } from "../helpers/store";
import { v4 as uuid } from "uuid";

export class Chat {
  id = uuid();
  from;
  message;
  dateAdded = new Date();

  constructor(message, from) {
    this.message = message;
    this.from = from;
  }
}

export class User {
  id = uuid();
  username;
  dateJoined = new Date();

  constructor(username) {
    this.username = username;
  }
}

export const ChatsContext = React.createContext({
  chats: [],
  users: [],
  currentUser: null,
  createUser(username) {
    return;
  },
  sendMessage(message, from) {
    return;
  },
});

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(getJSONData("chats"));
  const [users, setUsers] = useState(getJSONData("users"));
  const [currentUser, setCurrentUser] = useState(null);

  const createUser = useCallback((username) => {
    const cre = new User(username);
    setUsers((prev) => [...prev, cre]);
    setCurrentUser(cre);
  }, []);

  useEffect(() => {
    updateJSONData("users", users);
    updateJSONData("chats", chats);
  }, [users, chats]);

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      setChats(getJSONData("chats"));
      setUsers(getJSONData("users"));
    });
  }, []);

  const sendMessage = useCallback((message, from) => {
    setChats((prev) => [...prev, new Chat(message, from)]);
  }, []);

  return (
    <ChatsContext.Provider
      value={{
        chats,
        users,
        createUser,
        sendMessage,
        currentUser,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatProvider;
