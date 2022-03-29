import { useRef } from "react";
import InputS from "../styles/InputS.styled";

const Input = props => {
  const msgRef = useRef();

  const sendMessage = event => {
    event.preventDefault();

    const msg = msgRef.current.value;
    props.socket.emit("sendMessage", msg);
    msgRef.current.value = "";
  };

  return (
    <InputS>
      <input
        className="input"
        placeholder="Type a message..."
        ref={msgRef}
        type="text"
      />
      <button onClick={sendMessage}>send</button>
    </InputS>
  );
};

export default Input;
