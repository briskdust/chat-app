import MessageS from "../styles/MessageS.styled";
import ReactEmoji from "react-emoji";

const Message = props => {
  let isCurrentUser = false;

  if (props.user === props.name) {
    isCurrentUser = true;
  }

  return isCurrentUser ? (
    <MessageS self={true}>
      <p className="username pr-10">{props.name}</p>
      <div className="messageBox backgroundBlue">
        <p className="text colorWhite">{ReactEmoji.emojify(props.msg)}</p>
      </div>
    </MessageS>
  ) : (
    <MessageS self={false}>
      <div className="messageBox backgroundLight">
        <p className="text colorDark">{ReactEmoji.emojify(props.msg)}</p>
      </div>
      <p className="username pl-10">{props.name}</p>
    </MessageS>
  );
};

export default Message;
