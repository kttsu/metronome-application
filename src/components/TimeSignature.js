import React from "react";

export const TimeSignature = ({ beatsPerMeasure, setBeatsPerMeasure }) => {
  return (
    <div>
      <select value={beatsPerMeasure} onChange={(e) => setBeatsPerMeasure(Number(e.target.value))}>
        <option value={2}>2/4</option>
        <option value={3}>3/4</option>
        <option value={4}>4/4</option>
        <option value={8}>8/8</option>
      </select>
    </div>
  );
};

