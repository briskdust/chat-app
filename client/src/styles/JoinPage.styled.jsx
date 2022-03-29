import styled from "styled-components";

const JoinPage = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;

  .container {
    width: 20%;
  }

  .joinInput {
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
  }

  .heading {
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
  }

  button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979ff;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;

    margin-top: 20px;
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .joinOuterContainer {
      height: 100%;
    }

    .joinInnerContainer {
      width: 90%;
    }
  }

  button:focus {
    outline: 0;
  }
`;

export default JoinPage;
