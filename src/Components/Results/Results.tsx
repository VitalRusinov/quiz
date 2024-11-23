import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../slices';

import styles from './Results.module.scss';
import getResultTitle from './getResultTitle';

const Results = () => {
  const answers = useSelector((state: RootState) => state.answers.answers);
  const correctAnswersCount = answers.reduce(((acc, answer) => answer.isAnswerCorrect ? acc + 1: acc), 0)

  return(
    <div className={styles.result}>
      {getResultTitle(correctAnswersCount ,answers.length)}
      <ul className={styles['answers-container']}>
        {answers.map(answer => {
          const {id, question, correctAnswer, isAnswerCorrect} = answer;
          return (
            <li key={id} className={isAnswerCorrect ? styles.correct : styles.uncorrect}>
              <p>{question}</p>
              <span>{correctAnswer}</span>
            </li>
          )
        })}
      </ul>
    </div>


  )
}

export default Results;  