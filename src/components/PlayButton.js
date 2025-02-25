import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: orange;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;
`;

export const PlayButton = ({ isPlaying, setIsPlaying }) => {
  return <Button onClick={() => setIsPlaying((prev) => !prev)}>{isPlaying ? "■" : "▶"}</Button>;
};

