import { useState } from 'react'
import IApp from './interfaces/app.interface'
import './styles/main.scss'

export const App = ({ stepsData, viewsData }: IApp) => {
  const [step, setStep] = useState<number>(stepsData.home)
  // const [quiz, setQuiz] = useState(null)

  return (
    <>
      <div className="container">
        <button onClick={() => setStep(stepsData.home)}>HOME | 0</button>
        <button onClick={() => setStep(stepsData.quiz)}>QUIZ | 1</button>
        <button onClick={() => setStep(stepsData.finished)}>
          FINISHED | 2
        </button>
      </div>
      {viewsData[step]}
    </>
  )
}
