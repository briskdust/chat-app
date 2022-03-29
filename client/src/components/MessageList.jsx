import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const MessageList = props => {
  return (
    <ScrollToBottom className="messages">
      {props.msgs.map((msg, idx) => (
        <div key={idx}>
          <Message msg={msg.text} name={msg.user} user={props.user} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default MessageList;
