import { useState } from "react";
import styled from "styled-components";
import ModalPortal from "./components/ModalPortal";
import RecordModal from "./components/RecordModal";

const App = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const modalToggleHandler = () => {
    setIsModalOn(!isModalOn);
  };

  return (
    <AppContainer>
      <button onClick={modalToggleHandler}>play</button>
      <ModalPortal>
        {isModalOn && <RecordModal onClose={modalToggleHandler} />}
      </ModalPortal>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
