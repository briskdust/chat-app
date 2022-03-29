import queryString from "query-string";
import HeadBar from "./HeadBar";
import Input from "./Input";
import io from "socket.io-client";
import ChatBox from "../styles/ChatBox.styled";
import MessageList from "./MessageList";
import { useEffect, useState } from "react";
import { useRef } from "react";

let socket;

const Chat = ({ location }) => {
  const [msgs, setMsgs] = useState([]);

  // one method to do it
  //const socket = useRef(io("http://localhost:3036")).current;

  useEffect(() => {
    socket = io("http://localhost:3036");
  }, []);

  const { name, room } = queryString.parse(location.search);

  useEffect(() => {
    socket.emit("join", { name, room });
  }, [name, room]);

  useEffect(() => {
    socket.on("message", msg => {
      setMsgs([...msgs, msg]);
    });
  }, [msgs]);

  return (
    <ChatBox>
      <div className="container">
        <HeadBar room={room} />
        <MessageList msgs={msgs} user={name} />
        <Input socket={socket} />
      </div>
    </ChatBox>
  );
};

export default Chat;
