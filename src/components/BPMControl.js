import React from "react";
import styled from "styled-components";

const BPMContainer = styled.div`
  background: white;
  color: black;
  padding: 20px;
  border-radius: 50%;
  width: 150px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const BPMText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const BPMControl = ({ bpm, setBpm }) => {
  return (
    <BPMContainer>
      <BPMText>{bpm} BPM</BPMText>
      <button onClick={() => setBpm((prev) => Math.max(40, prev - 1))}>-</button>
      <button onClick={() => setBpm((prev) => Math.min(300, prev + 1))}>+</button>
    </BPMContainer>
  );
};

