import { useHistory } from "react-router-dom";
import { useRef } from "react";
import JoinPage from "../styles/JoinPage.styled";

const Join = () => {
  const nameRef = useRef();
  const roomRef = useRef();
  const history = useHistory();

  const onSubmitHandler = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const room = roomRef.current.value;

    history.push(`/chat?name=${name}&room=${room}`);
  };

  return (
    <JoinPage>
      <div className="container">
        <h1 className="heading">Join</h1>
        <input
          className="joinInput"
          placeholder="name"
          type="text"
          name="name"
          id="name"
          ref={nameRef}
        />
        <input
          className="joinInput"
          placeholder="room"
          type="text"
          name="room"
          id="room"
          ref={roomRef}
        />

        <button type="submit" onClick={onSubmitHandler}>
          Start Chatting!
        </button>
      </div>
    </JoinPage>
  );
};

export default Join;
