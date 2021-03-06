import styled from "styled-components";

const InputS = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;

  .input {
    border: none;
    border-radius: 0;
    padding: 5%;
    width: 80%;
    font-size: 1.2em;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  button {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979ff;
    padding: 20px;
    display: inline-block;
    border: none;
    width: 20%;
  }
`;

export default InputS;
