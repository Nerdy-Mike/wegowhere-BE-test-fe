import React, { useEffect, useState } from "react";
import "./App.css";

import io, { Socket } from "socket.io-client";

import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";

function App() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const send = (message: string) => {
    if (socket) {
      socket.emit("message", message);
    }
  };

  const messageListener = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };

  useEffect(() => {
    const socket = io("http://localhost:8001");
    setSocket(socket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", messageListener);
    }
    return () => {
      if (socket) {
        socket.off("message", messageListener);
      }
    };
  }, [socket]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageInput onSend={send} />
    </div>
  );
}

export default App;
