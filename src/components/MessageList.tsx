import React from "react";

interface MessageListProps {
  messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <ul>
    {messages.map((message, index) => (
      <li key={index}>{message}</li>
    ))}
  </ul>
);

export default MessageList;
