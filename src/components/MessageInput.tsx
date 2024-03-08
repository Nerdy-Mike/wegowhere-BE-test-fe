import React, { useState } from "react";

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      setError("Input cannot be empty");
    } else {
      onSend(message);
      setMessage("");
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {error && <p className="text-red-600">{error}</p>}
        </div>

        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default MessageInput;
