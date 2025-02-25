import React, { useState, useEffect, useCallback } from "react";
import { BeatIndicator } from "./BeatIndicator";
import { BPMControl } from "./BPMControl";
import { TimeSignature } from "./TimeSignature";
import { PlayButton } from "./PlayButton";
import styled from "styled-components";

const MetronomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e1e;
  color: white;
  height: 100vh;
  justify-content: center;
`;

export const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
  const [currentBeat, setCurrentBeat] = useState(0);

  // ✅ playClickをuseCallbackで定義
  const playClick = useCallback(() => {
    setCurrentBeat((prevBeat) => {
      const nextBeat = (prevBeat + 1) % beatsPerMeasure;
      playSound(nextBeat === 0);
      return nextBeat;
    });
  }, [beatsPerMeasure]);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      const interval = (60 / bpm) * 1000;
      timer = setInterval(playClick, interval); 
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlaying, bpm, playClick]); 

  //使用するwavファイルを入力
  const playSound = (isStrong) => {
    const sound = new Audio(
      isStrong? "/sounds/STRONG_BEAT_FILE.wav":"/sounds/WEAK_BEAT_FILE.wav"
    );
    sound.play().catch((error) => console.error("音声ファイルの再生に失敗:", error));
  };

  return (
    <MetronomeContainer>
      <BeatIndicator beatsPerMeasure={beatsPerMeasure} currentBeat={currentBeat} />
      <BPMControl bpm={bpm} setBpm={setBpm} />
      <TimeSignature beatsPerMeasure={beatsPerMeasure} setBeatsPerMeasure={setBeatsPerMeasure} />
      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </MetronomeContainer>
  );
};

