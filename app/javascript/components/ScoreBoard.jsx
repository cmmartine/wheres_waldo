import React from "react";

export default function ScoreBoard(props) {
  const { scoreList } = props;

  return(
    <div className="score-board">
      <div className="score-title-container">
        <h1>High Scores</h1>
      </div>
      {
      scoreList
      .sort((x, y) => {
      return x.score - y.score;
      })
      .map((obj) => (
        <div>{obj.name}: {Math.floor(obj.score / 60)} minutes {obj.score % 60} seconds</div>
      ))
      }
    </div>
  )
}