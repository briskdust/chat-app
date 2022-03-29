import styled from "styled-components";

const MessageS = styled.div`
  display: flex;
  justify-content: ${props => (props.self ? "flex-end" : "flex-start")};
  padding: 0 5%;
  margin-top: 3px;

  .messageBox {
    background: #f3f3f3;
    border-radius: 20px;
    padding: 5px 20px;
    color: white;
    display: inline-block;
    max-width: 80%;
  }

  .text {
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1em;
    word-wrap: break-word;
  }

  .text img {
    vertical-align: middle;
  }

  .username {
    display: flex;
    align-items: center;
    font-family: Helvetica;
    color: #828282;
    letter-spacing: 0.3px;
  }

  .pl-10 {
    padding-left: 10px;
  }

  .pr-10 {
    padding-right: 10px;
  }

  .justifyStart {
    justify-content: flex-start;
  }

  .justifyEnd {
    justify-content: flex-end;
  }

  .colorWhite {
    color: white;
  }

  .colorDark {
    color: #353535;
  }

  .backgroundBlue {
    background: #2979ff;
  }

  .backgroundLight {
    background: #f3f3f3;
  }
`;

export default MessageS;
