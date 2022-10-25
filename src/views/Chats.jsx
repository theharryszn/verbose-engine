import moment from "moment";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChatsContext } from "../data/Chat";

const Chats = () => {
  const { chats, sendMessage, currentUser } = useContext(ChatsContext);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [navigate, currentUser]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (message.length !== 0) {
        sendMessage(message, currentUser);
      }
      e.target.reset();
    },
    [sendMessage, currentUser, message]
  );

  return (
    <main className="relative w-screen h-screen p-10 bg-3 overflow-y-scroll">
      <div className="text-xs font-medium p-2 px-4 rounded-xl text-center w-full">
        You are {currentUser.username}
      </div>
      <div className="flex flex-col pb-32 space-y-2 justify-end w-full pt-10">
        {currentUser && chats.length !== 0 ? (
          chats.map((chat, key) => {
            const show =
              key === 0 ||
              (chats[key - 1] && chats[key - 1].from.id !== chat.from.id);
            return (
              <div
                key={key}
                style={{
                  alignSelf: chat.from.id === currentUser.id ? "end" : "start",
                }}
              >
                {show && (
                  <div className="flex flex-row space-x-2 items-center text-sm p-1">
                    <span className="font-medium">{chat.from.username}</span>
                    <span className="text-xs">
                      {moment(chat.dateAdded).fromNow()}
                    </span>
                  </div>
                )}
                <div className="flex text-white flex-col min-w-[10rem] max-w-[24rem] bg-1 px-4 rounded-xl hover:bg-opacity-70 transition cursor-pointer">
                  <span className="text-sm font-medium py-3">
                    {chat.message}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-sm text-center p-20 font-medium">No chat</div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 left-0 z-[9999] w-full bg-3 flex shadow-lg p-3"
      >
        <input
          type="text"
          placeholder="Enter message"
          className="bg-1/20 p-5 rounded-l-lg text-black placeholder-1 outline-1 flex-1"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="p-5 bg-2 text-white rounded-r-lg">
          Send
        </button>
      </form>
    </main>
  );
};

export default Chats;
