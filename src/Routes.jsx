/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "./views/Chats";
import Index from "./views/Index";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/chats" element={<Chats />} />
    </Routes>
  );
};
