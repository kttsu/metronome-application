import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.6; }
`;

const BeatContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const BeatCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? (props.isStrong ? "#FFA500" : "#0096FF") : "#555")};
  border: 2px solid #FFA500;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.isActive ? pulse : "none")} 0.3s ease-in-out;
`;

export const BeatIndicator = ({ beatsPerMeasure, currentBeat }) => {
  return (
    <BeatContainer>
      {[...Array(beatsPerMeasure)].map((_, index) => (
        <BeatCircle key={index} isActive={index === currentBeat} isStrong={index === 0} />
      ))}
    </BeatContainer>
  );
};

