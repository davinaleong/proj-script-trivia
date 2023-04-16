import './styles/main.scss'

import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import IApp from './interfaces/app.interface'
import ImageLogo from './assets/images/logo-blue-svg.svg'

export const App = ({ stepsData, viewsData }: IApp) => {
  const [step, setStep] = useState<number>(stepsData.completed)
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
        <button onClick={() => setStep(stepsData.completed)}>
          COMPLETED | 2
        </button>
        <button onClick={() => setStep(stepsData.contact)}>CONTACT | 2</button>

        <p>
          <FontAwesomeIcon icon={faEnvelope} />
        </p>
      </div>
      {viewsData[step]}
    </>
  )
}
