import React from "react";
import styled from "styled-components";
import RecordPlayer from "./RecordPlayer";

const RecordModal = (props) => {
  return (
    <BackDrop>
      <RecordPlayer />
    </BackDrop>
  );
};

const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: #aaa;
  /* opacity: 50%; */
`;

export default RecordModal;
