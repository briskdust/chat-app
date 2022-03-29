import styled from "styled-components";

const HeadBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;

  .left {
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
  }

  .right {
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
  }

  .fa-globe {
    margin-right: 5%;
  }

  .fa-xmark {
    cursor: pointer;
  }
`;

export default HeadBar;
