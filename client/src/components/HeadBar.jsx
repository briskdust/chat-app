import HeadBarS from "../styles/HeadBar.styled";

const HeadBar = props => {
  return (
    <HeadBarS>
      <div className="left">
        <i className="fa-solid fa-globe" title="this user is online"></i>
        <h3>{props.room}</h3>
      </div>
      <div className="right">
        <a href="/">
          <i className="fa-solid fa-xmark" title="leave the chat room"></i>
        </a>
      </div>
    </HeadBarS>
  );
};

export default HeadBar;
