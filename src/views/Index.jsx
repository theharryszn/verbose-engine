import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChatsContext } from "../data/Chat";

const Index = () => {
  const [username, setUsername] = useState("");
  const { createUser } = useContext(ChatsContext);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      createUser(username);
      e.target.reset();
      navigate("/chats");
    },
    [username, createUser, navigate]
  );

  return (
    <main className="flex justify-center items-center w-screen h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-3 p-10 rounded-lg flex flex-col space-y-5 items-center w-full max-w-lg"
      >
        <h3 className="text-2xl font-medium">Tell us your name</h3>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name"
          className="bg-1/20 p-5 rounded-lg w-full text-black placeholder-1 outline-1"
        />
        <button type="submit" className="bg-4 p-5 rounded-lg w-full">
          next
        </button>
      </form>
    </main>
  );
};

export default Index;
