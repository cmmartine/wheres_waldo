import React from "react";

export default function ScoreBoard(props) {
  const { scoreList, scoreBoardStyle } = props;

  const ONE = 1;
  const TWO = 2;
  const THREE = 3;

  return (
    <div className={scoreBoardStyle}>
      <div className="score-title-container">
        <h1>High Scores</h1>
      </div>
      <h2 className='score-group-heading'>Character Group {ONE}:</h2>
      {
        scoreList
          .sort((x, y) => {
            return x.score - y.score;
          })
          .map((entry) => {
            if (entry.character_group == ONE) {
              return <div className='scores'>{entry.name}: {Math.floor(entry.score / 60)} minutes {entry.score % 60} seconds</div>
            }
          })
      }
      <h2 className='score-group-heading'>Character Group {TWO}:</h2>
      {
        scoreList
          .sort((x, y) => {
            return x.score - y.score;
          })
          .map((entry) => {
            if (entry.character_group === TWO) {
              return <div className='scores'>{entry.name}: {Math.floor(entry.score / 60)} minutes {entry.score % 60} seconds</div>
            }
          })
      }
      <h2 className='score-group-heading'>Character Group {THREE}:</h2>
      {
        scoreList
          .sort((x, y) => {
            return x.score - y.score;
          })
          .map((entry) => {
            if (entry.character_group === THREE) {
              return <div className='scores'>{entry.name}: {Math.floor(entry.score / 60)} minutes {entry.score % 60} seconds</div>
            }
          })
      }
    </div>
  )
}