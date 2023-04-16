import { useState } from 'react'
import IApp from './interfaces/app.interface'
import ImageLogo from './assets/images/logo-blue-svg.svg'
import './styles/main.scss'
import { Helmet } from 'react-helmet-async'

export const App = ({ stepsData, viewsData }: IApp) => {
  const [step, setStep] = useState<number>(stepsData.finished)
  // const [step, setStep] = useState<number>(stepsData.home)
  // const [quiz, setQuiz] = useState(null)

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={ImageLogo} />
      </Helmet>
      <div className="container">
        <button onClick={() => setStep(stepsData.home)}>HOME | 0</button>
        <button onClick={() => setStep(stepsData.quiz)}>QUIZ | 1</button>
        <button onClick={() => setStep(stepsData.finished)}>
          FINISHED | 2
        </button>
        <button onClick={() => setStep(stepsData.contact)}>CONTACT | 2</button>
      </div>
      {viewsData[step]}
    </>
  )
}
